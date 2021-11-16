// 1--створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arrNumber=[2,34,-23,87,99];
// console.log(arrNumber);
// let arrString=['Vasya','Volodumyr','Victor','Marsel','yulia']
// console.log(arrString);
// let arrMix=['Vasya',23,true,'Marsel',false]
// console.log(arrMix);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arrEmpty=[];
// arrEmpty[0]=prompt('Введи значення першого масиву з індексом 0:');
// arrEmpty[1]=prompt('Введи значення другого масиву з індексом 1:');
// arrEmpty[2]=prompt('Введи значення третього масиву з індексом 2:');
// arrEmpty[3]=prompt('Введи значення четвертого масиву з індексом 3:');
// document.write(arrEmpty);


//3 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i=0; i<10;i++){
//     document.write('<div>My name is Hector</div>')
// }
// for (let i=0; i<10;i++){
//     document.write(`<div> ${i} - index text</div>`);
// }
//
// let g=0;
// while (g<20){
//    document.write('<h1> довільний текст для тексту while</h1>')
//     g++;
// }
// let k=0;
// while (k<20){
//     document.write(`<h1>${k} - індекс довільного тексту циклу while</h1>`)
//     k++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrNumber=[10,23,-343,2344,456,21,4,6,7,3]
// for (let i=0; i<arrNumber.length;i++){
//     console.log(arrNumber[i])
// }
// let arrString=['string1','Valya','cat','Stepan','folder','file','grid','Mars','Earth','Neptun']
// for (let i=0; i<arrString.length;i++){
//     console.log(arrString[i])
// }
// let arrMix=[23,'Valya','cat',true,'folder',-34,'grid',0,'Earth',false]
// for (let i=0; i<arrMix.length;i++){
//     console.log(arrMix[i])
// }
// let arrayMix=[23,'Valya','cat',true,'folder',-34,'grid',0,'Earth',false]
// for (let arr of arrayMix){
// if (typeof arr==="boolean"){
//     console.log(arr)}
// }
// for (let arr of arrayMix){
//     if (typeof arr=== "number"){
//         console.log(arr)}
// }
// for (let arr of arrayMix){
//     if (typeof arr=== "string"){
//         console.log(arr)}
// }


//   - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

let arrEmpty = [];
arrEmpty[0] = 123;
arrEmpty[1] = 'Andrii';
arrEmpty[2] = 'Vitya';
arrEmpty[3] = false;
arrEmpty[4] = 342;
arrEmpty[5] = -32;
arrEmpty[6] = 'Yulia';
arrEmpty[7] = true;
arrEmpty[8] = 0.3;
arrEmpty[9] = 23;
for (let i = 0; i < arrEmpty.length; i++) {
    console.log(arrEmpty[i])
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log('Поточний крок циклу:' + i)
    document.write('<div></div>')
    document.write('Поточний крок циклу:' + i)
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log('Поточний крок циклу:' + i)
    document.write('<div></div>')
    document.write('Поточний крок циклу:' + i)
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log('Поточний крок циклу:' + i)
    document.write('<div></div>')
    document.write('Поточний крок циклу:' + i)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log('Поточний крок циклу:' + i)
        document.write('<div></div>')
        document.write('Поточний крок циклу:' + i)
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write)
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log('Поточний крок циклу:' + i)
        document.write('<div></div>')
        document.write('Поточний крок циклу:' + i)
    }
}