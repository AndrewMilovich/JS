// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(value => value.json())
    .then(posts => {
        for (const post of posts) {
            let div = document.createElement("div");
            div.classList.add('styleUsers');
            let title = document.createElement('h2');
            title.innerText = `${post.id} ${post.title}`;
            let p = document.createElement('p');
            p.innerText = post.body;
            let button = document.createElement('button');
            button.innerText = 'Show Post';
            button.style.margin = '20px';
            button.onclick = function (id) {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(comment => comment.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (post.id === comment.postId) {
                                let divComment = document.createElement("div");
                                divComment.innerHTML = `<h3>ID:${comment.id}</h3>
<h4>name:${comment.name}</h4>
<h5>email:${comment.email}</h5>
<h6>body:${comment.body}</h6>`;
                                div.appendChild(divComment)
                            }

                        }


                    })
            }
            div.append(title, p, button);
            document.body.append(div);
        }
    })