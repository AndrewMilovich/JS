// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
fetch('https://jsonplaceholder.typicode.com/users')
    .then(user => user.json())
    .then(users => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrap')
        for (const user of users) {
            let divUser = document.createElement(`div`);
            divUser.classList.add('user');
            divUser.innerHTML = `<h2>Id:${user.id}  - Name: ${user.name}</h2>`
            let buttonUser = document.createElement("button");
            buttonUser.classList.add(`buttonUser`);
            let anchorElement = document.createElement('a');
            anchorElement.classList.add('anchor');
            anchorElement.innerText = 'Детальніше про користувача';
            anchorElement.href = './user-details.html';
            buttonUser.onclick = function (e) {

                let userLoad = {
                    id: user.id, name: user.name, username: user.username, email: user.email,
                    address:
                        {
                            street: user.address.street,
                            suite: user.address.suite,
                            city: user.address.city,
                            zipcode: user.address.zipcode
                        },
                    geo: {
                        lat: user.address.geo.lat,
                        lng: user.address.geo.lng
                    }
                };
                localStorage.setItem('user', JSON.stringify(userLoad));
            }
            buttonUser.append(anchorElement);
            divUser.append(buttonUser);
            wrap.appendChild(divUser);
        }

        document.body.append(wrap);
    })

