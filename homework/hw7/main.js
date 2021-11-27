// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let arrUser = [
    new User(2, 'Andrew', 'Miovich', 'werdwed@ukr.net', '3243423423'),
    new User(1, 'Vasya', 'puokin', 'sdfs@ukr.net', '46756576'),
    new User(23, 'Vadum', 'asdsdf', 'sdfds@ukr.net', '456456'),
    new User(12, 'Grut', 'sdfsd', 'sdfsdf@ukr.net', '34534'),
    new User(5, 'Tor', 'dfhfgh', 'sdfa@ukr.net', '7656756'),
    new User(6, 'Spiderman', 'ldkfsd', 'sdfasdf@ukr.net', '3453453'),
    new User(7, 'Cap', 'sdfsdf', 'sdfdsf@ukr.net', '678678'),
    new User(8, 'Natasha', 'sfdv', 'sdfsdf@ukr.net', '23423234'),
    new User(55, 'Roman', 'sdfdvc', 'sdfsdf@ukr.net', '7978978'),
    new User(44, 'Yenot', 'fdsdf', 'sdfdsfs@ukr.net', '123123')
];
console.log(arrUser)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = arrUser.filter(value => value.id % 2 === 0);
console.log(filter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = arrUser.sort((a, b)=>a.id-b.id);
console.log(sort)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let arrClassUsers=[
    new Client(1, 'Yenot', 'fdsdf', 'sdfdsfs@ukr.net', '123123',['pear','apple','orange']),
    new Client(32, 'tor', 'asdfasd', 'sdfdsfs@ukr.net', '123123',['pear','apple','orange']),
    new Client(4, 'vasul', 'sdfsd', 'sdfdsfs@ukr.net', '123123',['pear','apple','orange','asdasda']),
    new Client(7, 'victor', 'pupkin', 'sdfdsfs@ukr.net', '123123',['pear','apple']),
    new Client(11, 'spiderman', 'wrin', 'sdfdsfs@ukr.net', '123123',['pear','apple','orange','adsdsad']),
    new Client(54, 'еTor', 'fdsdf', 'sdfdsfs@ukr.net', '123123',['pear','apple','orange','asdasdas','asdasdasd']),
    new Client(87, 'yulia', 'asdasds', 'sdfdsfs@ukr.net', '123123',['apple','orange']),
    new Client(9, 'vita', 'fdsdf', 'sdfdsfs@ukr.net', '123123',['pear','apple','orange','orange','orange']),
    new Client(4, 'volodumur', 'fdsdf', 'sdfdsfs@ukr.net', '123123',['pear','apple','orange','orange']),
    new Client(54, 'sdfsdfs', 'fdsdf', 'sdfdsfs@ukr.net', '123123',['pear','apple','orange']),

];
console.log(arrClassUsers)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clientsSort = arrClassUsers.sort((a, b)=>a.order.length-b.order.length);
console.log(clientsSort)