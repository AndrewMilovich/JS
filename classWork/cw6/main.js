// // - Дано список імен.
let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter';
// let n2 = 'Ron Whisley';
// let n3 = 'Hermione Granger';
let normaliseName = (name, symbol) => {
    if (name.includes(symbol)) {
        let split = name.split(symbol);
        console.log(split);
        let arrName = split[0] + ' ' + split[split.length - 1];
        console.log(arrName);
    }
}
normaliseName(n1, '..')


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let random = (numbers) => {
    let arr = [];
    for (let i = 0; i <= numbers; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
}

let resultRandom = random(10);
console.log(resultRandom)
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let sort = resultRandom.sort((a, b) => a - b);
console.log(sort)
let aSort = resultRandom.sort((a, b) => b - a);
console.log(aSort)
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let filter = resultRandom.filter(num => num % 2 === 0);
console.log(filter)
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let strings = resultRandom.map(word => word + '');
console.log(strings)
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let sortNums = (arr, direction) => {
    if (direction === '+') {
        arr.sort((a, b) => a - b)
    } else if (direction === '-') {
        arr.sort((a, b) => b - a)
    }
    console.log(arr)
}
let nums = [11, 21, 3];
sortNums(nums, '+'); // [3,11,21]
sortNums(nums, '-') ;// [21,11,3]
//
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let monthDuration = (arr) => {
    let sort1 = arr.sort((a, b) => a.monthDuration - b.monthDuration);
    console.log(sort1)
    return sort1;

}
monthDuration(coursesAndDurationArray)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let CourseMoreFive = (arr) => {
    let filter1 = arr.filter((course) => course.monthDuration > 5);
    console.log(filter1);
    return filter1;
}
CourseMoreFive(coursesAndDurationArray)
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
let cutString = (str, n) => {
    let k=0;
     let arr=[];
    for (let i = 0; i < str.length; i++) {
        let slice = str.substr(k ,n);
        k+=n;
        arr.push(slice);
        }
    arr = arr.filter((item)=> item !== '');
      console.log(arr)
}
cutString('авада кедавра', 3) // [нас,лаж,ден,ие]