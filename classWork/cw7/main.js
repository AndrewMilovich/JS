// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model,Manufacturers,age,maxSpeed, engineVolume){
this.model=model;
this.Manufacturers=Manufacturers;
this.age=age;
this.maxSpeed=maxSpeed;
this.engineVolume=engineVolume;
this.drive=function (){
console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
   }
   this.info =function (){
       for (const argumentsKey in this) {
           if (typeof this[argumentsKey] !== 'function')
           console.log(`${argumentsKey}---${this[argumentsKey]}`)

       }
   }
  this.increaseMaxSpeed =function (newSpeed){
      this.maxSpeed = newSpeed + this.maxSpeed;
    }
    this.changeYear=function (newValue){
    this.age=newValue;
    }
    this.addDriver=function (driver){
    this.driver=driver;
    }
}
let car1=new Car('seat','Ibiza',2011,180, 1.2);
console.log(car1)
car1.drive()
car1.info()
car1.increaseMaxSpeed(20)
car1.changeYear(2000)
car1.addDriver(`andrew`)
console.log(car1)
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarClass {
    constructor(model, Manufacturers, age, maxSpeed, engineVolume) {
        this.model = model;
        this.Manufacturers = Manufacturers;
        this.age = age;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive (){
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info (){
        for (const argumentsKey in this) {
            console.log(`${argumentsKey}----${this[argumentsKey]}`);
        }
        }
    increaseMaxSpeed (newSpeed){
        this.maxSpeed=this.maxSpeed+newSpeed;
    }
    changeYear (newValue){
        this.age=newValue;
    }
    addDriver (driver){
        this.driver=driver;
    }
}




let carClass2=new CarClass('seat','Ibiza',2011,180, 1.2);
console.log(carClass2);
carClass2.drive();
carClass2.info();
carClass2.increaseMaxSpeed(100);
carClass2.changeYear(2000);
carClass2.addDriver (`driver`);

console.log(carClass2)
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Cinderella(name,age,sizeFoot){
    this.name=name;
    this.age=age;
    this.sizeFoot=sizeFoot;
}
let Cinderellas=[
    new Cinderella(`natalya`,23,42),
    new Cinderella(`yulia`,17,30),
    new Cinderella(`Sasha`,23,35),
    new Cinderella(`olena`,24,41),
    new Cinderella(`oksana`,13,44),
    new Cinderella(`lila`,18,45),
    new Cinderella(`vita`,42,41),
    new Cinderella(`gala`,50,40),
    new Cinderella(`rita`,12,37),
    new Cinderella(`vita`,23,36),
]
class Prince {
    constructor(name, age, findShose) {
        this.name = name;
        this.age = age;
        this.findShose = findShose;
    }
}
let princeA=new Prince('artur',21,41);
console.log(princeA)
let para=(Cinderellas,princeA)=>{
    for (const cinderella of Cinderellas) {
        if (cinderella.sizeFoot===princeA.findShose){
           console.log(`Prince you are Cinderella:${cinderella.name}`)
        }
    }

}
let find=Cinderellas.find((value)=>value.sizeFoot===princeA.findShose);
console.log(`Prince you are Cinderella:${find.name}`)

para(Cinderellas,princeA);