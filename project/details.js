// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

    let item = localStorage.getItem('user');
let user = JSON.parse(item);
let userDiv = document.createElement("div");
userDiv.classList.add('user');
userDiv.innerHTML=`<h2>Id:${user.id} - Name: ${user.name} - UserName: ${user.username}</h2>
<h3>email: ${user.email}</h3>
<h3>Address: </h3>
<h4>street: ${user.address.street} </h4>
<h4>suite: ${user.address.suite} </h4>
<h4>city: ${user.address.city} </h4>
<h4>zipcode: ${user.address.zipcode} </h4>
<h3>Geo: </h3>
<h5>Lat: ${user.geo.lat}</h5>
<h5>Lng: ${user.geo.lng} </h5>
`
let postButton = document.createElement("button");
postButton.classList.add('buttonUser');
postButton.innerText='Всі Пости Користувача';
let wrap = document.createElement('div');
wrap.classList.add('wrap');

postButton.onclick=function (e) {
    fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
        .then(post=>post.json())
        .then(posts=>{
            for (const post of posts) {
                let divPost = document.createElement("div");
                divPost.classList.add('divPost');
                divPost.innerHTML=`<h3>Posts User №:${post.id}</h3>
<h4>${post.title}</h4>`
                let infoButtonPost = document.createElement("button");
              let anchorElement = document.createElement('a');
              anchorElement.innerText='Детальніше про пост';
              anchorElement.href='./post-details.html';
              infoButtonPost.append(anchorElement);
              infoButtonPost.classList.add('buttonUser');
                divPost.append(infoButtonPost)
                wrap.append(divPost);
                infoButtonPost.onclick=function () {
                    let postLoad={id: post.id, title: post.title, body: post.body};
                    localStorage.setItem('post', JSON.stringify(postLoad));
                }

            }
        })
    userDiv.append(wrap)
}



userDiv.append(postButton);
document.body.append(userDiv);