import './style.css'

//! <====================ОСНОВЫ jAVASCRIPT====================>

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

let a1 = 5
console.log(typeof a1) //number

let b2 = 'abc'
console.log(typeof b2) //string

let c
console.log(typeof c) //underfined (переменная была объявлена, но ей не было присвоено значение)

let u = null // когда нужно явно указать, что переменная не имеет значения или «пустое» состояние.
console.log(u);

let d = 'abc' * 5 
console.log(d) // NaN (Not-a-Number) - невозможность преобразовать к числу

console.log(y>y2);// «Boolean» (сравнение) имеет два значения «true» и «false»

// let h = [a, b, c]
// console.log(typeof h);// object (коллекция переменных)


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

 



let dates = new Date
console.log(dates);

console.log('Осталось ' + (23 - dates.getHours()) + ' часа и ' + (60 - dates.getMinutes()) + ' минут' );


// 1.Условное ветвление: if
// let age = 28
// let age = +prompt('Сколько вам лет?')

// if (age < 18) {
//     console.log('Пользователь  несовершеннолетний');
// } else {
//     console.log('Введите цифры');
// }


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

// let a1 = 1
// let b1 = 5
// let result = (a1 + b1 < 4) 

// result ? console.log('Мало') : console.log('Много');



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
console.clear()



// round() — округление до ближайшего целого числа;
// floor() — округление вниз;
// ceil() — округление вверх;
// trunc() — отбрасывание дробной части

console.log(Math.round(5.6)); //округление до ближайшего целого числа;
console.log(Math.floor(5.6)); //округление вниз;
console.log(Math.ceil(5.6));  //округление вверх;
console.log(Math.trunc(5.6)); //отбрасывание дробной части


//!<================= JS_PZ_Modul_1_Week_1 =====================>



//!<================= JS_DZ_Modul_1_Week_2 =====================>

//! 1. Запросить у пользователя его возраст и определить, кем он
//! является: ребенком (0–2), подростком (12–18), взрослым
//! (18_60) или пенсионером (60– ...).

// let age = 30
// if (age>=0 && age<=2) {
//     'вы ребенок';
// } else if (age>2 && age<18) {
//     console.log('вы подросток');  
// } else if (age>=18 && age<=60) {
//     console.log('вы взрослый');  
// } else if (age>60) {
//     console.log('вы пенсионер');  
// } else {
//     console.log('введите правильное значение');  
// }


// let age = 28

// if (age<18) {
//     console.log('Вы ребенок');
// } else {
//     console.log('Вы взрослый');
// }

// скорость машины

// let speed = 99

// if (speed>50) {
//     console.log('Скорость машина быстрая');
// } else {
//     console.log('Скорость машина медленная');
// }



//! 2. Запросить у пользователя число от 0 до 9 и вывести ему
//! спецсимвол, который расположен на этой клавише (1–!,
//! 2–@, 3–# и т. д).


let enterNumber = 3

switch (enterNumber) {
    case 1:
        console.log('!');
        break;
    case 2:
        console.log('@')
        break
    case 3:
        console.log('#')
        break

    default:
        console.log('Введите число');
        break;
}


// 4. Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год кратен 4.

let age = 2024

if (age%4==0) {
    console.log('Год високосный');
} else {
    console.log('Год НЕ високосный');
}





let numb = 10
if (numb%2==0) {
    console.log('число кратно двум');
} else {
    console.log('число не кратно двум');
}

