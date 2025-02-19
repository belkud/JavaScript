import './style.css'

// <====================ОСНОВЫ jAVASCRIPT====================>

//! 1. var - устаревшие названия переменных (лучше их не писать)
var x = 10
console.log(x)

var x = 12
console.log(x)


//! 2. const - константа, значение не меняется
const z = 25
// z=5 - вызовет ошибку 
console.log(z);

//! 3. let - используем их(т.к. let не повторяются), но мы можем менять их значения
let y = 6
console.log(y);
y= 4 //меняем значение let
console.log(y);

let y2 = 3

//! Арифметические операции
console.log(y+y2)
console.log(y-y2)
console.log(y*y2)
console.log(y/y2)
console.log(y**2) // возведение числа в степень
console.log(y%y2) // остаток от деления 


//! Названия переменных
let whiteColorWithBlackColor  //лучше этот вариант
let white_color_with_black_color


//! Типы данных
// оператор typeof показывает тип данных

let a = 5
console.log(typeof a) //number

let b = 'abc'
console.log(typeof b) //string

let c
console.log(typeof c) //underfined (переменная была объявлена, но ей не было присвоено значение)

let u = null // когда нужно явно указать, что переменная не имеет значения или «пустое» состояние.
console.log(u);

let d = 'abc' * 5 
console.log(d) // NaN (Not-a-Number) - невозможность преобразовать к числу

console.log(y>y2);// «Boolean» (сравнение) имеет два значения «true» и «false»

let h = [a, b, c]
console.log(typeof h);// object (коллекция переменных)


//! Операторы сравнения
//'>' '<' '>=' '<=' '==' '!=' сравнение переменных (Boolean)
 
console.log(5!=3) //(пять не ровно три) true
console.log(5>3) //(пять больше чем три) true
console.log(5<3) //(пять меньше чем три) false
console.log("2" > "12"); // (строки сравниваются по первому символу, 2>1, ответ "true") 

let letter1 ='a'
let letter2 ='b'
console.log(letter1<=letter2); // строки тоже имеют свою 'величину'


//! Значения false (неверные значения)
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(false));

// Значение true имеют все остальные значения, а их бесконечное множество 
// (буквы, цифры, символы и так далее) 

//! Диалоговые окна
// let s = confirm('Хотите закрыть окно')
// let s2 = alert('Хотите закрыть окно')
// let s3 = prompt('Хотите закрыть окно')







// Задание 2. Запросите у пользователя год его рождения, посчитайте,
// сколько ему лет и выведите результат. Текущий год укажите
// в коде как константу

// Решение:
// let side = +prompt('Введите сторону квадрата')
// console.log(side*4)



// 7. Запросите у пользователя текущее время (часы и минуты)
// и выведите, сколько часов и минут осталось до следующего
// дня.

// let minutes = Number(prompt('Введите минуты'))
// let hours = Number(prompt('Введите часы'))
// console.log('До полуночи остало: ' + (23-hours) + ' часа и ' + (60-minutes) + ' Минут' );

let dates = new Date
console.log(dates);

console.log('Осталось ' + (23 - dates.getHours()) + ' часа и ' + (60 - dates.getMinutes()) + ' минут' );


// 1.Условное ветвление: if
let age = 28
// let age = +prompt('Сколько вам лет?')

if (age < 18) {
    console.log('Пользователь  несовершеннолетний');
} else {
    console.log('Введите цифры');
}


// 2. Тернарный оператор



// 5<3 ? console.log('значение верно') : console.log('Значение не верно')

let x1 = 10
let x2 = 51

x1<x2 ? console.log('значение верно') : console.log('Значение не верно')


if (x1>x2) {
    console.log('значение не верно 222')
} 
if (x1<x2){
    console.log('Значение верно 222')
}

// let age2:any = prompt('Возраст?');

// let message = (age2 < 0) ? 'У вас отрицательный возраст' :
//   (age2 < 3) ? 'Здравствуй, малыш!' :
//   (age2 < 18) ? 'Привет!' :
//   (age2 < 100) ? 'Здравствуйте!' :
//   'Какой необычный возраст!';

// alert( message );











let day = 3
if (day==1) {
    console.log('Понедельник');
} else if (day==2) {
    console.log('Вторник');
} else if (day==3) {
    console.log('Среда');
} else if (day==4) {
    console.log('Четверг');
} else if (day==5) {
    console.log('Пятница');
} else if (day==6) {
    console.log('Суббота');
} else if (day==7){
    console.log('Воскресенье')
} else {
    console.log('Такого дня недели не существует')
}





// switch (day) {
//     case 1:
//         console.log('Понедельник');
//         break;
//     case 2:
//         console.log('Вторник');
//         break;
//     case 3:
//         console.log('Среда');
//         break;
//     case 4:
//         console.log('Четверг');
//         break;
//     case 5:
//         console.log('Пятница');
//         break;
//     case 6:
//         console.log('Суббота');
//         break;
//     case 7:
//         console.log('Воскресенье');
//         break;
//     default:
//         console.log('Такого дня недели не существует')
//         break;
// }


// let nameJS = prompt('Какое «официальное» название JavaScript?') 

// if (nameJS=='ECMAScript') {
// console.log("Ответ правильный");
// alert("Ответ правильный");
// } else {
//     console.log("Ответ НЕ правильный");
// }


// Используя конструкцию if..else, напишите код, который получает число через prompt, 
// а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.
let num = 12
if(num>0) {
    console.log('1')
} else if (num<0) {
    console.log('-1')
} else {
    console.log('0')
}

let a1 = 1
let b1 = 5
let result = (a1 + b1 < 4) 

result ? console.log('Мало') : console.log('Много');



let f = 2000
if (f%400==0) {
    console.log('год високосный');
} else if (f%100==0) {
    console.log('год не вискосный');
} else if (f%4==0) {
    console.log('год високосный');
} else {
    console.log('год не вискосный');
}
console.log(1900/4);


let rub = 1000
if (rub>=200 && rub<300) {
    console.log(rub - rub*0.03);
} else if (rub>=300 && rub<500) {
    console.log(rub - rub*0.05);
} else if (rub>=500) {
    console.log(rub - rub*0.07);
} else {
    console.log('Данные не корректны');
}


let nums = -5
if (nums>0) {
    console.log(nums);
} else {
    console.log(-nums);
}