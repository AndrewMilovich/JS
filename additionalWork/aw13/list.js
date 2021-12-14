let item = localStorage.getItem('product');
let parse = JSON.parse(item);
let main = document.createElement("div");
main.classList.add('main')
for (const parseElement of parse) {
    let listDiv = document.createElement("div");
    listDiv.classList.add('product');
    listDiv.innerHTML = `
        <h2>Назва товару: ${parseElement.name}</h2>
        <img class="imageProduct" src=${parseElement.img} alt="">
        <h3>к-сть: ${parseElement.count}</h3>
        <h3>ціна: ${parseElement.price}</h3>
<button class="buttonDelete">Видалити</button>
`
    main.append(listDiv)
    let buttonDelete = document.getElementsByClassName('buttonDelete');
    for (const buttonDeleteElement of buttonDelete) {
        buttonDeleteElement.onclick = function (e) {
          
        }
    }
}
document.body.append(main);

let allDelete = document.createElement("button");
allDelete.innerText = 'Delete all';
allDelete.classList.add('btnDelete');
allDelete.onclick = function () {
    localStorage.removeItem('product')
main.style.display='none'
}
document.body.append(allDelete)