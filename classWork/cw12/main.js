// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(value => value.json())
    .then(posts => {
        for (const post of posts) {
            let div = document.createElement("div");
            div.classList.add('styleUsers');
            let button = document.createElement('button');
            button.innerText = 'Show Post';
            button.style.margin = '20px';
            let title = document.createElement('h2');
            let p = document.createElement('p');
            div.append(button, title, p);
            button.onclick = function () {
                title.innerText = post.title;
                p.innerText = post.body;
            }
            document.body.append(div);
        }
    })