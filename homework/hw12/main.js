// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// fetch(`https://jsonplaceholder.typicode.com/posts`).then(value => value.json())
//     .then(json => {
//         for (const user of json) {
//             let div = document.createElement('div');
//             div.classList.add('styleUsers');
//             let title = document.createElement('h2');
//             title.innerText = user.title;
//             let body = document.createElement('p');
//             body.innerText = user.body;
//             div.append(title, body)
//             document.body.append(div)
//         }
//     })
//

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
//
// fetch(`https://jsonplaceholder.typicode.com/comments`).then(value => value.json())
//     .then(json => {
//         for (const user of json) {
//             let div = document.createElement('div');
//             div.classList.add('styleUsers');
//             let header = document.createElement("h2");
//             header.innerText = user.name;
//             let email = document.createElement("div");
//             email.innerText = user.email;
//             let body = document.createElement("p");
//             body.innerText = user.body;
//
// div.append(header,email,body);
//             document.body.append(div)
//         }
//     })
//
