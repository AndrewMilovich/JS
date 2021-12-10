// 5 lines (4 sloc)  381 Bytes
//
// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// let form = document.createElement(`form`);
// form.innerText='Send to local storage';
// let btn = document.createElement("button");
// btn.innerText='Send';
// let name = document.createElement(`input`);
// name.placeholder='Name';
// let age = document.createElement(`input`);
// age.placeholder='Age';
// age.type='number';
// form.append(name,age,btn);
// document.body.append(form)
// btn.onclick=function (e) {
//     e.preventDefault()
//     localStorage.setItem(`user`, JSON.stringify({name: name.value,age:age.value}));
//         }

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let form = document.createElement("form");
form.innerText = 'You car';
let model = document.createElement("input");
let type = document.createElement("input");
let volume = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = 'Send';
btn.style.margin = '10px';
volume.type = 'number';
model.placeholder = 'model'
type.placeholder = 'type'
volume.placeholder = 'volume'
type.style.margin = '10px'
model.style.margin = '10px'
form.append(model, type, volume, btn);
document.body.append(form)
let arrResult = [];
btn.onclick = function (e) {
    e.preventDefault();
    let arr = [{model: model.value, type: type.value, volume: volume.value}];
    for (const arrElement of arr) {
        arrResult.push(arrElement)
        localStorage.setItem('Cars', JSON.stringify(arrResult));
    }
    let item = localStorage.getItem('Cars');
    console.log(item)
    let parse = JSON.parse(item);
// console.log(parse)
    parse.push({item});
    localStorage.setItem('Cars', JSON.stringify(parse));
}
