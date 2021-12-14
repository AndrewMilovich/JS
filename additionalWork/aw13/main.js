// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let main = document.createElement("div");
main.classList.add('main');
let form = document.createElement("form");
let header = document.createElement("input");
header.type = 'text';
header.classList.add('name');
header.placeholder = 'Name product'
let img = document.createElement("input");
img.placeholder = 'Image product';
img.src = img.value;
let price = document.createElement("input");
price.type = 'number';
price.placeholder = 'Price product'
let count = document.createElement("input");
count.type = 'number';
count.placeholder = 'Count product'
let button = document.createElement("button");
button.innerText = 'Save to local storage'

main.append(form, button);
form.append(header, img, price, count);
document.body.append(main);

button.onclick = function (e) {
    e.preventDefault();
    let product = JSON.parse(localStorage.getItem('product')) || [];

    product.push({id:product[product.length-1]?.id+1||1,name:header.value,count:count.value,price:price.value,img:img.value});
    localStorage.setItem('product', JSON.stringify(product));
}
let buttonList = document.createElement("button");
let anchorElement = document.createElement("a");
anchorElement.innerText='go to List'
anchorElement.href="./List.html";
buttonList.append(anchorElement);
document.body.append(buttonList);

