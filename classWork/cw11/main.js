// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з кнопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву
// favorites улюблених обраних об'єктів в локальному сховищі.

let favourites=[]

for (let user of users) {
    let name = document.createElement("div");
    name.innerText = user.name;
    let age = document.createElement("div");
    age.innerText = user.age;
    let status = document.createElement("div");
    status.innerText = user.status;
    let divUser = document.createElement('div');
    divUser.classList.add('user')
    let button = document.createElement("button");
    button.innerText='send to local storage';
    divUser.append(name,age,status,button)
    document.body.append(divUser)
button.onclick=function () {
         favourites.push(user);
    localStorage.setItem('user', JSON.stringify(favourites));
}
}
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let buttonFavourites = document.createElement("button");
let anchorElement = document.createElement("a");
anchorElement.innerText='go to favourites'
anchorElement.href="./favourites.html";
buttonFavourites.append(anchorElement);
document.body.append(buttonFavourites);
