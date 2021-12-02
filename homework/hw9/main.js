// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let htmlDivElement = document.createElement('div');
htmlDivElement.classList.add('wrap', 'collapse', 'alpha', 'beta');
htmlDivElement.style.backgroundColor='red';
htmlDivElement.style.Color='blue';
htmlDivElement.style.fontSize='20px';
htmlDivElement.innerText='Andryxa krasavchik'
document.body.appendChild(htmlDivElement);
let cloneNode = htmlDivElement.cloneNode(true);
document.body.appendChild(cloneNode)
// - Є масив:

// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let menu = document.getElementsByClassName('menu');
let arr= ['Main','Products','About us','Contacts'];
for (const string of arr) {
    menu[0].appendChild(document.createElement("li")).innerText=string;
}
// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course of coursesAndDurationArray) {
    let divElement = document.createElement("div");
    divElement.innerText=`${course.title}---${course.monthDuration}`
    document.body.appendChild(divElement)
}


// - Є масив
let coursesAndDuration = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
for (const course of coursesAndDurationArray) {
    let divElement = document.createElement("div");
    divElement.classList.add('item')
    let headingElement = document.createElement("h1");
    headingElement.innerText=course.title;
    let paragraphElement = document.createElement(`p`);
    paragraphElement.innerText=course.monthDuration;

    document.body.appendChild(divElement);
    divElement.appendChild(headingElement);
    divElement.appendChild(paragraphElement)
}
