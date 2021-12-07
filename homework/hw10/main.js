// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let divElement = document.createElement("div");
// divElement.style.background='blue';
// divElement.style.width='300px';
// divElement.style.height='300px';
// divElement.id='text';
// document.body.append(divElement);
// divElement.onclick=function (){
//     divElement.style.opacity='0';
// }
// //     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let buttonElement = document.createElement("button");
// document.body.append(buttonElement);
// buttonElement.style.width='200px';
// buttonElement.style.height='100px';
// buttonElement.style.margin='20px';
// buttonElement.onclick=function (){
//     buttonElement.style.opacity='0';
// }
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

//
// let form = document.createElement("form");
// let inputElement = document.createElement("input");
// let buttonForm = document.createElement('button');
//
// buttonForm.style.width='100px';
// inputElement.style.width='100px';
// inputElement.placeholder='Введіть Вік';
// buttonForm.style.height='20px';
// buttonForm.textContent='ПЕРЕВІРИТИ';
// inputElement.style.height='20px';
// inputElement.type='number';
// form.append(inputElement,buttonForm)
// form.style.display='flex';
// form.style.flexDirection='column';
// form.style.alignItems='center';
// buttonForm.onclick=function (){
//   console.log(inputElement.value)
//     form.onsubmit = function (e) {
//         e.preventDefault();
//     };
//     if (!inputElement.value) {
//                 alert('Введи вік');
//             } else if (+inputElement.value < 18) {
//                 alert('Спочатку підрости');
//             } else {
//                 alert('Заходь пустун');
//             }
// }
// document.body.append(form)


// - Создайте меню, которое раскрывается/сворачивается при клике
// let divMenu = document.createElement('div');
// let buttonMenu = document.createElement('Menu');
// buttonMenu.innerText='Menu';
// buttonMenu.style.height='30px'
// buttonMenu.style.width='70px'
// buttonMenu.style.background='red'
// buttonMenu.style.margin='10px'
// buttonMenu.style.borderRadius='10px'
// buttonMenu.style.cursor='pointer'
// divMenu.classList.add('menu');
// let ul = document.createElement('ul');
// let arr=['Product','Act','User','About']
// for (const string of arr) {
//     let liElements = document.createElement('li');
//     liElements.innerText=string;
//     liElements.style.background='blue';
//     liElements.style.height='20px';
//     liElements.style.width='70px';
//     liElements.style.margin='3px';
//     liElements.style.borderRadius='10%';
//     liElements.style.textAlign='center'
//     ul.append(liElements);
// }
// buttonMenu.addEventListener('click',function (){
//
//         ul.classList.toggle('hide');
//
// })
// divMenu.append(buttonMenu)
// divMenu.append(ul)
// document.body.append(divMenu)
//
//



// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let arrComment=[{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title :'andrew', body:'lorem ipsum dolo sit ameti gusto'},
    {title :'Sasha', body:'lorem ipsum dolo sit ameti'},
    {title : 'Vasya', body:'lorem ipsum dolo sit ameti'},
    {title : 'Olya', body:'lorem ipsum dolo sit ameti'},]
let mainDiv = document.createElement(`div`);
document.body.append(mainDiv)
for (const Element of arrComment) {

    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    btn.innerText='Сховати'
    btn.style.width='70px'
    btn.style.height='30px'
    h2.innerText=Element.title;
    p.innerText=Element.body
    btn.addEventListener('click',function (){
        p.classList.toggle('hide')
    })
 mainDiv.append(h2,p,btn)
}