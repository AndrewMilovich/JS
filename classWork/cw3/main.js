// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
i = 0;
while (i < arr.length) {
    console.log(arr[i])
    i++
}
// 2. перебрати його циклом for
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < arr.length) {
    if (i % 2 === 1) {
        console.log(arr[i])
    }
    i++

}
document.write('<div>перебрати циклом for та вивести  числа тільки з непарним індексом</div>')
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
        document.write('<div></div>')
        document.write(arr[i])
    }

}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
document.write('<div> 5. перебрати циклом while та вивести  числа тільки парні  значення</div>')
i = 0;
while (i < arr.length) {
    if (arr[i] % 2 === 0) {
        document.write('<div></div>')
        document.write(arr[i])
    }
    i++

}
document.write('<div>  6. перебрати циклом for та вивести  числа тільки парні  значення</div>')
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        document.write('<div></div>')
        document.write(arr[i])
    }
}
document.write('<div>  7. замінити кожне число кратне 3 на слово "okten"</div>')
// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        arr[i] = 'okten';

    }
    document.write('<div></div>')
    document.write(arr[i])
}
document.write('<div>  8. вивести масив в зворотньому порядку</div>')
// 8. вивести масив в зворотньому порядку.
let arrNumBack = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
for (let i = arrNumBack.length-1; i >= 0; i--) {
    document.write('<div></div>')
    document.write(arrNumBack[i])
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)