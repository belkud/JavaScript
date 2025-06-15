import './style.css'

let data1 = new Date()


//! <====================ОСНОВЫ jAVASCRIPT====================>

//! 1. var - устаревшие названия переменных (лучше их не писать)
// var x = 10
// console.log(x)

// var x = 12
// console.log(x)


//! 2. const - константа, значение не меняется
const z = 25
// z=5 - вызовет ошибку 
console.log(z);

//! 3. let - используем их(т.к. let не повторяются), но мы можем менять их значения
// let y = 6
// console.log(y);
// y= 4 //меняем значение let
// console.log(y);

let y2 = 3

//! Арифметические операции
// console.log(y+y2)
// console.log(y-y2)
// console.log(y*y2)
// console.log(y/y2)
// console.log(y**2) // возведение числа в степень
// console.log(y%y2) // остаток от деления 


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

// console.log(y>y2);// «Boolean» (сравнение) имеет два значения «true» и «false»

// let h = [a, b, c]
// console.log(typeof h);// object (коллекция переменных)


//! Операторы сравнения
//'>' '<' '>=' '<=' '==' '!=' сравнение переменных (Boolean)

console.log(5 != 3) //(пять не ровно три) true
console.log(5 > 3) //(пять больше чем три) true
console.log(5 < 3) //(пять меньше чем три) false
console.log("2" > "12"); // (строки сравниваются по первому символу, 2>1, ответ "true") 

let letter1 = 'a'
let letter2 = 'b'
console.log(letter1 <= letter2); // строки тоже имеют свою 'величину'


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

console.log('Осталось ' + (23 - dates.getHours()) + ' часа и ' + (60 - dates.getMinutes()) + ' минут');


//! 1.Условное ветвление: if
// let age = 28
// let age = +prompt('Сколько вам лет?')

// if (age < 18) {
//     console.log('Пользователь  несовершеннолетний');
// } else {
//     console.log('Введите цифры');
// }


//! 2. Тернарный оператор



// 5<3 ? console.log('значение верно') : console.log('Значение не верно')



// let a1 = 1
// let b1 = 5
// let result = (a1 + b1 < 4) 

// result ? console.log('Мало') : console.log('Много');







// round() — округление до ближайшего целого числа;
// floor() — округление вниз;
// ceil() — округление вверх;
// trunc() — отбрасывание дробной части

console.log(Math.round(5.6)); //округление до ближайшего целого числа;
console.log(Math.floor(5.6)); //округление вниз;
console.log(Math.ceil(5.6));  //округление вверх;
console.log(Math.trunc(5.6)); //отбрасывание дробной части










for (let i = 0; i < 6; i++) {

    if (i == 3) {
        break    //! прерывание цикла
    }
    console.log(i);
}
console.log('================');





for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue    //! переход к следующей итерации
    }
    console.log(i);
}
console.log('================');








// 7. Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.
// let minutes = Number(prompt('Введите минуты'))
// let hours = Number(prompt('Введите часы'))

let hours = 23
let minutes = 5
console.log('До полуночи остало: ' + (23 - hours) + ' часа и ' + (60 - minutes) + ' Минут')


// 1. for 
// 2. while
// 3. do while









//! Задание для самостоятельной работы


//! 1. Напишите скрипт, который запрашивает у пользователя число N и 
//! выводит все четные числа от 2 до N
//! или N-1, если N нечетное. Например: ввод 10, вывод
//! 2 4 6 8 10; ввод 7, вывод 2 4 6.

// let x = 20
// for (let i =1; i<=x; i++) {
//     if (i%2==0) {
//         console.log(i);
//     }    
// }


//! 2. Напишите скрипт, который запрашивает у пользователя
//! число N и выводит все нечетные числа от N (или N-1,
//! если N четное) до 1 в порядке убывания. Например,
//! ввод 7, вывод 7 5 3 1; ввод 10, вывод 9 7 5 3 1.
//! 140

// let y = 30
// for (let i = y; i >=0; i--) {
//     if (i%2==1) {
//         console.log(i);
//     }   
// }



//! 3. Напишите скрипт, который запрашивает у пользователя число N и выводит
// ! все числа, на которые делится
//! N, включая число 1 (примеры: ввод N=10, вывод 1, 2,
//! 5; ввод 11, вывод 1).

// let r = 15
// for (let i = 1; i < r; i++) {
//     if (r%i==0) {
//         console.log(i)  // 1, 3, 5
//     }
// }



//! 4. Напишите скрипт, который принимает от пользователя
//! величину годовой депозитной ставки (в процентах)
//! и выводит количество лет, по прошествии которых
//! вклад увеличится вдвое.


let money = 1000  // количество денег
let doubleMoney = money * 2  // количество денег
let deposit = 0.2 // процентная ставка
let year = 0  // количество лет для удвоения

for (let i = 0; i < 10; i++) {
    money += money * deposit //  1000 + 1000*20% - цикл выполнился 1 раз
    //  1200 + 1200*20% - цикл выполнился 2 раз
    //  1440 + 1680*20% - цикл выполнился 3 раз        
    year++
    if (money >= doubleMoney) break
}

console.log(year > 4 ?
    `вклад увеличится вдвое через ${year} лет` :
    `вклад увеличится вдвое через ${year} года`
);


// ставка 20 %

// 1-ый год 1000 +20% = 1200 рублей
// 2-ой год 1200 +20% = 1440 рублей
// 3-ий год 1440 +20% = .....



console.log('=======');



//! 5. Напишите скрипт, который выводит ровно 10 случайных чисел из диапазона 
//! 1–20, кроме тех, которые делятся на 4.

// let acc = 0
// for (let i = 1; i <=20; i++) {
//     let num = Math.round(Math.random()*20)
//     if (num%4!=0) {
//         acc++
//         console.log(num);
//     }

//     if (acc==10) break

// }




//! 6. Из-за утечки из бака охлаждения ежедневно вытекает
//! 10% налитой воды. При объеме воды менее 10 литров
//! возникает аварийная ситуация. Составьте программу,
//! которая запрашивает у пользователя первоначальный
//! объем воды и рассчитывает, на сколько дней работы
//! этого хватит.





console.log(getSumm(3));


function getSumm(a: number, b = 10) { // можем задавать параметр по умолчанию
    return a + b
}
console.log(getSumm(13, 3));

// userName()

// let name = 'Petya' // глобальная переменная



// function userName() {
//     let name = 'Dima' // локальная переменная

//     if (name=='' || name == 'Vasya') {
//         console.log('Данный пользователь ' + name + ' уже есть');
//     } else {
//         console.log(`Привет ${name}`);
//     }
// }
// console.log(`привет ${name}`);

// userName()

function userName2() {
    let name = 'Kolya'
    console.log(name)
}
userName2()




function enterName(name: string) {
    if (typeof name !== 'string') {  // проверка на тип данных (если случайно ввели в имя числа)
        return 'У вас введены числа'
    }
    if (name == '') {
        return 'Введите ваше имя'
    }
    return name
}
console.log(enterName(''));



function checkAge(age: number) {

    return age >= 18 ? 'вы взрослый' : 'вы ребенок'

}
console.log(checkAge(5));






console.log((Math.random() * 100).toFixed());   // 1-ый способ округления целого числа 
console.log((Math.round(Math.random() * 100))); // 2-ой способ округления целого числа
console.log((Math.trunc(Math.random() * 100))); // 3-й способ округления целого числа







console.log(Math.round(5.4)) // округление до ближайшего числа

console.log(Math.floor(9.9)) // округление вниз до ближайшего числа

console.log(Math.ceil(5.2)) // округление вверх до ближайшего числа

console.log(Math.trunc(5.4)); // отбрасывает дробную часть

console.log('----------');


console.log(10 % 4);









// setTimeout(() => {
//     console.log('Привет Вася');
// }, 2000);





// accum = 0

// let stopTimer = setInterval(() => {
//     accum++
// console.log(accum);
// }, 1000);

// setTimeout(() => {
//     clearInterval(stopTimer)
// }, 4000);








// 9. Написать функцию, которая выводит все четные или нечетные числа, в указанном 
// пользователем диапазоне. Какие числа выводить, определяется третьим параметром типа
// bool (true – четные, false – нечетные).

// function showEvenOddNumberInDiapazone (min:number, max:number, bool:boolean) {

// }

// console.log(showEvenOddNumberInDiapazone(5, 15, false))








//! 4. Написать функцию, которой передаёт текущее время.

let data = new Date
console.log(`Текущее время: ${data.getHours()} часов и ${data.getMinutes()} минут `);



//! 5. Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости 
//! от времени суток (Доброе утро\день\вечер\ночи Иван)

function greetUser(name: string) {
    let data = new Date
    let hours = data.getHours()

    if (hours >= 6 && hours < 12) {
        return `Доброе утро ${name}`
    }
    if (hours < 18) {
        return `Добрый день ${name}`
    }
    if (hours < 22) {
        return `Добрый вечер ${name}`
        // return 'Добрый вечер ' + name
    }
    return `Доброй ночи ${name}`
}

console.log(greetUser('Vladimir'));



// console.log(5.4)
// console.log(Math.floor(5.4))
// console.log(Math.ceil(5.4))
// console.log(Math.round(5.6))
// console.log(Math.trunc(5.9999))

// console.log(Math.min(2, 5, 7, 9, 25))
// console.log(Math.max(2, 5, 7, 9, 25))





//! 6. Написать функцию, которая передаёт состояние возраста 
//! (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый


function checkUserAge(i: number) {
    if (i <= 17) {
        console.log('Вы ребенок');
    } else if (i <= 30) {
        console.log('Вы молодой');
    } else if (i <= 55) {
        console.log('Вы зрелый');
    } else {
        console.log('Вы старый');

    }
}


checkUserAge(6);



function checkUserAge2(i: number) {
    if (i <= 17) {
        return 'Вы ребенок';
    } else if (i <= 30) {
        return 'Вы молодой';
    } else if (i <= 55) {
        return 'Вы зрелый';
    } else {
        return 'Вы старый';

    }
}

console.log(checkUserAge2(6));



// //! 1. Написать функцию, которая вычисляет факториал заданного числа.

// //? факториал числа 5 1*2*3*4*5
// //? факториал числа 7 1*2*3*4*5*6*7

// function calculateFactorial (num:number):any {
//     if (num==1) {
//         return num
//     } else {
//         return num * calculateFactorial(num-1) //пошаговый разбор числа 3: 3 * (3-1=2) * (2-1=1)
//     }
// }

// console.log(calculateFactorial(1));
// console.log(calculateFactorial(3));
// console.log(calculateFactorial(15));


// //! 2. Написать функцию, которая выводит все числа из заданного пользователем диапазона в прямом 
// //! порядке. И еще одну функцию – для вывода в обратном порядке.

// function showDiapazone (num1:number, num2:number):any {
//     if(num1==num2) {
//         return num1
//     } else {
//         return num1 + ' ' + showDiapazone(num1+1, num2)
//     }
// }

// console.log(showDiapazone(3,3))
// console.log(showDiapazone(3,10))

// function showReverseDiapazone (num1:number, num2:number):any {
//     if(num1==num2) {
//         return num1
//     } else {
//         return num2 + ' ' + showReverseDiapazone(num1, num2-1)
//     }
// }
// console.log(showReverseDiapazone(3,3))
// console.log(showReverseDiapazone(3,10))


// //! 3. Написать функцию, которая выводит переданное ей число задом наперед.
// //! Например: число 1234 вывести как 4321.

// function showReverseNumber(x:number):number {
//     if (x<10){
//         return x
//     } else {
//         return Number(x % 10 + '' + showReverseNumber(Math.floor(x/10)))
//     }
// }

// console.log(showReverseNumber(6))
// console.log(showReverseNumber(16))
// console.log(showReverseNumber(12345))

// // console.log(10 % 4);

// // console.log(1234);
// // console.log(Number(String(1234).split('').reverse().join('')));


// // console.log(Math.trunc(2.9435345));
// // console.log(1.2345.toFixed(2));

// //! 4. Написать функцию, которая считает сумму цифр числа.
// //! Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.

// function calculateSumm (num1:number):any {
//     if(num1<10) {
//         return num1
//     } else {
//         return num1 % 10 + calculateSumm(Math.floor(num1/10))
//     }
// }

// console.log(calculateSumm(4))
// console.log(calculateSumm(123))
// console.log(calculateSumm(12345))


// //! 5. Написать функцию, которая принимает число и выводит соответствующее количество вложенных 
// //! пар круглых скобок. Например: число 4 – (((()))).


// function showBrackets(num:number):any {
//     if (num==1) {
//         return '()'
//     } else {
//         return '(' + showBrackets(num-1) +')'
//     }
// }

// console.log(showBrackets(1));
// console.log(showBrackets(3));
// console.log(showBrackets(9));

console.log('----------------------');


//!!!!!!!!!!!!!!!!!!!!!!! ОБЪЕКТЫ !!!!!!!!!!!!!!!!!!!!!!!!


// let name = 'Katya'
// let age = 33

let user = {
    name: 'Katya', // ключ : значение
    age: 32,
    // 0: '888',
    // 5: 'abc',
    city: 'Sochi',
    month: 'March',
    // likes_birds: true,  // console.log(user.likes_birds);
    // "likes birds": true, // console.log(user['likes birds']);

}

// let massive = [3, 5, 7, 9]
// let massive2 = ['Ann', 'Kate', 'Julia', 'Vika']







console.log(user);
console.log(user.age);

user.age = 36 //перезапись значения по ключу
console.log(user);

//@ts-ignore
delete user.month // удаление ключа
console.log(user);



console.log(user.name);

console.log(user.likes_birds);
console.log(user['likes birds']);

console.log(user['name']);

console.log('age' in user);
console.log('table' in user);
console.log(0 in user);

for (const key in user) {
    console.log(key + ' : ' + user[key]);
    // console.log();

}



let obj1 = {
    numerator: 2,
    denumerator: 3,
}

let obj2 = {
    numerator: 4,
    denumerator: 5,
}

console.log(obj1);
console.log(obj2);



// let person = {
//     name: "John",
//     surname: "Smith"
// };
// let person2 = {
//     name: "John",
//     surname: "Smith"
// };
// let person3 = person2 = person

// console.log(person==person2);
// console.log(person.name==person2.name);

// console.log(person==person3);

//! Задание 1
//! Создать объект, описывающий автомобиль (производитель,
//! модель, год выпуска, средняя скорость), и следующие функции
//! для работы с этим объектом.



// let car = {
//     manufacture : 'Kia',
//     model:'Rio',
//     year:2013,
//     averageSpeed: 100,
// }
//! 1. Функция для вывода на экран информации об автомобиле.

// function showInfoAboutCar(str:any) {
//     for (const key in str) {
//         console.log(`${key} : ${str[key]}`);                        
//         }
// }

// showInfoAboutCar(car)




//! 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со 
//! средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать 
//! перерыв на 1 час.

function showTimeInTravel(distance: number, speed: number) {
    let time = distance / speed
    let rest = Math.floor(time / 4)

    if (time <= 4) {
        return distance / speed
    } else {
        return (time + rest) + ' часов'
    }
}

// console.log(showTimeInTravel(1200, car.averageSpeed))

// 100 км - 1 час
// 200 км - 2 часа
// 300 км - 3 часа
// 400 км - 4 часа
// 500 км - 6 часа
// 600 км - 7 часа
// 700 км - 8 часа
// 800 км - 9 часа
// 900 км - 11 часа
// 1000 км - 12 часов
// 1100 км - 13 часов
// 1200 км - 15 часов







//! Задание 3
//! Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для 
//! работы с этим объектом.
//! 3. Функция изменения времени на переданное количество
//! минут.
//! 4. Функция изменения времени на переданное количество
//! часов.
//! Учтите, что в последних 3-х функциях, при изменении одной
//! части времени, может измениться и другая. Например: если ко
//! времени «20:30:45» добавить 30 секунд, то должно получиться
//! «20:31:15», а не «20:30:75».


// //! Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы 
// //! с этим объектом.

// let time = {
//     hours: 125,
//     minutes: 125,
//     seconds: 30,
// }
// console.log(time);


// //! 1. Функция вывода времени на экран.

// function showTime (time:any) {
//     return time
// }
// console.log(showTime(time));


// //! 2. Функция изменения времени на переданное количество
// //! секунд.

// function showSeconds (sec:any) {
//     sec = Math.trunc(time.seconds/60)  // смотрим сколько количество минут в числе 
//     if (time.seconds>59) { // если количество sec БОЛЬШЕ 59, то срабатывает первое условие
//         time.seconds = time.seconds - sec*60     // приводим секунды в 'нормальный' вид
//         time.minutes+=sec       // добавляем минуты
//         return time
//     } else {                  // если количество sec МЕНЬШЕ или РАВНО 59, то срабатывает второе условие
//         return time
//     }
// }
// console.log(showSeconds(time));


// //! 3. Функция изменения времени на переданное количество
// //! минут.


// function showMinutes (min:any) {
//     min = Math.trunc(time.minutes/60)
//     if (time.minutes>59) {
//         time.minutes = time.minutes - min*60
//         time.hours+=min
//         return time
//     }
//     return time
// }
// console.log(showMinutes(time));


// //! 4. Функция изменения времени на переданное количество часов.

// function showHours (hour:any) {
//     hour = Math.trunc(time.hours/24)

//     if (time.hours>23) {
//         time.hours = time.hours - hour*24
//         // time.hours+=min
//         return time
//     }
//     return time
// }
// console.log(showHours(time));





// let everything = [231, 'Sochi', alert()]
// console.log(everything);


let massive = [2, 5, 4, 6, 9, 4, 2, 1]
console.log(massive[0]);
console.log(massive[1]);
console.log(massive.length + ' количество элементов в массиве');




let namiInMassive = [
    'Ann',
    'Kate',
    'Sveta'
]
console.log(namiInMassive);

console.log(namiInMassive[3] = 'Olga');
console.log(namiInMassive);






console.log(Math.round(Math.random() * 100));
console.log(Math.round(Math.random() * 100));
console.log(Math.round(Math.random() * 100));
console.log(Math.round(Math.random() * 100));
console.log(Math.round(Math.random() * 100));
console.log(Math.round(Math.random() * 100));
console.log(Math.round(Math.random() * 100));


let mas = [1, 3, 4, 6, 2, 3, 45, 67, 78,]

console.log(mas);
console.log(mas.length);

console.log(Math.max(...mas) + ' - макс элемент массива');
console.log(Math.min(...mas) + ' - мин элемент массива');

//! Задание 1
//! Создать массив из 10 случайных чисел и написать несколько
//! функций для работы с ним.
let massiveWithRandomNumbers: number[] = []
for (let i = 1; i <= 10; i++) {
    let num = Math.round(Math.random() * 100)
    massiveWithRandomNumbers.push(num)
}

// console.log(massiveWithRandomNumbers);


//! 1. Функция принимает массив и выводит его на экран.

function showMassive(massive: number[]) {
    return massive
}
// console.log(showMassive(massiveWithRandomNumbers))



//! 2. Функция принимает массив и выводит только четные
//! элементы.
function showEvenElem(x: number[]) {

    //! 1-ый способ решения через цикл for

    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 == 0) {
            console.log(x[i]);
        }
    }

    //! 2-ой способ решения через цикл for of

    for (const el of x) {
        if (el % 2 == 0) {
            console.log(el);
        }
    }


}

showEvenElem(massiveWithRandomNumbers)






console.log('------------');


//! 3. Функция принимает массив и возвращает сумму всех
//! элементов массива.

function showUnionSumm(mass: number[]) { // название функции и её параметр
    let accum = 0     // (аккамулятор) - сюда мы записываем общую сумму чисел
    for (let i = 0; i < mass.length; i++) { // количество повторений цикла
        accum += mass[i] // суммируем элементы между собой

    }
    return accum // возвращем общую сумму 
}

console.log(showUnionSumm(massiveWithRandomNumbers)); // вызов функции и передача аргумента



//! 4. Функция принимает массив и возвращает его максимальный элемент.
function findMaxElement(x: number[]) {
    return `
наибольший элемент = ${Math.max(...x)}, 
наименьший элемент = ${Math.min(...x)}
    `
}
console.log(findMaxElement(massiveWithRandomNumbers));






//! 5. Функция добавления нового элемента в массив по указанному индексу.



mas = [1, 3, 4, 6, 2, 3, 45, 67, 78,]

function addNewElement(mass: number[], index: number, userNum: number) {
    mass.splice(index, 0, userNum)
    return mass
}
console.log(addNewElement(massiveWithRandomNumbers, 3, 555));

console.log(addNewElement(mas, 3, 555));


massiveWithRandomNumbers = [47, 50, 78, 32, 46, 100, 15, 76, 27, 2]





//! 6. Функция удаления элемента из массива по указанному
//! индексу

function deleteElement(mass: number[], index: number) {
    mass.splice(index, 1)
    return mass
}
console.log(deleteElement(massiveWithRandomNumbers, 4));


console.log('=============')


massiveWithRandomNumbers = [47, 50, 78, 32, 46, 100, 15, 76, 27, 2]
console.log(massiveWithRandomNumbers);

massiveWithRandomNumbers.push(333)
console.log(massiveWithRandomNumbers);




console.log(Math.max(...massiveWithRandomNumbers)) //! первый способ нахождения max числа



let arr = [1, 4, 6, 8,]
console.log(arr);

let arr2 = [1, 4, 6, 8,]
console.log(arr == arr2);


console.log(arr[0] == arr2[0]);
console.log(arr[1] == arr2[1]);
console.log(arr[2] == arr2[2]);


//! Методы массивов

namiInMassive.push('table', 'computer') //! добавляет элементы в конец массива
console.log(namiInMassive);

namiInMassive.pop() //! удаляет ПОСЛЕДНИЙ элемент массива 
console.log(namiInMassive);

namiInMassive.unshift('Kolya', 'Ivan', 'Sergey') //! добавляет элементы в начало массива
console.log(namiInMassive);


namiInMassive.shift() //! удаляет ПЕРВЫЙ элемент массива
console.log(namiInMassive.shift());



let massive2 = [2, 5, 4, 6, 9, 4, 2, 1]
console.log(massive2.sort()); //! сортирует элементы в порядке возрастания
console.log(massive2.reverse()); //! сортирует элементы в порядке убывания

console.log(namiInMassive);

let computer = 'computer'
console.log(typeof computer);
console.log(computer.split('').reverse().join(''));

let massive3 = [2, 5, 4, 6, 9, 4, 2, 1]
console.log(massive3);
console.log(String(massive3)); // метод, который оборачивает массив в строку


namiInMassive = [
    'Ann',
    'Kate',
    'Sveta'
]
console.log(String(namiInMassive).split(',').join('-'));

//! метод split - разделяет по  символу
//! метод join - соединяет по  символу  



let str = '2,5,4,6,9,4,2,1'
console.log(str.split(',').join(' '));

let example = 'метод, который оборачивает массив в строку'
console.log(example.split(' ').join('-'));



//! (название массива).splice(2, 0, 555) 
//! первый - индекс элемента, 
//! второй - сколько элементов мы хотим удалить, 
//! третий - добавление нового элемента(ов)


massive3 = [2, 5, 4, 6, 9, 4, 2, 1]
let newArray = massive3.splice(4, 7)

console.log(massive3);
console.log(newArray);

console.log(newArray.concat(2324, massive3, 1234));
console.log(massive3.concat(newArray));

console.log('-------------------');


//! 1. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if 
//! выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.


let array = [2, 5, 9, 15, 0, 4]

//! первый способ решения цикл for
let arrayWitnNewElem = []
for (let i = 0; i < array.length; i++) {
    if (array[i] > 3 && array[i] < 10) {
        arrayWitnNewElem.push(array[i]);
    }
}
console.log(arrayWitnNewElem);


//! второй способ решения цикл for of
// const newMass = []
// for (const el of array) {
//     if (el>3 && el<10) {
//         newMass.push(el)
//     }
// }
// console.log(newMass);


// !2. Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму 
// !положительных элементов массива.

// let massive5 = [2, 5, -9, -15, 0, 4, -6, 5]

// let accumulyator = 0
// for (const el of massive5) {
//     if (el>0) {
//         accumulyator+=el   
//     }
// }
// console.log(accumulyator);


// !3. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if п
// !роверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// const newArr = [1, 2, 5, 9, 4, 13, 4, 10]
// for (let i = 0; i < newArr.length; i++) {
//         if(newArr[i]==4) {
//             console.log('Есть');
//             break
//         }    
// }


// !4. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те
// ! числа из массива, которые начинаются на цифру 1, 2 или 5.
// const massWithNum = [10, 20, 30, 50, 235, 3000]
// for (let i = 0; i < massWithNum.length; i++) {

//     let num = String(massWithNum[i]) // здесь переводим элементы массива в строки

//     if (num[0]=='1' || num[0]=='2' || num[0]=='5') {
//         console.log(num);      
//     }
// }


// !5. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку
// ! ' 1-2-3-4-5-6-7-8-9-'.

// const newMassive = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let string = ''
// for (let i = 0; i < newMassive.length; i++) {
//         string+=newMassive[i] + '-'
// }
// console.log(string);




// !6. Составьте массив дней недели. С помощью цикла for выведите все дни недели.

let dayOfWeek = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье',]
console.log(dayOfWeek);

for (let i = 0; i < dayOfWeek.length; i++) {
    console.log(dayOfWeek[i]);
}


dayOfWeek = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье',]

console.log(dayOfWeek.indexOf('среда'));



console.log(dayOfWeek.slice(1, 4)); //! slice КОПИРУЕТ часть массива и не изменяет его
console.log(dayOfWeek);

dayOfWeek.splice(3, 0, 'Monday', 'Tuesday') //! splice может удалять старые элементы массива и записывать новые

console.log(dayOfWeek);



let mass1 = [1, 2, 3, 4, 5]
let mass2 = [1, 2, 5,]
console.log(mass1.concat(mass2)); //! concat соединяет данные из массивов


mass1 = [1, 2, 3, 4, 5]

mass1.forEach(function name(el) {
    console.log(el * 2)
})

mass1.forEach((el) => {
    console.log(el * 2)
})

console.log(mass1);




array = [2, 5, 9, 5, 0, 6,]

console.log(array.indexOf(5)); //! метод indexOf показывает индекс элемента с начала массива

console.log(array.lastIndexOf(5)); //! метод lastIndexOf показывает индекс элемента с конца массива

console.log(array.includes(5)); //! includes - показывает наличие элемента в массиве

// array.find((el)=> {
//     if (el>3) {
//         console.log(el);

//     }
// })

console.log('--------------');


let users: any[] = [
    { id: 1, name: "Вася", payment: 20000 },
    { id: 2, name: "Петя", payment: 25000 },
    { id: 3, name: "Маша", payment: 15000 }
];

let usersName: number[] = []

users.map(el => usersName.push(el.id * el.payment))
console.log(usersName);




// console.log(usersName);

console.log('--------------');
let unionPayment = 0
users.forEach(el => unionPayment += el.payment)
console.log(`общая зарплата работников = ${unionPayment} рублей`);

let sortPayment = [] as any

users.forEach(el => sortPayment.push(el.payment))
console.log(sortPayment.sort());
console.log(sortPayment.reverse());



let someUsers = users.find(el => el.payment >= 20000) //! выводит первое верное значение и на нём завешается
console.log(someUsers);

let someUsers2 = users.filter(el => el.payment >= 20000) //! filter выводит ВСЕ верные значениЯ
console.log(...someUsers2);


array = [2, 5, 9, 5, 0, 6,]
let test = array.find(el => el > 3)
console.log(test);



array = [2, 5, 6,]

let acc = 0
array.forEach(el => acc += el) //! forEach перебирает каждый элемент массива (по аналогии с циклом for)
console.log(acc);




let reduce = array.reduce((acc, el) => acc += el) //! reduce нужен для вычисления одного значения на основе всех элементов массива
console.log(reduce);





// map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
// sort(func) – сортирует массив «на месте», а потом возвращает его.
// reverse()


array = [2, 5, 9, 8]
console.log(array.reverse()); //! reverse - меняет порядок элементов задом наперёд

console.log(array.sort()); //! sort - сортирует элементы в порядке возрастания

let testMap = array.map(el => el * 10) //! создаёт новый массив и НЕ меняет исходный массив
console.log(testMap);

array.copyWithin



//! 1. У вас есть 5 чисел. Найдите наибольшее и наименьшее из них.
let newArr = [4, 7, 9, 12, 20, 5, 1, 3]

// первый способ решения
console.log(Math.max(...newArr));
console.log(Math.min(...newArr));

// второй способ решения
console.log(newArr.sort((a, b) => a - b).pop());
console.log(newArr.sort((a, b) => a - b).shift());


//! 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1] одной командой.

let array2 = [1, 2, 3]
console.log(array2.reverse());

//! 3. Отсортируйте 5 случайных чисел от 1 до 10 в порядке возрастания и затем в порядке убывания.
newArr = [4, 7, 9, 12, 20, 5, 1, 3]
console.log(newArr.sort((a, b) => a - b));
console.log(newArr.sort((a, b) => b - a));

//! 4. Есть 2 массива: let a = ['a', 'b', 'c']; let b = [1, 2, 3]; Объедините их, чтобы получилось: ['a', 'b', 'c', 1, 2, 3]
let a: any[] = ['a', 'b', 'c'];
let b = [1, 2, 3];
console.log(a.concat(b));

//! 5. У нас есть некий массив с данными: const fruits = ["Banana", "Orange", "Apple", "Mango"]; Проверьте, есть ли в этом массиве значение Banana
const fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits.includes('Banana'));


//! 6. Напишите программу, которая будет преобразовывать число от 1 до 12 в соответствующее 
//! название месяца (Январь, февраль, ...)

let months = ['янв', 'февр', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сент', 'окт', 'нояб', 'дек',]

//? первый способ решения
months.forEach((el, index) => console.log(`${el} - ${index + 1}`))

//? второй способ решения
// for (let i = 0; i < months.length; i++) {
//     console.log(i+1 + ' - '  + months[i]);
// }


//! 7. У нас есть объект: let obj = { 'name':['Вася', 'Петя', 'Коля'], 'age':[11, 30, 20], }; 
//! Получите Петю из массива arr. Посчитайте, сколько элементов находится в name.
let obj = {
    'name': ['Вася', 'Петя', 'Коля'],
    'age': [11, 30, 20],
}
console.log(obj.name.filter((el) => el == 'Петя'));
console.log(obj.name[1]);
console.log(obj.name.length);

//! 8. Поиск по массиву объектов let arr = [{'id':'1','prop1':'val1'},{'id':'2','prop1':'val2'}] 
//! Этот набор данных формируется выборкой из базы данных. Нужно получить объект, у которого id=2.
let arrray = [
    { 'id': '1', 'prop1': 'val1' },
    { 'id': '2', 'prop1': 'val2' }
]
let newUser = arrray.find((el) => el.id == '2')
console.log(newUser)



//! 9. У вас есть массив: var arr = [ "Hi", "Hello", "Bonjour"]; Добавьте к нему еще один 
//! элемент в конец, чтобы получился следующий массив [ "Hi", "Hello", "Bonjour", "Hola"]

let testArray = ["Hi", "Hello", "Bonjour"]
testArray.push("Hola")
console.log(testArray);


//! Задания повышенной сложности (по желанию)
//! 10. У нас есть 3 товара. У каждого товара есть цена, название и стоимость доставки. 
//! Стоимость доставки для всех товаров одинаковая.

let items = [
    { name: 'Milk', price: 50, delivery: 30 },
    { name: 'Eggs', price: 80, delivery: 50 },
    { name: 'Bread', price: 100, delivery: 20 },
]

// let infoAboutItems = document.getElementById('infoAboutItems')  as HTMLDivElement

// infoAboutItems.innerHTML+= 'Товары: <br>'
// items.forEach(el=>infoAboutItems.innerHTML+=`${JSON.stringify(el)}` + '<br>')




//! 1. Выведите на экран общую стоимость всех товаров вместе со стоимостью доставки.


// let priceWithDelivery = items.map(el=>el.price + el.delivery).reduce((acc,el)=>acc+=el) // можно решить в одну строчку
// infoAboutItems.innerHTML += priceWithDelivery + ' рублей общая стоимость всех товаров'

// let priceWithDelivery = items.map(el=>el.price + el.delivery) //считаем стоимость товара + доставку по строкам
// let accum = 0 // сюда записываем общую стоимость
// priceWithDelivery.forEach(el=>accum+=el) // считаем общую стоимость
// infoAboutItems.innerHTML += `<br> <br> Общая стоимость всех товаров = 
// ${accum} рублей ` + '<br>' + '<br>' // выводим общую стоимость товаров



//! 2. Сделайте так, чтобы меняя стоимость доставки в одном месте, общая стоимость автоматически пересчитывалась.

// let Delivery = items.map(el=>el.delivery) // достаем стоимость каждой доставки
// let maxDelivery =Math.max(...Delivery) // находим доставку с максимальной стоимостью

// let accum2 = 0 // сюда записываем общую стоимость с макс доставкой
// items.map(el=>accum2 += el.price + maxDelivery) //
// infoAboutItems.innerHTML += `Общая стоимость всех товаров в пересчетё с новой доставкой = 
// ${accum2} рублей` + '<br>' + '<br>' // выводим общую стоимость товаров с макс доставкой






//! 11. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия 
//! товара, количества и цены за единицу товара. Написать следующие функции.
// let items2 = [
//     {name:'Milk', price: 50,  quantity:1},
//     {name:'Eggs', price: 80,  quantity:2},
//     {name:'Bread', price: 100, quantity:3},
// ]



//! 1. Распечатка чека на экран.
// let infoAboutItems2 = document.getElementById('infoAboutItems2') as HTMLDivElement
// items2.forEach(el=>infoAboutItems2.innerHTML+=`
//     ${el.name} <br> цена: ${el.price}, кол-во: ${el.quantity}
// ` + '<br>'+ '<br>')


//! 2. Подсчет общей суммы покупки.
// let unionSumm = 0
// items2.forEach(el=>unionSumm+=el.price*el.quantity)

// infoAboutItems2.innerHTML += 'Общая стоимость покупки = ' + unionSumm + ' рублей'  + '<br>'

//! 3. Получение самой дорогой покупки в чеке.

// let maxPrice = items2.map(el=>el.price*el.quantity)
// infoAboutItems2.innerHTML += 'Самая дорогая покупка в чеке = ' + Math.max(...maxPrice) + ' рублей'  + '<br>'




//! 4. Подсчет средней стоимости одного товара в чеке.

// let quantity = 0    
// items2.forEach(el=>quantity+=el.quantity) // считаем общее количество товара

// let averagePrice = unionSumm / quantity

// infoAboutItems2.innerHTML += 'Средняя цена одного товара = ' +  averagePrice + ' рублей'  + '<br>'

// console.log(5+5);






let string = 'Средняя цена ОДного товара'
console.log(string.length);

let string2 = string.split(' ')
console.log(string2.length);


console.log(string);

console.log(string.toUpperCase());
console.log(string.toLowerCase());

function camelize(str: string) {
    let splitStr = str.split('-')
    let mass: string[] = []

    for (let i = 0; i < splitStr.length; i++) {
        mass.push(splitStr[i].slice(0, 1).toUpperCase(), splitStr[i].slice(1))
    }

    let str2 = mass.join('')
    return str2[0].toLowerCase() + str2.slice(1)
}

console.log(camelize('background-color'));
console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('list-style-image-image-image-image'));


let massives = [5, 2, 1, 10, -10, 8]
console.log(massives);
console.log(massives.sort((a, b) => a - b)); // сортировка по возрастанию
console.log(massives.sort((a, b) => b - a)); //обратная сортировка

let arrSort = ["HTML", "JavaScript", "CSS"]
console.log(arrSort);




function sortStringByAlphabet(mass: string[]) {
    let sortedMass = mass

    sortedMass.sort()
    return sortedMass

}
console.log(sortStringByAlphabet(["HTML", "JavaScript", "CSS"]));


//! Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let newUsers = [vasya, petya, masha];
console.log(...newUsers.sort((a, b) => a.age - b.age));


//! возвратить средний возраст.
let accumAge = 0
newUsers.map(el => accumAge += el.age)
console.log(Math.trunc(accumAge / newUsers.length));


console.log((newUsers.reduce((acc, el) => acc += el.age, 0) / newUsers.length).toFixed(1));



let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];
console.log(strings);


let massWithUniqElement: string[] = []
for (let i = 0; i < strings.length; i++) {
    if (!massWithUniqElement.includes(strings[i])) {
        massWithUniqElement.push(strings[i])
    }
}
console.log(massWithUniqElement);








let massWithUniqElement2: string[] = []

for (const el of strings) {
    massWithUniqElement2.push(el)
}
console.log(massWithUniqElement2);




let billion = 1000000000;
let billion2 = 1_000_000_000;
let billion3 = 1e+9

console.log(billion);
console.log(billion2);
console.log(billion3);

let mcs = 0.000001
let mcs2 = 1e-6
console.log(mcs);
console.log(mcs2);



let num = 255;
console.log(num.toString());

console.log(255.000.toString());
console.log(255.000.toString(2));
console.log(255.000.toString(16));
console.log(255.000.toString(36));


// let num2 = 1.2345;
// console.log(typeof Number(num2.toFixed(2)));



//! Math.floor
//! Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.

//! Math.ceil
//! Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.

//! Math.round
//! Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.

//! Math.trunc
//! Обрезает дробную часть


//! toString() - переводит число в строку
//! toFixed() - округляет число  до n знаков после запятой 


console.log(typeof 123..toString());

console.log((0.1 + 0.2).toFixed(1) == 0.3.toString());
console.log(0.3);

// parseInt и parseFloat

let width = '100px'
console.log(parseInt(width));
console.log(parseFloat(width));


let nums = '123.123px'
console.log(parseInt(nums));
console.log(parseFloat(nums));





function scoreLowelInString(str: string) {
    let acc = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'а' || str[i] == 'е') {
            acc++
        }
    }
    return str.length

}

console.log(scoreLowelInString(`Написать функцию, 
    которая считает  
    количество гласных букв в 
    переданной строке`))

let x = 'беспЛатно'
let y = 'БеспЛАТно'

console.log(x == y);
console.log(x.toLowerCase() == y.toLowerCase());



console.log(y.toLowerCase());


//   еле
//   Лепс спел

//   лампочка

let singer = 'лепс спел'
if (singer == singer.split('').reverse().join('')) {
    console.log('Число палиндром');
} else {
    console.log('Число не палиндром');
}

console.log(('количество гласных букв в ').split(''));



let JS_PZ_Modul_2_Week_3 = document.getElementById('string') as HTMLDivElement




//! Задание
//! 1. Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой
//! строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки
//! одинаковой длины.

function compareStrings(str1: string, str2: string) {
    if (str1.length > str2.length) {
        return 1
    }
    if (str1.length < str2.length) {
        return -1
    }
    return 0
}
console.log(compareStrings('Написать функцию, которая переводит в верхний регистр', 'Написать функцию, которая считает количество гласных'));
console.log(compareStrings('Написать функцию, в верхний регистр', 'Написать функцию, которая считает количество гласных'));
console.log(compareStrings('Написать функцию, в верхний регистр', 'Написать функцию, в верхний регистр'));



//! 2. Написать функцию, которая переводит в верхний регистр
//! первый символ переданной строки.
function changeRegister(str: string) {

    return str[0].toUpperCase() + str.slice(1)
}
console.log(changeRegister('которая переводит в верхний регистр'));


//! 3. Написать функцию, которая считает количество гласных
//! букв в переданной строке.


function scoreLowelInStrings(str: string) {
    let mass: any[] = ['ы', 'а', 'о', 'у', 'е', 'я', 'и', 'ю', 'ё', 'э',]
    let accum = 0
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < mass.length; j++) {
            if (str[i] == mass[j]) {
                accum++
            }
        }
    }
    return accum
}
console.log(scoreLowelInStrings('которая переводит в верхний регистр'));
console.log(scoreLowelInStrings('регистр'));




//! 4. Написать функцию для проверки спама в переданной
//! строке. Функция возвращает true, если строка содержит
//! спам. Спамом считать следующие слова: 100% бесплатно,
//! увеличение продаж, только сегодня, не удаляйте, ххх.
//! Функция должна быть нечувствительна к регистру.

function checkSpam(str: string) {
    let mass = ['100% бесплатно', 'увеличение продаж', 'только сегодня', 'не удаляйте', 'ххх']
    for (const el of mass) {
        if (str.toLowerCase().includes(el)) {
            return 'Есть спам'
        }

    }
    return 'Спама нету'
}
console.log(checkSpam('Спамом считать следующие слова: 100% Бесплатно'));
console.log(checkSpam('Функция принимает строку ххх'));




//! 5. Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки
//! больше, чем максимальная, то необходимо отбросить
//! лишние символы, добавив вместо них троеточие.
//! Например: truncate(“Hello, world!”, 8) должна вернуть
//! “Hello...”.

function reduceString(str: string, num: number) {

    return str.slice(0, num) + '...'
}

console.log(reduceString('Hello, world!', 8));
console.log(reduceString('Написать функцию, которая проверяет', 20));




//! 6. Написать функцию, которая проверяет, является ли переданная строка палиндромом.

function checkPalindrom(str: string) {
    let deleteSpace = '' as any //сюда пишем строку БЕЗ пробелов
    str.toLowerCase().split(' ').forEach(el => deleteSpace += (el.trim())) //убираем пробелы между словами
    let reverseStr = deleteSpace.split('').reverse().join('') // меняем элементы в обратном порядке  
    if (reverseStr == deleteSpace) {
        return 'строка палиндром'
    }
    return 'строка не палиндром'
}


console.log(checkPalindrom('еле'));
console.log(checkPalindrom('Лепс спел'));
console.log(checkPalindrom(' а Роза упала на лапу Азора '));







//! 7. Написать функцию, которая считает количество слов в
//! предложении.

function scoreWords(str: string) {

    return 'Количество слов в строке = ' + str.split(' ').length
}
console.log(scoreWords('Написать функцию, которая считает количество слов'));
console.log(scoreWords('Написать функцию'));


//! 8. Написать функцию, которая возвращает самое длинное
//! слово из предложения.


function findLongestWord(str: string) {
    return str.split(' ').sort((a, b) => b.length - a.length)[0]
}
console.log(findLongestWord('Написать функцию, которая возвращает самое длинное'));



//! 9. Написать функцию, которая считает среднюю длину слова
//! в предложении.

function averageLenght(str: string) {
    let symbols = str.split('').length
    let words = str.split(' ').length
    return `среднее количество символов с слове = ${(symbols / words).toFixed(2)}  символов`
}

console.log(averageLenght('Написать функцию, которая считает среднюю длину слова'));




//! 10. Написать функцию, которая принимает строку и символ
//! и выводит индексы, по которым находится этот символ в
//! строке. Также вывести, сколько всего раз встречается этот
//! символ в строке. 

function showIndexsOfElem(str: string, el: string) {
    let massive = []
    let accum = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == el) {
            accum++
            massive.push(i)
        }
    }
    return 'индексы элемента' + el + '=' + massive + ', количество повторений элемента = ' + accum
    return `индексы элемента '${el}' = ${massive}, количество повторений элемента = ${accum}`
}

console.log(showIndexsOfElem('Написать функцию, которая принимает строку и символ', 'а'));
console.log(showIndexsOfElem('Написать функцию, которая принимает строку и символ', 'е'));
console.log(showIndexsOfElem('Написать функцию, которая принимает строку и символ', 'к'));


let number = 100
console.log(number.toString());
console.log(number);

let r = 12.36;
console.log(r.toFixed(0));






let strTest = 'Hi';

// strTest.slice(0,1).toLowerCase() 

console.log(strTest.slice(0, 1) + 'aaa');
console.log(strTest);
console.log(strTest);

let str2 = 'Widget with id www'
// let str2 = 'Widget with id www'

console.log(str2.indexOf('aaa'));

console.log(str2.indexOf('d', 14));

console.log(str2.indexOf('id', 3));
console.log(str2.indexOf('get'));
console.log(str2.indexOf('www'));

let date = '10/08/2020'

//@ts-ignore
console.log('“' + date.replaceAll('/', '”,“') + '”');





//! 1. Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, 
//! количество цифр и количество других знаков.

function showStringStatistic(str: any) {
    let symbols = str.toLowerCase().split('')
    let accum1 = 0 // сюда пишем количество букв
    let accum2 = 0 // сюда пишем количество букв
    for (let i = 0; i < symbols.length; i++) {
        if (symbols[i] >= 'а' && symbols[i] <= 'я') {
            accum1++
        }
        if (symbols[i] == ' ' || symbols[i] == ',' || symbols[i] == '.') {
            accum2++
        }
    }

    return `
    Количество букв = ${accum1}
    Количество символов = ${accum2}
    Количество цифр = ${symbols.length - accum1 - accum2}
    `
}
console.log(showStringStatistic('количество букв, 5'));




//! 2. Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде.
//! Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.


let num1 = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять',]
let num2 = ['десять', 'одиннадцать', 'двенадать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать',]
let num3 = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']

function writeDidgitalsInText(num: any) {
    if (num >= 0 && num <= 9) {
        return num1[num]
    }
    if (num <= 19) {
        return num2[num - 10]
    }
    if (num <= 99) {
        let firstNum = num.toString()[0]
        let secondNum = num.toString()[1]
        return num3[firstNum - 2] + ' ' + num1[secondNum]
    }

    return 'Введите корректное число'
}
console.log(writeDidgitalsInText(8));
console.log(writeDidgitalsInText(19));
console.log(writeDidgitalsInText(23));
console.log(writeDidgitalsInText(125));



let cat = {
    name: 'Vasya',
    age: 5,

    //! запись свойства  внутри объекта
    say: function () {
        return 'котик сказал мяу'
    },

    //! сокращенная запись метода внутри объекта
    walk() {
        console.log('котик ' + this.name + ' может гулять')
    },
    feed: feed,
}

console.log(cat.say());
cat.walk();

console.log(cat);

function feed() {
    console.log('Покормить кота')
}
feed()

console.log(cat);

//@ts-ignore
cat.color = 'black'
console.log(cat);

cat.eat = function () {
    return 'кот поел'
}

cat.run = () => {
    return 'кот побежал'
}


console.log('qwerty'.split(''));


let dog = cat
console.log(dog);
dog.walk()





function User(name: string) {
    this.name = name;
    this.group = 'Web45';
    this.city = 'Sochi'
}
console.log(User);

let user1 = new User('Vanya')
console.log(user1);

let user2 = new User('Vitya')
console.log(user2);



let user3 = {
    name: 'asfadf',
    group: 'sdfsdf',
    city: 'afdasf',
}
console.log(user3);

let nickname = 'Ivan'
let surname = 'Ivanov'

console.log(` привет новый пользователь ${nickname} ${surname} `);





//! посчитать буквы, числа и символы

function scoreSymbols(str: any) {
    let splitStr = str.toLowerCase().split('')
    let accNum = 0
    let accLet = 0 // на русс буквы
    let accLet2 = 0 // на англ буквы

    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] >= '0' && splitStr[i] <= '9') {
            accNum++  // считаем цифры
        }
        if (splitStr[i] >= 'а' && splitStr[i] <= 'я') {
            accLet++ // считаем русс буквы
        }
        if (splitStr[i] >= 'a' && splitStr[i] <= 'z') {
            accLet2++ // считаем англ буквы
        }
    }

    return `
        количество цифр: ${accNum},
        количество русс букв: ${accLet},
        количество англ букв: ${accLet2},
        количество символов: ${splitStr.length - accNum - accLet - accLet2}
    `
}

console.log(scoreSymbols('на ААААААААААААААААА тек @#$ 9 0123 sda'));





function showSumm(a: number, b: number) {
    return a + b
}
console.log(showSumm(3, 4));


//! 'длинный' тип записи
let summ = function show(a: number, b: number) {
    return a + b
}
console.log(summ(3, 5));


//! короткий тип записи
let summ2 = (a: number, b: number) => {
    return a + b
}
console.log(summ2(3, 5));



let letter = (x: string) => {
    return x
}
console.log(letter('abc'));


//! когда у нас один параметр круглые скобки можно опускать

//@ts-ignore
let letter3 = x => {
    return x
}
console.log(letter3('abc'));


//! также мы можем опускать 'return' и опускать фигурные скобки
let letter4 = x => x
console.log(letter4('abcde'));



let showMass = (mass: number[]) => {
    let acc = 0
    mass.forEach(e => acc += e)
    return acc

    // return mass.reduce((acc,e)=>acc+e)
}
console.log(showMass([5, 8, 3]));

let age2 = 10
console.log(age2 > 18 ? 'вы взрослый' : 'вы ребенок')








//!!!!!!!!!!!!!!!!!!!!! Опциональная цепочка '?.' !!!!!!!!!!!!!!!!!!!!!

// let car = {
//     country : 'China',
//     year:2024,
//     extraInfo : {
//         color:'white',
//         engine: '123 hourses'
//     }
// }

// console.log(car.country);
// console.log(car['country']);

//! через условный оператор
// if (car.extraInfo) {
//     console.log(car.extraInfo.color);
// } else {
//     console.log(undefined);
// }


//! через тернарный оператор
// console.log(car.extraInfo ? car.extraInfo.color : undefined)





// console.log(`
//     Страна : ${car.country},
//     год : ${car.year},
//     доп. инфо : ${car.extraInfo?.['engine']} 
//     `);





//! если пользователь ни ввёл своё имя мы его 'просим' ввести.
let userName = 'aaaa'

if (userName == '') {
    console.log('Введите ваше имя');
} else {
    console.log(userName);
}


//! методы массивов повторение

let arr1 = [5, 10, 9, 12, 5, 8, 2, 9, 5]
let arr12 = [10, 12, 5]
console.log(arr1.concat(arr12)); //! объединяет элементы двух массивов в один массив

console.log(arr1.every(el => el > 6)); //! проверяет, все ли элементы соответствуют определенному условию

console.log(arr1.filter(el => el % 2 == 0)); //! filter(): фильтрует элементы массива

console.log(arr1.find(el => el < 9)) //!find(): возвращает первый элемент массива, который соответствует некоторому условию

console.log(arr1.findLast(el => el < 9)) //!findLast(): возвращает последний элемент массива, который соответствует некоторому условию

console.log(arr1.findIndex(el => el == 5)); //! findIndex(): возвращает индекс первого элемента массива, который соответствует некоторому условию

console.log(arr1.findLastIndex(el => el == 5)); // !findLastIndex(): возвращает индекс последнего элемента, который соответствует условию

arr1.forEach(el => console.log(el * 2)) //!  forEach() применяет определенную функцию к каждому элементу массива

console.log(arr1.includes(5)); //! includes(): проверяет, есть ли в массиве значение

console.log(arr1.indexOf(5, 4)) //! возвращают индекс первого включения элемента в массиве.);

console.log(arr1.join('_')) //! join(): объединяет элементы массива в строку

console.log(arr1.lastIndexOf(9));//! lastIndexOf(): возвращают индекс последнего включения элемента в массиве.

let newMass = arr1.map(e => {
    return e * 5
});
console.log(newMass);

console.log(arr1.pop()); //! pop(): удаление элемента с конца массива



arr1 = [5, 10, 9, 12, 5, 8, 2, 9, 5]
arr1.push(1, 2, 3)
console.log(arr1); //! push(): добавление элемента в конец массива

console.log(arr1.reduce((acc, e) => acc += e, 0));//!reduce(): объединяет элементы массива в одно значение 

console.log(arr1.reverse());//! reverse(): располагает элементы массива в обратном порядке

console.log(arr1.shift()); //!shift(): удаляет первый элемент массива
console.log(arr1);

console.log(arr1.slice(3, 5)) //! slice(): вырезает отдельные элементы из массива

arr1.splice(2, 3, 'word')
console.log(arr1); //! splice(): добавление/удаление элементов на определенных позициях в массиве

console.log(arr1.some(e => e == 10)); //! some(): проверяет, соответствует ли хотя бы один элемент условию.

console.log(arr1.sort((a, b) => a - b)); //!sort(): сортирует массив

arr1.unshift(100, 200, 300)
console.log(arr1); //! unshift(): добавляет новый элемент в начало массива



//!!!!!!!!!!!!!!!!!!!!!!!!!!! Object.keys, values, entries !!!!!!!!!!!!!!!!!!!!!!!!!

//! Позволяют преобразовывать в массив ключи или значения взятые от объектов (с дальнешим примением методов массива)



const countryCapital = {
    Russia: 'Moscow',
    Germany: 'Berlin',
    Portugue: 'Lissabone',
}
console.log(Object.keys(countryCapital));
console.log(Object.values(countryCapital));

let capitals = Object.entries(countryCapital)
console.log(...capitals);







//!!!!!!!!!!!!!!!!!!!!!!!!!!! Деструктуризация!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


let Vasya = {
    surname3: 'Vasilek',
    age3: 20,
}
console.log(Vasya);

const { surname3, age3: years } = Vasya

console.log(surname3);
console.log(Vasya.surname3);
console.log(surname3 == Vasya.surname3);

console.log(years);






let [a3, b3, , d3] = 'abcde'

console.log(a3);
console.log(b3);
// console.log(c3);
console.log(d3);



let person1 = 'Ivan'
let person2 = 'Vasya'

console.log([person1, person2] = [person2, person1])

console.log(person1, person2);







let color = [, 'yellow', 'green', 'blue', 'black']
console.log(color);

const [color1 = 'оранжевый', color2, ...colors] = color

// console.log(color[0]);
console.log(color1, color2, colors);









//!!!!!!!!!!!!!!!!!!!!!!!! Конструктор, оператор "new" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function Aircraft(model: any, age: number) {
    this.model = model; //! динамические данные (меняются с каждой новой переменной)
    this.age = age;
    this.company = 'Boeing'; //! статические данные (они не меняются)
    this.country = 'USA';
    this.fuel = function () {
        console.log('Заправить самолет');
    };
    this.fly = () => {
        return 'данный самолёт может летать'
    };
    repared: repared;
}

let aircraft1 = new Aircraft('Boeng 777', 12)
console.log(aircraft1);

let aircraft2 = new Aircraft('Boeing 999', 5)
console.log(aircraft2);


console.log(Aircraft.prototype)
console.log(aircraft1);


aircraft1.fuel()
console.log(aircraft1)



function repared() {
    console.log('Самолет отремонтирован')
}
repared()





//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Класс: базовый синтаксис !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

class Airplane {
    coutry = 'Russia' //! статические данные (они не меняются)
    city = 'Moscow'
    constructor(model: any, year: number) {
        this.model = model //! динамические данные (меняются с каждой новой переменной)
        this.year = year
    }
    fly() { //! вызов метода
        console.log(` Самолёт ${this.model} летит,  ${this.year} лет`);
    }
    get year() {
        return `${this._year}`
    }

    set year(value: any) {
        if (value < 5) {
            this._year = 'Самолёт новый ' + value
        } else {
            this._year = 'Самолёт старый ' + value
        }
    }


}


// console.log(typeof Airplane);
// console.log(airplane1);

// console.log(Airplane.prototype.constructor == Airplane);

// console.log(airplane1.model);


let airplane1 = new Airplane('Boeng 777', 12)
airplane1.fly();

let airplane2 = new Airplane('Boeng 999', 3)
airplane2.fly();



//! Задание 1
//! Реализовать класс, описывающий простой маркер. В классе
//! должны быть следующие компоненты:
//! ■ поле, которое хранит цвет маркера;
//! ■ поле, которое хранит количество чернил в маркере (в процентах);
//! ■ метод для печати (метод принимает строку и выводит
//! текст соответствующим цветом; текст выводится до тех
//! пор, пока в маркере есть чернила; один не пробельный
//! символ – это 1% чернил в маркере).







//! div находится в файле JS_DZ_Modul_2_Week_3.html

let marker_text = document.querySelector('#marker_text') as HTMLDivElement
// let info_about_marker = document.querySelector('#info_about_marker') as HTMLDivElement //! один из способа вывода информации в HTML файл
let info_about_marker = document.getElementById('info_about_marker') as HTMLDivElement


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


document.body.addEventListener('DOMContentLoaded',()=> {

    class Marker {
        color
    ink
    constructor(color: string, ink: number) {
        this.color = color // цвет маркера
        this.ink = ink // насколько символов хватит чернил в маркере
    }

    print(text: any) {

        // marker_text.style.color = `${this.color}` //! один из способов изменения CSS свойства       

        for (let i = 0; i < text.length; i++) {
            marker_text.innerHTML += `
            <span style="color: ${this.color}; opacity: ${1 - i / text.length};">${text[i]}</span>
            `  
            //! выводим текст в html файл ( с помощью свойства innerHTML)
        }

        info_about_marker.innerHTML += `
        Цвет маркера <span style="color:${this.color}; font-size:30px">${this.color}</span> <br>
        Количество символов в чернилах: ${this.ink}     <br>
        Количество напечатанных символов: ${text.length > this.ink ? this.ink : text.length}     <br>
        <div id="battery">
            <div id="inner_battery" style="background-color:${this.color}; height: 30px; width: ${this.ink}px;"></div>
        </div> 
<br>
        `
    }
}

let marker1 = new Marker('red', 90)
marker1.print('1_2ffsd74')

let marker2 = new Marker('green', 50)
marker2.print('dst76i')

let marker3 = new Marker('blue', 15)
marker3.print('dsfgdfgfadsfadfdasfsdt76i')

let marker4 = new Marker('orange', 15)
marker4.print('dfgdfgfadsfadfdasfsdt76i')


//!!!!!!!!!!!!!!!! посмотреть плавное изменение ширины батареек ???????
// let inner_battery = document.getElementById('inner_battery')
// let accBattery = 0
// setInterval(() => {
// accBattery++
// console.log(inner_battery.style.width+= Number(100px));

// inner_battery.style.width+= 100 + 'px'
// }, 1000);
//!!!!!!!!!!!!!!!! посмотреть плавное изменение ширины батареек ???????










//! Задание 1 / JS_PZ_Modul_2_Week_4
//! Реализовать класс PrintMaсhine, которой состоит из:
//! ■ размера шрифта;
//! ■ цвета шрифта;
//! ■ семейства шрифта;
//! ■ метода print(), который принимает текст и печатает его
//! соответствующим шрифтом с помощью document.write().
//! Создать объект такого класса и продемонстрировать работу
//! метода.

let printMaсhine = document.getElementById('printMaсhine') as HTMLDivElement

class PrintMaсhine {
    tag
    color
    fontFamily
    constructor(tag: any, color: string, fontFamily: string) {
        this.tag = tag
        this.color = color
        this.fontFamily = fontFamily
    }
    printText(text: any) {
        printMaсhine.innerHTML += `<${this.tag} style="color:${this.color}; 
        font-family: ${this.fontFamily};">${text}</${this.tag}>`


    }
}

let pencil1 = new PrintMaсhine('h6', 'yellow', 'monospace')
pencil1.printText('Как')

let pencil2 = new PrintMaсhine('h2', 'red', '')
pencil2.printText('Какой-нибудь текст')

let pencil3 = new PrintMaсhine('p', 'green', '')
pencil3.printText('Какой-нибудь текст')













//!!!!!!!!!!!!!!!!!!!!!!!!!! Прототипное наследование !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let transport = {
    age: 5,
    color: 'white',
    drive() {
        return 'можем управлять'
    }
}

console.log(transport);





let bus = {
    number: 105,
}

bus.__proto__ = transport //! первый способ присвоения прототипа
console.log(bus);




let car = {
    doors: 4,
    age: 10,
    __proto__: transport, //! второй способ присвоения прототипа
}










console.log('количество лет = ' + car.age);
console.log('количество дверей в машине = ' + car.doors);

console.log(car); //! собстсвенные свойства
console.log(car.__proto__);//! унаследованные свойства 

console.log(car.drive())
console.log(car.__proto__.drive())
console.log(car.__proto__.drive() == car.drive())



console.log(Object.keys(car)); //! данный метод показывает ТОЛЬКО собственные ключи объекта

for (const key in car) { //! Цикл for..in проходит не только по собственным, но и по унаследованным свойствам объекта.
    console.log(key);

}



console.log(car.__proto__ == transport);


// https://learn.javascript.ru/prototype-inheritance
// https://learn.javascript.ru/function-prototype



console.log(Object.prototype);
console.log(Array.prototype);
console.log(Number.prototype);
console.log(String.prototype);
// console.log(Function.prototype);
console.log(Date.prototype);



let person = {
    name: 'Petya'
}

console.log(person.__proto__ == Object.prototype);


let mass = [1, 2, 3]
console.log(mass.toString());
console.log(mass.length);




let numb = 5
Number.prototype.show = () => {
    return 'мы создали новый метод';
}



console.log(numb.show());


let alphabet = 'abcde'
console.log(alphabet);





// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Наследование классов!!!!!!!!!!!!!!!!!!!!!!!!1


class City {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    welcome() {
        return 'Добро пожаловать в ' + this.name;
    }

}

let city = new City('Sochi', 300)
console.log(city.welcome());
console.log(city);




class Country extends City {
    countryName

    constructor(name: string, age: number, countryName: string) {
        super(name, age)
        this.countryName = countryName
    }
    welcome() { //! методы можем перезаписывать
        return 'Приветствуем вас в ' + this.name;
    }
    population(people: number) {
        return `${super.welcome()} население города ${this.name} = ${people} `//! мы можем возвращать родительские методы
        //! super  работает ТОЛЬКО внутри нашего конструктора
    }
}


let country = new Country('Moscow', 1000, 'Russia')
console.log(country.population(10_000_000));
console.log(country.population(50_000));

console.log(country.welcome());


let pressButton = document.getElementById('pressButton') as HTMLInputElement
pressButton.addEventListener('input', () => {
    console.log(pressButton.value);

})



//! Задание 1
//! Реализовать класс Button, который содержит ширину, высоту,
//! текст кнопки и метод showBtn(), который выводит кнопку на экран
//! с помощью тега button и функции document.write().

class Button {
    width
    height
    background
    constructor(width: number, height: number, background: string) {
        this.width = width
        this.height = height
        this.background = background
    }
    showBtn(value: string) {
        printMaсhine.innerHTML += `<button style="width:${this.width}px; height:${this.height}px ; background:${this.background};">${value}</button>`
    }
}

let button1 = new Button(150, 30, 'red')
button1.showBtn('Добавить')

let button2 = new Button(100, 40, 'black')
button2.showBtn('Удалить')

let button3 = new Button(120, 40, 'orange')
button3.showBtn('Переместить')


//! Реализовать класс BootstrapButton, унаследовав его от класса
//! Button. Добавить поле color и переопределить метод showBtn()

class BootstrapButton extends Button {
    color
    constructor(width: number, height: number, background: string, color: string) {
        super(width, height, background)
        this.color = color
    }
    showBtn(value: string) {
        printMaсhine.innerHTML += `<button style="width:${this.width}px; height:${this.height}px ; background:${this.background}; color:${this.color}">${value}</button>`
    }
}

let bootstrapButton = new BootstrapButton(200, 50, 'gray', 'orange')
bootstrapButton.showBtn('Кнопка Бутстрапа')






//! Задание 3
//! Реализовать класс, который описывает css класс.
//! Класс CssClass должен содержать внутри себя:
//! ■ название css класса;
//! ■ массив стилей;
//! ■ метод для установки стиля;
//! ■ метод для удаления стиля;
//! ■ метод getCss(), который возвращает css код в виде строки.

let newString = ''
let newString2 = ''

class CssClass {
    className
    cssArray
    constructor(className: string, cssArray: any[]) { //! ■ название css класса, ■ массив стилей;
        this.className = className
        this.cssArray = cssArray
    }

    setStyle() { //! ■ метод для установки стиля;
        for (const el of this.cssArray) { //! массив перебираем по элементам
            for (const key in el) { //! ключи и значения элементов записываем в строку
                newString += key + ':' + el[key] + '; ' //! для применения стиля
                newString2 += key + ':' + el[key] + '; ' + '<br>' //! для вывода текста в html файл
            }
        }
        printMaсhine.innerHTML += `<div class="${this.className}" 
            style="${newString}"> текст </div>`    //
    }
    deleteStyle(num: number) { //! ■ метод для удаления стиля;
        delete this.cssArray[num]
    }
    getCss() { //! ■ метод getCss(), который возвращает css код в виде строки.
        console.log(newString);
        printMaсhine.innerHTML += 'Примененные стили: ' + '<br>' + newString2 + '<br>'
        // printMaсhine.innerHTML = '' //! перезаписывание всего дива
    }

}



let class1 = new CssClass('newStyle', [
    { background: 'lightgreen' },
    { 'font-size': '30px' },
    { width: '100px' },
    { height: '50px' },
    { margin: '25px' },
    { padding: '25px' },
    { border: '2px solid white' },
])
class1.deleteStyle(0)  //! метод удаления должен идти первым
class1.deleteStyle(1)
class1.setStyle()
class1.getCss()
console.log(CssClass.prototype);





console.log(data1.getMilliseconds());

let data2 = new Date() //! текущее время

console.log(`Документ отрендерился за ${data2.getMilliseconds() - data1.getMilliseconds()} миллисекунду`);


console.log(data2.toLocaleString());
console.log(data2.toLocaleTimeString());


console.log(Date.prototype);
console.log(Object.prototype);
console.log(Array.prototype);
console.log(Number.prototype);
console.log(String.prototype);

let today2 = new Date()
console.log(today2.getTime()); //! timestamp (дата показывается в миллисекундах)

console.log(today2.getMonth())
    ;
console.log(today2.getDay());





console.log(data2.getHours());
console.log(data2.getMinutes());
console.log(data2.getSeconds());
console.log(data2.getMilliseconds());


console.log(data2.getDate());
console.log(data2.getHours());
console.log(data2.getHours() - data2.getUTCHours());

let dateOfBirth = new Date('1945, 5, 9') //! мы можем указывать конкретную дату
console.log(dateOfBirth);

let dateOfBirth2 = new Date(1945, 5, 30) //! мы можем указывать конкретную дату
console.log(dateOfBirth2);

let newYearDay = new Date('2026')
console.log(today2.getTime());
console.log(newYearDay.getTime());

console.log(`До нового года осталось: ${Math.floor((Number(newYearDay) - Number(today2)) / (24 * 60 * 60 * 1000))} дней`);

console.log(+today2 == today2.getTime()); //! оба способа перевода даты в timestamp (переводим дату в число)

console.log(Date.now() == new Date().getTime());


console.log(new Date().getTime());


let ms = Date.parse('2012-01-26T13:51:50.417-07:00')
console.log(ms);

console.log(`Загрузка началась ${performance.now()}мс назад`);



// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

console.log(new Date('2024, 5, 5'))

console.log(new Date(2012, 1, 20, 3, 12));




function getWeekDay(dateOfTask: any) {
    let dayOfWeeks = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    console.log(dayOfWeeks[dateOfTask.getDay()])
}
getWeekDay(new Date(2012, 0, 3))
getWeekDay(new Date())











//! Задание 2
//! Реализуйте класс ExtendedDate, унаследовав его от стандартного класса Date и 
//! добавив следующие возможности:
//! ■ метод для вывода даты (числа и месяца) текстом;
//! ■ метод для проверки – это прошедшая дата или будущая
//! (если прошедшая, то метод возвращает false; если будущая или текущая, то true);
//! ■ метод для проверки – високосный год или нет;
//! ■ метод, возвращающий следующую дату.
//! Создайте объект класса ExtendedDate и выведите на экран
//! результаты работы новых методов.

let today = new Date()

class ExtendedDate {
    year
    month
    day
    constructor(year: number, month: number, day: number) {
        this.year = year
        this.month = month
        this.day = day
    }

    //! ■ метод для вывода даты (числа и месяца) текстом;
    printDate() {
        let days = ['первое', 'второе', 'третье', 'четвертое', 'пятое', 'шестое', 'седьмое', 'восьмое', 'девятое', 'десятое',
            'одиннадцатое', 'двеннадцатое', 'триннадцатое', 'четырнадцатое', 'пятнадцатое', 'шестнадцатое', 'семьнадцатое',
            'восемьнадцатое', 'девятнадцатое', 'двадцатое'
        ]

        let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

        if (this.day >= 1 && this.day <= 20) {
            console.log(days[this.day - 1], months[this.month - 1]);
        } else if (this.day < 30) {
            console.log('двадцать ' + days[this.day - 21], months[this.month - 1])
        } else if (this.day == 30) {
            console.log('тридцатое ' + months[this.month - 1])
        } else if (this.day == 31) {
            console.log('тридцать первое ' + months[this.month - 1])
        } else {
            console.log(`число ${this.day} вне диапазона`);
        }

    }


    //! ■ метод для проверки – это прошедшая дата или будущая
    //! (если прошедшая, то метод возвращает false; если будущая или текущая, то true);
    checkDate() {

        let dateStr = `${this.year}${this.month < 10 ? 0 + '' + this.month : this.month}${this.day < 10 ? 0 + '' + this.day : this.day}`
        let todayStr = `${today.getFullYear()}0${today.getMonth() + 1}${today.getDate() < 10 ? 0 + '' + today.getDate() : today.getDate()}`

        console.log(todayStr >= dateStr ? 'Дата прошедшая' : 'Дата будущая')
    }


    //! ■ метод для проверки – високосный год или нет;

    checkLeapYear() {
        this.year % 4 == 0 ? console.log('Год високосный') : console.log('Год не високосный')
    }

    //! ■ метод, возвращающий следующую дату.

    showNextDate() {

        let year = this.year
        let mounth = this.month
        let day = this.day

        if (day >= 32) return 'Введите корректный день'
        if (day == 31 && (mounth == 4 || mounth == 6 || mounth == 9 || mounth == 11)) return 'Введите корректный день'
        if (day >= 30 && mounth == 2 || day == 29 && mounth == 2 && year % 4 != 0) return 'Введите корректный день'
        if (mounth >= 13) return 'Введите корректный месяц'
        if (day <= 0 || mounth <= 0 || year <= 0) return 'введите положительное число'

        if (day == 31 && mounth == 12) {
            year += 1, mounth = 1, day = 1
        } else if (day == 30 && (mounth == 4 || mounth == 6 || mounth == 9 || mounth == 11)) {
            day = 1
            mounth += 1
        } else if (day == 31 && (mounth == 3 || mounth == 5 || mounth == 7 || mounth == 8 || mounth == 10 || mounth == 12)) {
            day = 1
            mounth += 1
        } else if (day == 28 && mounth == 2 && year % 4 != 0 || day == 29 && mounth == 2 && year % 4 == 0) {
            day = 1
            mounth += 1
        } else {
            day += 1
        }

        console.log(`«${year}.${mounth}.${day}»`)
    }

}

let day1 = new ExtendedDate(2003, 3, 3)
day1.printDate()
day1.checkDate()
day1.checkLeapYear()
day1.showNextDate()









//!!!!!!!!!!!!!!!!!!!!!! setTimeout и setInterval !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// setTimeout(()=>{ 
//         function city5() { //! первый вариант (такой себе)
//         console.log('test');
//     }
//     city5()
// },  3000);

// setTimeout(()=>{ //! второй вариант
//     console.log('test2');
// },3000);


// function hello () {
//     console.log('привет');
// }





// setTimeout(() => { //! первый способ вывода функции
//     hello()
// }, 5000);

// setTimeout(hello, 2000); //! второй способ вывода функции

// setTimeout("console.log('Привет 2')", 1000);

// setInterval(hello, 2000);

// setInterval("console.log('Привет 2')", 1000);

//! setTimeout и setInterval имеют одинаковый синтаксис

//! setTimeout - выполняется один раз
//! setInterval - выполняется через определенный промежуток времени

//! clearInterval - отменяет действие через указанное время





// let ac = 0
// let stopInter = setInterval(()=> {
//     ac++
//     console.log(ac); 
// },200)

// setTimeout(() => { clearInterval(1000); stopInter}, 10000);




// повторить с интервалом 2 секунды
// let timerId = setInterval(() => console.log('tick'), 2000);

// остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);


// alert ('12344')

// setTimeout(() => {
//     alert ('432534635612344')

// }, 3000);



// setTimeout(() => {
//                 console.log('123');                
//     }, 0);

// console.log('555');





//! Задание 2 // JS_PZ_Modul_2_Week_4

//! Реализовать класс, описывающий новость (заголовок, текст,
//! массив тегов, дата публикации). В классе необходимо реализовать
//! один метод print, который выводит всю информацию в таком
//! виде, как на рисунке 1.
//! Обратите внимание на то, как выводится дата:
//! ■ если с даты публикации прошло менее дня, то выводится
//! «сегодня»;
//! ■ если с даты публикации прошло менее недели, то выводится «N дней назад»;
//! ■ в остальных случаях, полная дата в формате «дд.мм.гггг»

today = new Date()
console.log(today.toLocaleDateString());

let newsInHtml = document.getElementById('news') as HTMLDivElement

class News {
    header
    tag
    date
    constructor(header: any, tag:string[]=[], date: any) {
        this.header = header
        this.tag = tag
        this.date = date
    }
print(nameHeader:any, text:any) {


let day = today.toLocaleDateString() //! метод выводящий ТОЛЬКО дату (без времени)

let todayString = day.split('.').reverse().join('') as any //! переводим сегодняшнюю дату в строку
// console.log(todayString);

let userDay = this.date.split(', ').join('') //! переводим в строку дату, которую написал пользователь
// console.log(userDay)
let newsDate = '' //! дата публикации новости

if (todayString-userDay==0) {
newsDate = '«Сегодня»' 
} else if (todayString-userDay<=7) {
    newsDate = `«${todayString-userDay} ${todayString-userDay<=4 ? 'дня' : 'дней'}  назад»` 
} else if (todayString-userDay>7) {
    newsDate = '«' + this.date.split(', ').reverse('').join('.') + '»'
}
console.log(this.tag);
        


 //! выводим в HTML файл

 newsInHtml.innerHTML += `
 <${this.header}>${nameHeader}</${this.header}>
     <p>${newsDate}</p>
     `

 for (let i = 0; i < this.tag.length; i++) {
 newsInHtml.innerHTML += `<${this.tag[i]}>${text}</${this.tag[i]}>`        
}

}

}

let new1 = new News('h2', ['p', 'div', 'p', 'p'], '2025, 05, 12')
new1.print('Новость первая', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.')


let new2 = new News('h2', ['p', 'div'], '2025, 05, 10')
new2.print('Новость вторая', 'Velit excepturi aperiam corrupti voluptatum at hic?')


let new3 = new News('h4', ['p', 'p'], '2025, 03, 09')
new3.print('Новость третья', 'Velit dicta doloribus in corrupti saepe ex fugit tempore quibusdam voluptas quis, debitis, optio commodi.')


console.log(window.innerWidth);
console.log(window.innerHeight);

// document.body.style.background = "red";
console.log(document.head);
console.log(document);
console.log(window.history);
console.log(window.navigator);
console.log(window.location);

console.log(document.body.children)
console.log(document.body.parentElement)
console.log(document.body.hasChildNodes())




let menu = document.getElementById('menu') as HTMLDivElement
console.log(menu.parentElement);
console.log(menu.children);
// console.log(menu.childNodes);

console.log(menu.firstChild);
console.log(menu.childNodes[0]);
console.log(menu.childNodes[0] ==  menu.firstChild);
console.log(menu.childElementCount); // показывает количество детей
console.log(menu.firstElementChild); // показывает первого ребенка в элементе
console.log(menu.lastElementChild); // показывает последнего ребенка в элементе

console.log('------------');

// console.log(menu.childNodes[3]);
console.log(menu.previousElementSibling); //! смотрим предыдущий соседний элемент 
console.log(menu.nextElementSibling); //! смотрим следующий соседний элемент
console.log(menu.nextSibling?.nextSibling); //! смотрим следующий соседний элемент

console.log(menu.childElementCount);


console.log(menu.children[0].innerHTML);
console.log(menu.children[0].innerText);
console.log(menu.children[0].previousSibling);
console.log(menu.children[0].previousElementSibling);


//! Home Work
// let table = document.getElementById('table') as HTMLTableElement
// console.log(table.children[0]);
// let rows = table.rows
// for (let i = 0; i < rows.length; i++) {
    // console.log(i);
    // let td = rows[i].cells[i]
    // td.style.backgroundColor = 'red'
// }



//!!!!!!!!!!!!!!!! Поиск: getElement*, querySelector* !!!!!!!!!!!!!!!!!!!!!

let digitals =document.getElementById('digitals') as any
console.log(digitals);

//! querySelector - показывает первый элемент  соответствующий запросу 
let numm =document.querySelector('.num') as HTMLDivElement 
console.log(numm);

//! querySelectorAll - показывает ВСЕ элементы  соответствующие запросу 
let numm2 =document.querySelectorAll('.num')
console.log(numm2) 

console.log(numm==numm2[0]) 

// digitals.hidden = true as any

//! Поиск по классу
let getEl = document.getElementsByClassName('num')
console.log(getEl);

//! Поиск по тегу
let getEl2 = document.getElementsByTagName('br')
console.log(getEl2.length);

let getEl3 = document.getElementsByName('div')
console.log(getEl3);


console.log(numm.closest('button'));

console.log(digitals.contains(numm));
console.log(digitals.id);

// console.error(digitals)
console.info(digitals)
console.dir(digitals);
console.log(numm.tagName);
console.log(numm.nodeName);


let text = document.querySelector('#text') as HTMLDivElement
text.innerHTML = 'qwerty'

console.log(text.innerHTML);
console.log(text.innerText);
console.log(text.textContent);

console.log(text.outerHTML);



// document.body.innerHTML = ''


// setInterval(() => document.body.hidden = !document.body.hidden, 1000);


let dat = new Date()
console.log(dat.getTime());

//! Задание 3
//! Реализовать класс Employee, описывающий работника, и создать массив работников банка.
//! Реализовать класс EmpTable для генерации html кода таблицы
//! со списком работников банка. Массив работников необходимо
//! передавать через конструктор, а получать html код с помощью
//! метода getHtml().
//! Создать объект класса EmpTable и вывести на экран результат
//! работы метода getHtml().

//! Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// let workers =document.getElementById('workers')
let workers =document.getElementById('workers') as HTMLDivElement
class Employee  {
    name
    age
    city
    position
    constructor(name:string, age:number, city:string, position:string) {
        this.name = name
        this.age = age
        this.city = city
        this.position = position
    }
    pushInmassive() {
        console.log(this);
        workers.innerHTML+=`<div>${JSON.stringify(this)}</div>`
    }
    
}

let worker1 = new Employee('Pasha', 25, 'Sochi', 'middle')
console.log(worker1);

worker1.pushInmassive()

let worker2 = new Employee('Sasha', 23, 'Moscow', 'Junior')
worker2.pushInmassive()



//! Реализовать класс EmpTable для генерации html кода таблицы
//! со списком работников банка. Массив работников необходимо
//! передавать через конструктор, а получать html код с помощью
//! метода getHtml().

let table_with_workers = document.querySelector('#table_with_workers') as HTMLTableElement


class EmpTable extends Employee {
    constructor (name:string, age:number, city:string, position:string) {
        super (name, age, city, position)    
    }
    getHtml() {
        // accWorker+=1
        // <td>${accWorker}</td>
        table_with_workers.innerHTML+=`<tr>
        <td>${this.name}</td>
        <td>${this.age}</td>
        <td>${this.city}</td>
        <td>${this.position}</td>
        </tr>`
    }
    
}

let worker3 = new EmpTable('Petya', 25, 'Novosibirsk', 'Senior')
worker3.getHtml()

let worker4 = new EmpTable('Pasha', 25, 'Sochi', 'Middle')
worker4.getHtml()

let worker5 = new EmpTable('Sasha', 23, 'Krasnodar', 'Junior')
worker5.getHtml()

let worker6 = new EmpTable('Ruslan', 27, 'Moscow', 'Junior')
worker6.getHtml()
let worker7 = new EmpTable('Sasha', 36, 'Moscow', 'Middle')
worker7.getHtml()
let worker8 = new EmpTable('Viktor', 29, 'Sochi', 'Junior')
worker8.getHtml()
let worker9 = new EmpTable('Slava', 34, 'Sochi', 'Senior')
worker9.getHtml()
let worker10 = new EmpTable('Dima', 21, 'Krasnodar', 'Junior')
worker10.getHtml()



let add_worker = document.querySelector('#add_worker') as HTMLButtonElement // кнопка добавления работника
let delete_inputs = document.querySelector('#clean_inputs') as HTMLButtonElement // кнопка добавления работника
let delete_worker = document.querySelector('#delete_worker') as HTMLButtonElement // кнопка удаления работника
let new_worker_form = document.querySelector('#new_worker_form') as HTMLFormElement // окошки, с вводимой информацией
let number_delete_worker = document.querySelector('#number_delete_worker') as HTMLInputElement // окошки, с вводимой информацией

let accWorker = table_with_workers.rows.length-1 // количество работников
let accWorkerInHTML = document.querySelector('#accWorkerInHTML') as HTMLDivElement // вывод количества работников
accWorkerInHTML.innerHTML=`Количество работников: ${accWorker}`

let child = new_worker_form.children
add_worker.addEventListener('click', ()=> {
    if (child[0].value=='') {
        child[0].style.border = '2px solid red'
        child[0].style.background = 'pink'
    } else {

        accWorker+=1
        // <td>${accWorker}</td>
        table_with_workers.innerHTML+=`<tr>
        <td>${child[0].value}</td>
        <td>${child[1].value}</td>
        <td>${child[2].value}</td>
        <td>${child[3].value}</td>
        </tr>`
        accWorkerInHTML.innerHTML=`Количество работников: ${accWorker}`
         child[0].style.border = ''
         child[0].style.background = ''
    }
})

delete_worker.addEventListener('click', ()=> {
    if (number_delete_worker.value>=1) {
        table_with_workers.deleteRow(number_delete_worker.value)
        accWorker-=1
        accWorkerInHTML.innerHTML=`Количество работников: ${accWorker}`
    }
})

delete_inputs.addEventListener('click', ()=> { // очищаем инпуты
    child[0].value = ''
    child[1].value = ''
    child[2].value = ''
    child[3].value = ''
})


console.log(table_with_workers.rows.length);




document.body.test = {
    a : '1232134'
} 

console.log(document.body.test.a);

console.log(table_with_workers.hasAttribute('id')); // проверяет наличие атрибута.
console.log(typeof table_with_workers.getAttribute('id')); // получает значение атрибута.
console.log(table_with_workers.setAttribute('class', 'newClass'));

// table_with_workers.removeAttribute('id'); // удаляет атрибут


console.log(workers.innerHTML);
console.log(workers.innerText);
// console.log(workers.outerHTML);




console.log(add_worker.innerHTML);
console.log(add_worker.innerText);
console.log(add_worker.outerHTML);


// console.log(add_worker.attributes);



let testMass = ['gd', 'fgh', 'iku', 'ws', 'xcv']
testMass.splice(0,1)
console.log(testMass);


// console.log((Object(table_with_workers)).reverse());
// console.log(table_with_workers.splice(0,1));



// console.log(table_with_workers.deleteRow(1));
// console.log();

// let checkTable=document.getElementsByTagName('tr')
// console.log(checkTable);




//! Задание 1
//! Реализуйте класс ExtentedArray, унаследовав его от стандартного класса 
//! Array и добавив следующие методы:
//! ■ метод getString(separator) – для получения строки со
//! всеми элементами массива, перечисленными через указанный разделитель: 
//! запятая, тире, пробел и т. д.;
//! ■ метод getHtml(tagName) – для получения строки с html
//! кодом, где каждый элемент массива будет обернут в указанный тег 
//! (учтите, если указывается тег li, то все элементы дополнительно необходимо 
//! обернуть в ul).
//! Создайте объект класса ExtentedArray, заполните его данными и выведите на экран результаты работы методов getString()
//! и getHtml().

let show_string_info = document.querySelector('#show_string_info') as HTMLDivElement


class ExtentedArray {
    text
    separator
    teg
    constructor(text:string, separator:string, teg:string) {
        this.text = text
        this.separator = separator
        this.teg = teg
    }
    getString() {
        let str = this.text
        show_string_info.innerHTML+= str.split(`${this.separator}`).join('|') + ', разделитель: ' + '"' + this.separator + '"' + '<br>' 
    }
    getHtml() {
        let str = this.text.split(`${this.separator}`)
        for (let i = 0; i < str.length; i++) {
            if (this.teg == 'li') {
                show_string_info.innerHTML+=`<ul><${this.teg}>${str[i]}</${this.teg}></ul>`
            } else {
                show_string_info.innerHTML+=`<${this.teg}>${str[i]}</${this.teg}>` 
            }
        }
    }

}

let string1 = new ExtentedArray('учтите, если тег li, то все элементы', ',', 'p')
string1.getString()
string1.getHtml()

// let string3 = new ExtentedArray('учтите, если тег li, то все элементы', ' ', 'li')
// string3.getString()
// string3.getHtml()


// document.body.style.fontSize = '2em'



let divPrepend = document.createElement('div') // prepend - идет в начало элемента
divPrepend.innerHTML = ' Prepend'
console.log(divPrepend);

show_string_info.prepend(divPrepend)

let divAppend = document.createElement('div') // prepend - идет в конец элемента
divAppend.innerHTML = ' Append'
show_string_info.append(divAppend)

let divBefore = document.createElement('div')
divBefore.innerHTML = ' Before'
show_string_info.before(divBefore)

let divAfter = document.createElement('button')
divAfter.innerHTML = '<b>After </b>'
show_string_info.after(divAfter)

divAfter.style.marginTop = '10px'

let cloneDiv = show_string_info.cloneNode(true) //! копирует элемент с его детьми
console.log(cloneDiv)

let cloneDiv2 = show_string_info.cloneNode() //! копирует элемент без детей
cloneDiv2.textContent = 'textContent'
cloneDiv2.crea = 'textContent'


console.log(cloneDiv2)


let day = new Date()
console.log(day.getDay());

let add = document.querySelector('#add') as HTMLButtonElement
let remove = document.querySelector('#remove') as HTMLButtonElement
let toggle = document.querySelector('#toggle')  as HTMLButtonElement

add.addEventListener ('click', ()=> {
    document.body.classList.add('background') //! add - добавляет класс
})

remove.addEventListener ('click', ()=> {
    document.body.classList.remove('background') //! remove - удаляет класс
})

toggle.addEventListener ('click', ()=> {
    document.body.classList.toggle('background')  //! toggle - добавляет/удаляет класс
    console.log(document.body.className);
    console.log(document.body.classList.contains('background'));
    // console.log(document.body.getElementsByClassName('background'));
})

 
// .classList.contains('название класса ') - проверяет наличие класса (true/false)

document.body.style.marginTop = '50vh' // первый способ записи
document.body.style.marginTop = 50 + 'vh' // второй способ записи
document.body.style.color = 'green'
document.body.style.color = ''


let showParametrs = document.querySelector('#showParametrs') as HTMLDivElement
console.log(showParametrs);
console.log(getComputedStyle(showParametrs).height);
console.log(showParametrs.style.height);

console.log(showParametrs.clientHeight); //! содержат «внешнюю» высоту элемента БЕЗ border
console.log(showParametrs.offsetHeight); //! содержат «внешнюю» высоту элемента вместе с border
console.log(showParametrs.scrollHeight);
console.log(showParametrs.clientTop); //! толщина border
// console.log(showParametrs.scrollTop); //! толщина border
console.log(); //! толщина border
// showParametrs.scrollTop ='100px'

console.log(getComputedStyle(showParametrs).background);

console.log('__________________');

// console.log(showParametrs.clientLeft);

console.log(getComputedStyle(showParametrs).width);



console.log(showParametrs.scrollWidth);
console.log(showParametrs.offsetWidth);
console.log(showParametrs.offsetWidth - showParametrs.clientWidth);


console.log('__________________');

// console.log(document.body.scrollHeight);
// console.log(document.body.offsetHeight);




// console.log(document.body.clientHeight);
// console.log(document.body.clientWidth);
// console.log(window.innerHeight);
// console.log(window.innerWidth);

// let scrollHeight = Math.max(
//     document.body.scrollHeight, document.documentElement.scrollHeight,
//     document.body.offsetHeight, document.documentElement.offsetHeight,
//     document.body.clientHeight, document.documentElement.clientHeight
//   );




//   console.log(document.documentElement.scrollHeight);
//   console.log(document.documentElement.offsetHeight);
//   console.log(document.documentElement.clientHeight);
//   window.scrollBy(0,200)







let field = document.querySelector('.field') as HTMLDivElement
let ball = document.getElementById('ball') as HTMLDivElement
let ball_shadow = document.getElementById('ball_shadow') as HTMLDivElement
let ball_image = document.getElementById('ball_image') as HTMLDivElement







let widthOfField = getComputedStyle(field).width // ширина поля
let heightOfField = getComputedStyle(field).height // высота поля
let widthOfBall = (getComputedStyle(ball).width)// ширина мяча
let heightOfBall = (getComputedStyle(ball).height)// высота мяча
console.log(parseInt(widthOfBall));


ball.style.marginLeft = ((parseInt(widthOfField) - parseInt(widthOfBall))/2) +'px'
ball.style.marginTop = ((parseInt(heightOfField) - parseInt(heightOfBall))/2) +'px'

let degree = 0

field.addEventListener('click', (e)=> {
    degree+=90
    ball.style.marginLeft = e.pageX - field.offsetLeft -parseInt(widthOfBall)/2+ 'px'
    ball.style.marginTop = e.pageY - field.offsetTop -parseInt(heightOfBall)/2 + 'px'
    ball_image.style.rotate = degree + 'deg'
    console.log(degree);
    
    // console.log(e.pageY); //! отслеживаем нажатие мышкой по оси У
    // console.log(field.offsetTop); //! расстояние от начала страницы до футбольного поля

    console.log(e.target);
    console.log(e.currentTarget);
    

})

console.log(getComputedStyle(field).top);


console.log(parseInt(getComputedStyle(ball).height));
console.log(field.offsetLeft);


// console.log(getComputedStyle(field).height);



console.log(field.offsetTop); // от самого верха документа до начала тэга

let height_of_field = field.clientHeight + field.clientTop*2 
console.log(height_of_field);


let body_height = parseInt(getComputedStyle(document.body).height)
console.log(body_height);

console.log(body_height - field.offsetTop - height_of_field);




let body_width = getComputedStyle(document.body).width

// console.log(window.innerWidth);

console.log(document.body.clientWidth);
console.log(getComputedStyle(document.body).width);

console.log(document.body.scrollWidth);




document.body.addEventListener('click', (e)=> {
    // console.log(e.target);
    // console.log(e.currentTarget);
    // console.log(e.eventPhase);
    
})










let moveToUp = document.querySelector('#moveToUp') as HTMLButtonElement
moveToUp.addEventListener('click', ()=> {
    ball.scrollIntoView({
   
        behavior: "smooth",
        block:'center'
      });
    
})


let show_coordinates = document.querySelector('#show_coordinates') as HTMLDivElement


document.body.addEventListener('mousemove',(e)=> {
    show_coordinates.innerHTML= `
координаты по документу:
<br>

по оси х = ${e.pageX} px
по оси Y = ${e.pageY} px
<br>
<br>

координаты по окну:
<br>

    по оси х = ${e.clientX} px
    по оси Y = ${e.clientY} px
    `
})


function testEvent (e:any) {
    console.log(e.currentTarget);
    
}

field.addEventListener('click', testEvent)
// field.removeEventListener('click', testEvent)
// document.body.removeEventListener('click', testEvent)

// setInterval(() => {
//     let acc1 = Math.random()*255
//     let acc2 = Math.random()*255
//     let acc3 = Math.random()*255
//     document.body.style.background = `rgb(${acc1}, ${acc2}, ${acc3})`
// }, 1000);



table_with_workers.addEventListener('click', (e)=> {
    console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);
    
})




}) //!!!!!!!!!!!!!DOMContentLoaded  окончание
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// inputs
let check_symbols = document.querySelector('#check_symbols') as HTMLInputElement
check_symbols.addEventListener('keydown', (e:any)=> {
    if (e.key>=0 && e.key<=9) {
        e.preventDefault()
    }
})


let open_window = document.querySelector('#open_window') as HTMLButtonElement
let overlay = document.querySelector('#overlay') as HTMLDivElement
let close_window = document.querySelector('#overlay button') as HTMLButtonElement


// модальное окно
open_window.addEventListener('click', ()=> {
    overlay.style.display = 'block'
})

close_window.addEventListener('click', ()=> {
    overlay.style.display = 'none'
})


// светофор

let light = document.querySelectorAll('.traffic_light div') as any
let next_light = document.querySelector('#next_light') as HTMLButtonElement


let light_acc = 0
next_light.addEventListener('click',()=> {
    light_acc+=1
    if (light_acc==1) {
        light[0].style.background = 'red'
        light[2].style.background = ''
    }
    if (light_acc==2) {
        light[1].style.background = 'yellow'
        light[0].style.background = ''
    }
    if (light_acc==3) {
        light[2].style.background = 'green'
        light[1].style.background = ''
        light_acc=0
    }  
})



// выделение строки при нажантии
let container_string = document.querySelector('#container_string') as any

container_string.addEventListener('click', (e:any)=>{
    
    for (let i = 0; i < container_string.childElementCount; i++) {
        if (container_string.children[i]==e.target) {
            container_string.children[i].style.background = 'orange'
        } else {
            container_string.children[i].style.background = ''
        }
    }
})
    

// Задание с подсказами

let btn_1 = document.querySelector('#btn_1') as HTMLButtonElement
let title_btn1 = document.querySelector('#title_btn1') as HTMLDivElement
let title_btn1_inner = document.querySelector('#title_btn1_inner') as HTMLDivElement

btn_1.addEventListener('mousemove',(e:any)=> {
    title_btn1.style.display = 'block'
    if (e.clientY<80) {
        title_btn1.style.marginTop = '20px'
        title_btn1_inner.style.marginTop = '-40px'
    } else {
        title_btn1.style.marginTop = ''
        title_btn1_inner.style.marginTop = ''
    }
    console.log(e.clientY);
})


btn_1.addEventListener('mouseleave', ()=> {
    title_btn1.style.display = 'none'
})



console.log(btn_1.clientTop);
console.log(btn_1.scrollTop);
console.log(btn_1.offsetTop);
console.log(btn_1.offsetHeight);
console.log(window.scrollY);
console.log(window.top);














