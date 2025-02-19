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







// Задание 2. Запросите у пользователя год его рождения, посчитайте,
// сколько ему лет и выведите результат. Текущий год укажите
// в коде как константу

// Решение:
// let side = +prompt('Введите сторону квадрата')
// console.log(side*4)





 













