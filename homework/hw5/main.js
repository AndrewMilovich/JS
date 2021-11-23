let arr = [2, 3, 'action', 'ivan', true]
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
let areaP = (a, b) => a * b;

console.log(areaP(2, 8))
// - створити функцію яка обчислює та повертає площу кола
const Pi = 3.14;
let areaCircle = (r) => Pi * Math.pow(r, 2);
// - створити функцію яка обчислює та повертає площу циліндру
let areaCylinder = (r, h) => 2 * Pi * r * h
// - створити функцію яка приймає масив та виводить кожен його елемент
let arrVision = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
arrVision(arr)
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let arrParagraph = (text) => {
    document.write(`<p>${text}</p>`)
}
arrParagraph(`dsfsfsdfsd`)

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let funcLi = (text) => {
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`)
}
funcLi(`Andryuxa krasavchuk`)
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let listManager = (text, limit) => {
    document.write(`<ul>`)
    for (let i = 0; i < limit; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
listManager(`Andryuxa krasavchuk`,4)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrEasy=(arr)=>{
    for (let i = 0; i < arr.length; i++) {
        document.write(`<ul><li>${arr[i]}</li></ul>`)
    }
}
arrEasy(arr)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let newArray = [{id: 1, name: 'Andrew', age: 25}, {id: 2, name: 'Serhiy', age: 20}, {id: 3, name: 'Vasya', age: 33}];
let arrObject=(arr)=>{
    for (let i = 0; i < arr.length; i++) {
        document.write(`<div>Id:${arr[i].id}   Name:${arr[i].name}---------------Age:${arr[i].age}</div>`)
    }
}
arrObject(newArray)