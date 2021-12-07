
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let mainDiv = document.createElement("div");
//
//
// let btnForm1 = document.createElement('button');
// btnForm1.style.width='100px'
// btnForm1.style.height='40px'
// btnForm1.innerText='Вивести в консоль'
//
//
// let form1 = document.createElement('form');
// form1.style.borderRadius='20px';
// form1.style.height='30px'
//
// let inputForm1_1 = document.createElement("input");
// let inputForm1_2 = document.createElement("input");
//
// let inputForm2_1 = document.createElement("input");
// let inputForm2_2 = document.createElement("input");
//
//
// let form2 = document.createElement('form');
// form2.style.height='30px'
// form2.append(inputForm2_1,inputForm2_2);
// form1.append(inputForm1_1,inputForm1_2)
// mainDiv.append(form1,form2,btnForm1)
// document.body.append(mainDiv)
// btnForm1.addEventListener('click',function (){
//     console.log(inputForm1_1.value+' '+inputForm1_2.value)
//     console.log(inputForm2_1.value+' '+inputForm2_2.value)
// })
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let divContainer = document.createElement('div');
divContainer.style.display='flex'
divContainer.style.flexDirection='column'
let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');
let btn = document.createElement('button');
input1.style.width='100px'
input2.style.width='100px'
input3.style.width='100px'
input1.style.margin='20px'
input2.style.margin='20px'
input3.style.margin='20px'
btn.style.height='40px'
btn.style.width='80px'
divContainer.append(input1,input2,input3,btn)
document.body.append(divContainer)




// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.


//     Перевірку робити при натисканні на кнопку
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
