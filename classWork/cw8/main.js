// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює клас  тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let elementById = document.getElementById('main_header');
elementById.classList.add('mon-year')
// b) робить шириниу елементу ul 400px
for (const elementsByTagNameElement of document.getElementsByTagName('ul')) {
    elementsByTagNameElement.style.width='400px'
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%
for (const elementsByClassNameElement of document.getElementsByClassName('linkList')) {
    elementsByClassNameElement.style.width='50%';
}
// d) отримує текст який зберігається в елементі з класом listElement2
for (const elementsByClassNameElement of document.getElementsByClassName('listElement2')) {
    console.log(elementsByClassNameElement.innerText)
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
for (const elementsByTagNameElement of document.getElementsByTagName('li')) {
    elementsByTagNameElement.style.backgroundColor='grey'
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let elementsByNameAnchor = document.getElementsByTagName( 'a');
for (const elementsByNameAnchorElement of elementsByNameAnchor) {
    elementsByNameAnchorElement.classList.add('anchor')
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let getLink3 = document.getElementsByTagName('a');
for (const link3Element of getLink3) {
    if (link3Element.innerText==='link3'){
        link3Element.style.fontSize='40px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const link3Element of getLink3) {
link3Element.classList.add(`element_${link3Element.innerText}`)
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let colorOfPhone=prompt('колір');
let subHeader = document.getElementsByClassName('sub-header');
// for (const subHeaderElement of subHeader) {
//     subHeaderElement.style.backgroundColor=colorOfPhone;
//
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (const subHeaderElement of subHeader) {
    if (subHeaderElement.innerText==='content 2 segment'){
        subHeaderElement.style.backgroundColor=colorOfPhone;
    }

}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let stringText=prompt('замінити текст на');
for (const elementsByClassNameElement of document.getElementsByClassName('content_1')) {
    elementsByClassNameElement.innerText=stringText;
}
// l) отримати елементи p та змінити їм padding на 20px
for (const elementsByTagNameElement of document.getElementsByTagName('p')) {
    elementsByTagNameElement.style.padding='20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
for (const elementsByClassNameElement of document.getElementsByClassName('text2')) {
    elementsByClassNameElement.innerText='sep-2021'
}
