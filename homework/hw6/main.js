// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let upperStr1 = 'HELLO WORLD';
let upperStr2 = 'LOREM IPSUM';
let upperStr3 = 'JAVASCRIPT IS COOL';
console.log(upperStr1.toLowerCase());
console.log(upperStr2.toLowerCase());
console.log(upperStr3.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let string1 = ' dirty string   ';
let trim = string1.trim();
console.log(trim)
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let stringToArray = (str) => {
    return str.split(' ');
}
let str = 'Каждый охотник желает знать';
let arr = stringToArray(str);
console.log(arr);
document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
document.write(`<div></div>`);
let delete_characters = (str, length) => {
    return str.slice(str, length);
}

document.writeln(delete_characters(str, 7));
document.write(`<div></div>`);
let strC = "HTML JavaScript PHP"
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insertDash = (str) => {
    return str.replaceAll(' ', '-').toUpperCase();
}
document.writeln(insertDash(strC));
document.write(`<div></div>`);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let strW='hello first'
let strUpperFirst = (str) => {
    let s = str.charAt(0).toUpperCase()+str.substr(1);
    console.log(s)
    return s;


}
strUpperFirst(strW);
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let  capitalize=(str)=>{

     let s = str.split().map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
     console.log(s);
     return s;
}
capitalize(str)
