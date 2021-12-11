// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(user => user.json())
    .then(users => {
        for (const user of users) {
            let divUser = document.createElement('div');
            let h = document.createElement('h2');
            h.innerHTML = `${user.id} - ${user.name} - ${user.email}`;
            let buttonPost = document.createElement("button");
            buttonPost.innerText = 'Show Post User';
            buttonPost.onclick = function (id) {
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                    .then(post => post.json())
                    .then(posts => {
                        for (const post of posts) {
                            let divPost = document.createElement(`div`);
                            divPost.innerHTML = ` <h3>POST id:${post.id}</h3>
<h4>title:${post.title}</h4>
<h5>body:${post.body}</h5>`;
                            let buttonComments = document.createElement("button");
                            buttonComments.innerText = 'show comments';
                            divUser.append(divPost, buttonComments);
                            buttonComments.onclick = function (id) {
                                fetch('https://jsonplaceholder.typicode.com/users' + user.id + '/posts' + post.id + `/comments`)
                                    .then(comment => comment.json())
                                    .then(comments => {
                                        for (const comment of comments) {
                                            if (post.id === comment.postId) {
                                                let divComment = document.createElement('div');
                                                divComment.innerHTML = `<h3>COMMENT ID:${comment.id}</h3>
<h4> name:${comment.name}</h4>
<h5>email:${comment.email}</h5>
<h6>body:${comment.body}</h6>`;
                                                divPost.appendChild(divComment)
                                            }
                                        }
                                    })
                            }
                        }
                    })
            }
            divUser.append(h, buttonPost);
            document.body.append(divUser);

        }
    })