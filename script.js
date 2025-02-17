 





//! 1. var - устаревшие названия переменных (лучше их не писать)
var x = 10
console.log(x)

var x = 12
console.log(x)

//! 2. let - используем их(т.к. let не повторяются), но мы можем менять их значения
let y = 6
console.log(y);
y= 4 //меняем значение let
console.log(y);


//! 3. const - константа, значение не меняется
const z = 25
// z=5 - вызовет ошибку 
console.log(z);


let y2 = 3

//! арифметические операции
console.log(y+y2)
console.log(y-y2)
console.log(y*y2)
console.log(y/y2)
console.log(y**2) // возведение числа в степень
console.log(y%y2) // остаток от деления 


//! названия переменных
let whiteColorWithBlackColor //лучше этот вариант
let white_color_with_black_color

//! типы данных
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

console.log(typeof alert);


console.log(y==y2); //'>' '<' '>=' '<=' '==' сравнение переменных (boolean)
 
// let surname = prompt('Введите ваше имя')
// console.log(surname)

// let age = alert ('Ваш возраст')



// let number1 = +prompt('Введите первое число')
// let number2 = +prompt('Введите второе число')

// alert( 'сумма чисел = ' + (number1 + number2))


// console.log(number1 + number2)

let j = 5554356547568
console.log('переменная j = ' + j)



// Модуль 1.

// Задание 1. Запросите у пользователя его имя и выведите в ответ:
// «Привет, его имя!».





// Задание 2. Запросите у пользователя год его рождения, посчитайте,
// сколько ему лет и выведите результат. Текущий год укажите
// в коде как константу


// let side = +prompt('Введите сторону квадрата')
// console.log(side*4)


// промпт

console.log('вам '+ (2025 - 'год рождения пользователя'))




let letter1 ='a'
let letter2 ='b'
console.log(letter1<letter2);



console.log('========================');
let num1 = 5
let num2 = '5'
console.log(num1==num2);
console.log(num1===num2);

console.log('яdf'<'Аdgdfg');

console.log("2" > "12876878");
console.log("2" > 12);

let num3= 1
console.log(Boolean(num3));

let num4= 0
console.log(Boolean(num4));
console.log(false + true);


//! Значения false (неверные значения)
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(false));

console.log(null==undefined);
console.log(null===undefined);

let r = null
let r2
console.log(r);
console.log(r2);

let num5 = 5
let num6 = '5'
console.log(num5!=num6);

console.log(num5!==num6);
console.log(num5===num6);

// != ==


