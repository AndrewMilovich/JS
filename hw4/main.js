// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// const Pi = 3.14
// function squareP(a, b) {
//     return a * b;
// }


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function squareCircle(r) {
//     const Pi = 3.14
//     return Pi * Math.pow(r, 2);
// }

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function squareСylinder(r, h) {
//     let areaСylinder = 2 * Pi * r * h
//     return areaСylinder;
// }

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [2, 3, 'action', 'ivan', true]

function arrVision(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

arrVision(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphText(text) {
    document.write(`<p>${text}</p>`)
}

paragraphText(`dsfsfsdfsd`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listManager(textLi) {
    document.write(`<ul>
        <li>${textLi}</li>
        <li>${textLi}</li>
        <li>${textLi}</li>

    </ul>`)
}

listManager(`Andryuxa krasavchuk`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listManager2(textLi, countLi) {

    document.write(`<ul>`)
    for (let i = 0; i < countLi; i++) {
        document.write(`<li>${textLi}</li>`)


    }
    document.write(`</ul>`)
}

listManager2(`loved`, 4)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr1 = [2, 3, 'action', 'ivan', true]

function arrEasy(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
}

arrEasy(arr1)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let newArray = [{id: 1, name: 'Andrew', age: 25}, {id: 2, name: 'Serhiy', age: 20}, {id: 3, name: 'Vasya', age: 33}];
function arrObject(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<div>id:${arr[i].id} Name:${arr[i].name}------Age:${arr[i].age}</div>`)
    }
}
arrObject(newArray)

