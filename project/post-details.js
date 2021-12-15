// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let wrap = document.createElement('div');
wrap.classList.add('wrap');
let item = localStorage.getItem('post');
let post = JSON.parse(item);

let divPost = document.createElement("div");
divPost.classList.add('divPost');

divPost.innerHTML = `
<h2>idPost: 
${post.id}</h2>
<h3>titlePost: 
${post.title}</h3>
<h3>bodyPost: 
${post.body}</h3>
`

wrap.append(divPost);
fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
    .then(comment => comment.json())
    .then(comments => {
        let allComments = document.createElement("div");
        allComments.classList.add('allComments');
        for (const comment of comments) {
            let divComments = document.createElement("div");
            divComments.classList.add('divComments');
            divComments.innerHTML = `
<h3>idComment: 
${comment.id}</h3>
<h4>NameComment: 
${comment.name}</h4>
<h4>EmailComment: 
${comment.email}</h4>
<h4>BodyComment: 
${comment.body}</h4>
`
            allComments.append(divComments)
            wrap.append(allComments)
        }
        document.body.append(wrap)
    })

