// TODO HW
// Зробити свій розпорядок дня.
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

function wakeUp(isWorkingDay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWorkingDay) {
                console.log(`i am wake up`)
                resolve(breakfast());
            }
            reject('sleep')
        }, 1000)
    })
}

function breakfast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('i am have a breakfast');
            resolve(shower())
            reject('i am not hungry')
        }, 1500)
    })
}


function shower() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('i am go to the shower');
            resolve(sport())
            reject('i am clean')
        }, 2000)
    })
}


function sport() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('i am sport');
            resolve(waitBus())
            reject('i am clean')
        }, 1000)
    })
}

function waitBus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('i am wait bus');
            resolve(dinner());
            reject('i am not gone')
        }, 2500)
    })
}

function dinner() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('i am have a dinner');
            resolve(meatFriend());
            reject('i am not hungry')
        }, 1500)
    })
}

function meatFriend() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('i am meat friend');
            resolve(working());
            reject('i am not have a friends')
        }, 1500)
    })
}

function working() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('i am working');
            resolve(walking());
            reject('i am not have a job')
        }, 2500)
    })
}

function walking() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('i am walking');
            resolve(goHome());
            reject('i am not have a friends for walking')
        }, 2500)
    })
}

function goHome() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('i am go home');
            resolve(evening());
            reject('i am not have a home')
        }, 2500)
    })
}

function evening() {
    return new Promise(() => {
        setTimeout(() => {
            console.log('i am have evening');
        }, 2500)
    })
}


// evening()
// goHome()
// sport()
// walking()
// meatFriend()
// dinner()
// wakeUp()
// breakfast()
// shower()
// waitBus()
// working()
wakeUp(true)

