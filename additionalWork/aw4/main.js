// //
// //
// // - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function argCon() {
//         return arguments.length===1?arguments[0]:arguments[0]+arguments[1];
//
// }
// document.write(argCon(4,5))
// // - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// //     EXAMPLE:
// // [1,2,3,4]
// //     [2,3,4,5]
// // результат
// //     [3,5,7,9]
// let arr1 = [1, 2, 3, 4]
// let arr2 = [2, 3, 4, 5]
//
// function sumArr(arr1, arr2) {
//     let arr3 = [];
//     for (let i = 0; i < arr1.length; i++) {
//         arr3[i] = arr1[i] + arr2[i];
//     }
//     document.write(`${arr3}`)
//
// }
//
// sumArr(arr2, arr1)


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


// function arrKey(user) {
//     for (const userElement of user) {
//         for (const userKey in userElement) {
//             console.log(userKey);
//         }
//     }
// }




// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


function arrObject(arg) {
    for (const userElement of arg) {
        for (const Key in userElement) {
            console.log(userElement[Key]);
        }
    }
}
let inr = [{name: 'vasya', age: 13}, {model: 'Camry'}];
arrObject(inr)
