// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNumber(a, b, c) {

    if (a < b && a < c) {
        document.write(a)
    } else if (b < a && b < c) {
        document.write(b)
    } else if (c < b && c < a) {
        document.write(c)
    } else {
        document.write('VVod Chusla')
    }
}

minNumber(12, 3, 4)
document.write('<div></div>')

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxNumber(a, b, c) {
    if (a > b && a > c) {
        document.write(a)
    } else if (b > a && b > c) {
        document.write(b)
    } else if (c > b && c > a) {
        document.write(c)
    } else {
        document.write('VVod Chusla')
    }
}

maxNumber(12, 3, 4)
document.write('<div></div>')

// - створити функцію яка повертає найбільше число з масиву
function maxNum(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    document.write(`${max}`);
}

let arrEx = [123, 32, 6, 4,123,45455,44,2];
maxNum(arrEx)

document.write('<div></div>')

// - створити функцію яка повертає найменьше число з масиву
function minNum(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    document.write(`${min}`);
}

minNum(arrEx)
document.write('<div></div>')

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function arrSum(arr) {
    let Sum = 0;
    for (let i = 0; i < arr.length; i++) {
        Sum += arr[i];
    }
    document.write(`${Sum}`)
}
arrSum(arrEx)
document.write('<div></div>')

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arrSer(arr) {
    let Ser = 0;
    for (let i = 0; i < arr.length; i++) {
        Ser += arr[i]/arr.length;
    }
    document.write(`${Ser}`)
}
arrSer(arrEx)
document.write('<div></div>')
// - створити фун(цію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function arrCount(arguments){
    let min=arguments[0];
    let max=arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
        if (arguments[i] < min) {
            min = arguments[i]
        }
    }

    document.write(`${max}`)
    return min;

}
arrCount(arrEx)

document.write('<div></div>')
// - створити функцію яка заповнює масив рандомними числами
function random(arr){
    let array=[];
    for (let i = 0; i < arr; i++) {
        array[i]=Math.round(Math.random()*100)
    }
    document.write(`${array}`)
}
random(4)

document.write('<div></div>')
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function randomLimit(arr,limit){
    let array=[];
    for (let i = 0; i < arr; i++) {
        array[i]=Math.round(Math.random()*limit)
    }
    document.write(`${array}`)
}
randomLimit(4,50)
document.write('<div></div>')
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


function arrReverse(arr){
    let array=[];
    for (let i = arr.length-1; i >=0; i--) {
array.push(arr[i])
    }
    document.write(`${array}`)
}
let arrExample=[234,23,4,5]
arrReverse(arrExample)






















