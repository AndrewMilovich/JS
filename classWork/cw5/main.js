//
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let min = (a, b, c) => {
    if (a < c && a < b) {
        document.write(a)
    } else if (b < a && b < c) {
        document.write(b)
    } else if (c < b && c < a) {
        document.write(c)
    } else {
        document.write('VVod ')
    }
}
min(2, 3, 5)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let max = (a, b, c) => {
    if (a > c && a > b) {
        document.write(a)
    } else if (b > a && b > c) {
        document.write(b)
    } else if (c > b && c > a) {
        document.write(c)
    } else {
        document.write('VVod ')
    }
}
max(2, 3, 5)
// - створити функцію яка повертає найбільше число з масиву
let maxArr = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    document.write(`${max}`)
}
// - створити функцію яка повертає найменьше число з масиву
let minArr = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    document.write(`${min}`)
}
let arrEx = [123, 32, 6, 4, 123, 45455, 44, 2];
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arrSum = (arr) => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    document.write(`<div></div>`)
    document.write(` ${sum}`)
}
arrSum(arrEx)
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arrSer = (arr) => {
    let ser = 0;
    for (let arrElement of arr) {
        ser += arrElement / arr.length;
    }
    document.write(`<div></div>`)
    document.write(` ${ser}`)
}


arrSer(arrEx);
document.write(`<div></div>`)
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let arrCount = (arr) => {
    let min = arr[0]
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    document.write(`${max}`)
    return min;
}
arrCount(arrEx);
document.write(`<div></div>`)
// - створити функцію яка заповнює масив рандомними числами
let arrRandom = (arr) => {
    let array = []
    for (let i = 0; i < arr; i++) {
        array[i] = Math.random();
    }
    document.write(`${array}`)
}
arrRandom(4)
document.write(`<div></div>`)
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let arrRandomHundred = (arr) => {
    let array = []
    for (let i = 0; i < arr; i++) {
        array[i] = Math.round(Math.random() * 100);
    }
    document.write(`${array}`)
}
arrRandomHundred(4)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
document.write(`<div></div>`)
let arrRandomLimit = (arr, limit) => {
    let array = []
    for (let i = 0; i < arr; i++) {
        array[i] = Math.round(Math.random() * limit);
    }
    document.write(`${array}`)
}
arrRandomLimit(4, 50)
document.write(`<div></div>`)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arrReverse = (arr) => {
    let array=[];
    for (let i = arr.length-1; i >=0 ; i--) {
        array.push(arr[i])
    }
    document.write(`${array}`)
}
let arrExample=[234,23,4,5]
arrReverse(arrExample)
