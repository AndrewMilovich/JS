let item = localStorage.getItem('user');
let parse = JSON.parse(item);
for (const parseElement of parse) {
    console.log(parseElement)
    document.write('<div></div>')
    document.write(`name:${parseElement.name}  age:${parseElement.age}  status:${parseElement.status}`)
}
