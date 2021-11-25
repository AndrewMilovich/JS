// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
let strEx= 'some.emailgmail.com'

    let validaE=(str)=>{
if (str.includes('@')){
   console.log('good')
}else{
    console.log('no good')
}

    }
validaE(strEx)
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
 let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let sortArray=(arr)=>{
        let sort = arr.sort((a, b)=>a.modules.length-b.modules.length)
    console.log(sort)
}
sortArray(coursesArray)
// - Напишіть функцію count(str, stringSearch), яка повертає кількість символів stringSearch у рядку str.

let count=(str,stringSearch)=>{
    let split = str.split('');
k=0;
    for (let i = 0; i <= split.length; i++) {
        if (split[i]===stringSearch){
            k++;
        }
    }
    console.log(k)
}
   let str = "Астрономия это наука о небесных объектах";
count(str,'о') // 5
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let cutString=(str, n)=>{
    let split = str.split(' ');
    console.log(split)
        let ts = split.slice(split[0],n).join(' ');
    console.log(ts)

}
    let cutStr = "Сила тяжести приложена к центру масс тела";
cutString(cutStr, 5) // 'Сила тяжести приложена к центру'