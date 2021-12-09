let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let div = document.createElement('div');

let input1 = document.createElement('input');
input1.type='checkbox'
input1.style.width='30px'
input1.style.height='30px'

let input2 = document.createElement('input');
input2.type='checkbox'
input2.style.width='30px'
input2.style.height='30px'


let input3 = document.createElement('input');
input3.type='checkbox'
input3.style.width='30px'
input3.style.height='30px'

div.append(input1,input2,input3)
document.body.append(div)
input1.onclick=function () {
        if (this.checked) {
            let filterStatus = usersWithAddress.filter((value) => value.status === false);
            for (const filterStatus1 of filterStatus) {
                document.write(`Name:${filterStatus1.name}   age:${filterStatus1.age}    status:${filterStatus1.status}   address:${filterStatus1.address.city}  ${filterStatus1.address.street}  `)
                document.write(`<div></div>`)
            }
        } else
            console.log('idi')
}
input2.onclick=function () {
    if (this.checked) {
       usersWithAddress.filter((value) => value.age >=29)
    }
}
input3.onclick=function () {
    if (this.checked) {
        console.log(usersWithAddress.filter((value) => value.address.city ==='Kyiv'))
    }
}