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
`
    let buttonDelete = document.createElement("button");
    buttonDelete.innerText = 'Delete'
    buttonDelete.onclick = function (e) {
        const index = parse.findIndex(value => value.id === parseElement.id);
        parse.splice(index, 1);
        localStorage.setItem('product', JSON.stringify(parse));
listDiv.classList.add('hide');
    }
    listDiv.append(buttonDelete)
    main.append(listDiv)
}

document.body.append(main);

let allDelete = document.createElement("button");
allDelete.innerText = 'Delete all';
allDelete.classList.add('btnDelete');
allDelete.onclick = function () {
    localStorage.removeItem('product')
    main.style.display = 'none'
}
document.body.append(allDelete)