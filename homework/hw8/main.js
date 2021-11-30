// 13 lines (10 sloc)  1.03 KB
//
// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let elementById = document.getElementById("content");
console.log(elementById.innerText)
// -- отримує текст з блоку з id "rules"
let elementById2 = document.getElementById("rules");
console.log(elementById2.innerText)

// -- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById("content").innerText='hello world';
// -- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById("rules").innerText='hello okten';
// -- змініть кожному елементу колір фону на червоний
elementById.style.backgroundColor='red';
elementById2.style.backgroundColor='red';

// -- змініть кожному елементу колір тексту на синій
elementById.style.color='blue';
elementById2.style.color='blue';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classList=elementById2.classList;
for (const classListElement of classList) {
    console.log(classListElement)
}
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let classFc = document.getElementsByClassName('fc_rules');
console.log(classFc)
for (const classFcElement of classFc) {
    classFcElement.style.color='red'
}
