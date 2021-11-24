// - Дано натуральное число n. Выведите все числа от 1 до n.
let naturalFun = (n) => {
    for (let i = 1; i <= n; i++) {
        document.write(`${i}`)
    }
}
naturalFun(5)
document.write(`<div></div>`)
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let sort = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            document.write(`${i}`)
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            document.write(`${i}`)
        }
    }
}
sort(5, 3)
document.write(`<div></div>`)
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let mix = (array, i) => {
    for (let j = 0; j < array.length; j++) {
        if (i === j) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
    document.write(`${array}`)
}
let foo = [9, 8, 0, 4]
mix(foo, 1)
document.write(`<div></div>`)
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let transit = (arr) => {
    for (let i = 0, k = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[k];
            arr[k] = temp;
            k++;
        }
    }
    document.write(`${arr}`)
}
let arrEx = [0, 0, 1, 0,5,8,7,0,0]
transit(arrEx)
//

let stringC= (string) => {

    for (let i = 0; i < 10; i++) {

    }

}
stringC()
