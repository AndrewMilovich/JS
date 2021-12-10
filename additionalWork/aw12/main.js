// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        for (const user of value) {
            let div = document.createElement('div');
            let h = document.createElement('h2');
            h.innerText = user.name;
            let button = document.createElement("button");
            button.innerText = 'Show Post User'
            let divAddress = document.createElement("div");
            let street = document.createElement("div");
            street.innerText=user.address.street;

button.onclick=function () {

}
divAddress.append(street);
            div.append(h,divAddress);
            document.body.append(div);
        }

    })