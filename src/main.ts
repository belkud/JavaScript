import './style.css'




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
    
    if (i==3) {
        break    //! прерывание цикла
    }
    console.log(i);  
}
console.log('================');





for (let i = 0; i < 10; i++) { 
    if (i%2==0) {
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
console.log('До полуночи остало: ' + (23-hours) + ' часа и ' + (60-minutes) + ' Минут' )


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
let doubleMoney = money*2  // количество денег
let deposit = 0.2 // процентная ставка
let year =0  // количество лет для удвоения

for (let i = 0; i < 10; i++) {    
    money+=money*deposit //  1000 + 1000*20% - цикл выполнился 1 раз
                         //  1200 + 1200*20% - цикл выполнился 2 раз
                         //  1440 + 1680*20% - цикл выполнился 3 раз        
    year++         
   if (money>=doubleMoney) break
}

console.log(year>4 ?
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


function getSumm (a:number, b=10) { // можем задавать параметр по умолчанию
    return a+b
}
console.log(getSumm(13,3));

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
     console.log (name)
}
userName2()




function enterName (name:string) {
    if(typeof name!=='string'){  // проверка на тип данных (если случайно ввели в имя числа)
        return 'У вас введены числа'
    } 
    if (name=='') {
        return 'Введите ваше имя'
    }
    return name
}
console.log(enterName(''));



function checkAge(age:number) {

return age>=18 ? 'вы взрослый' : 'вы ребенок'

}
console.log(checkAge(5));






console.log((Math.random()*100).toFixed());   // 1-ый способ округления целого числа 
console.log((Math.round(Math.random()*100))); // 2-ой способ округления целого числа
console.log((Math.trunc(Math.random()*100))); // 3-й способ округления целого числа





console.clear()


console.log(Math.round(5.4)) // округление до ближайшего числа

console.log(Math.floor(9.9)) // округление вниз до ближайшего числа

console.log(Math.ceil(5.2)) // округление вверх до ближайшего числа

console.log(Math.trunc(5.4)); // отбрасывает дробную часть

console.log('----------');


console.log(10%4);









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

function greetUser (name:string) {
    let data = new Date
    let hours = data.getHours()

if (hours>=6 && hours<12) {
    return `Доброе утро ${name}`
}
if (hours<18) {
    return `Добрый день ${name}`
}
if (hours<22) {
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
    

function checkUserAge (i:number) {
    if(i<=17){
        console.log('Вы ребенок') ;
    } else if(i<=30) {
        console.log('Вы молодой') ;
    } else if(i<=55) {
        console.log('Вы зрелый') ;
    } else {
        console.log('Вы старый') ;
        
    }                    
    }
    
    
    checkUserAge(6);
 


function checkUserAge2 (i:number) {
    if(i<=17){
        return 'Вы ребенок' ;
    } else if(i<=30) {
        return 'Вы молодой' ;
    } else if(i<=55) {
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


let name = 'Katya'
let age = 33

let user = {
    name: 'Katya', // ключ : значение
    age: 32,
    // 0: '888',
    // 5: 'abc',
    city:'Sochi',
    month:'March',
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



let person = {
    name: "John",
    surname: "Smith"
};
let person2 = {
    name: "John",
    surname: "Smith"
};
let person3 = person2 = person

console.log(person==person2);
console.log(person.name==person2.name);

console.log(person==person3);

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

function showTimeInTravel (distance:number, speed:number) {
       let time = distance/speed 
       let rest = Math.floor(time/4)
       
       if (time<=4) {
        return distance/speed
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
console.log(massive.length +' количество элементов в массиве');




let namiInMassive = [ 
    'Ann', 
    'Kate', 
    'Sveta'
]
console.log(namiInMassive);

console.log(namiInMassive[3] = 'Olga');
console.log(namiInMassive);






console.log(Math.round(Math.random()*100));
console.log(Math.round(Math.random()*100));
console.log(Math.round(Math.random()*100));
console.log(Math.round(Math.random()*100));
console.log(Math.round(Math.random()*100));
console.log(Math.round(Math.random()*100));
console.log(Math.round(Math.random()*100));


let mas = [ 1, 3, 4, 6, 2, 3, 45, 67, 78,]

console.log(mas);
console.log(mas.length);

console.log(Math.max(...mas) + ' - макс элемент массива');
console.log(Math.min(...mas) + ' - мин элемент массива');

//! Задание 1
//! Создать массив из 10 случайных чисел и написать несколько
//! функций для работы с ним.
let massiveWithRandomNumbers:number[] = []
for (let i = 1; i <= 10; i++) {
    let num = Math.round(Math.random()*100)
    massiveWithRandomNumbers.push(num)
}

// console.log(massiveWithRandomNumbers);


//! 1. Функция принимает массив и выводит его на экран.

function showMassive (massive:number[]) {
    return massive
}
// console.log(showMassive(massiveWithRandomNumbers))

 

//! 2. Функция принимает массив и выводит только четные
//! элементы.
function showEvenElem (x:number[]) {

    //! 1-ый способ решения через цикл for

    for (let i = 0; i < x.length; i++) {
        if (x[i]%2==0) {
            console.log(x[i]);
        }            
    }
    
    //! 2-ой способ решения через цикл for of

    for (const el of x) {
        if (el%2==0) {
            console.log(el);
        }
    }
        

}

showEvenElem(massiveWithRandomNumbers)

 




console.log('------------');


//! 3. Функция принимает массив и возвращает сумму всех
//! элементов массива.

function showUnionSumm (mass:number[]) { // название функции и её параметр
    let accum  = 0     // (аккамулятор) - сюда мы записываем общую сумму чисел
    for (let i = 0; i < mass.length; i++) { // количество повторений цикла
        accum+=mass[i] // суммируем элементы между собой
       
    }
    return accum // возвращем общую сумму 
}

console.log(showUnionSumm(massiveWithRandomNumbers)); // вызов функции и передача аргумента



//! 4. Функция принимает массив и возвращает его максимальный элемент.
function findMaxElement (x:number[]) {
    return `
наибольший элемент = ${Math.max(...x)}, 
наименьший элемент = ${Math.min(...x)}
    `
}
console.log(findMaxElement(massiveWithRandomNumbers));






//! 5. Функция добавления нового элемента в массив по указанному индексу.



mas = [ 1, 3, 4, 6, 2, 3, 45, 67, 78,]

function addNewElement (mass:number[], index:number, userNum:number) {
    mass.splice(index, 0, userNum)
    return mass
}
console.log(addNewElement(massiveWithRandomNumbers, 3, 555));

console.log(addNewElement(mas, 3, 555));


massiveWithRandomNumbers = [47, 50, 78, 32, 46, 100, 15, 76, 27, 2]





//! 6. Функция удаления элемента из массива по указанному
//! индексу

function deleteElement(mass:number[], index:number) {
    mass.splice (index, 1)
    return mass
}
console.log(deleteElement(massiveWithRandomNumbers, 4));


console.log('=============')


massiveWithRandomNumbers = [47, 50, 78, 32, 46, 100, 15, 76, 27, 2] 
console.log(massiveWithRandomNumbers);

massiveWithRandomNumbers.push (333)
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
let newArray = massive3.splice(4,7)

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
    if (array[i]>3 && array[i]<10) {
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



console.log(dayOfWeek.slice(1,4)); //! slice КОПИРУЕТ часть массива и не изменяет его
console.log(dayOfWeek);

dayOfWeek.splice(3, 0, 'Monday', 'Tuesday') //! splice может удалять старые элементы массива и записывать новые

console.log(dayOfWeek);



let mass1= [1, 2, 3, 4, 5]
let mass2 = [1, 2, 5,]
console.log(mass1.concat(mass2)); //! concat соединяет данные из массивов


mass1= [1, 2, 3, 4, 5]

mass1.forEach(function name (el){
    console.log(el*2)
})

mass1.forEach((el)=>{
    console.log(el*2)
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


let users:any[] = [
    {id: 1, name: "Вася", payment: 20000},
    {id: 2, name: "Петя", payment: 25000},
    {id: 3, name: "Маша", payment: 15000}
];

let usersName:number[] = []

users.map(el=> usersName.push(el.id * el.payment))
console.log(usersName);




// console.log(usersName);

console.log('--------------');
let unionPayment = 0
users.forEach(el=> unionPayment+=el.payment)
console.log(`общая зарплата работников = ${unionPayment} рублей`);

let sortPayment = [] as any

users.forEach(el=> sortPayment.push(el.payment))
console.log(sortPayment.sort());
console.log(sortPayment.reverse());


 
  let someUsers = users.find(el=>el.payment>=20000) //! выводит первое верное значение и на нём завешается
  console.log(someUsers);

  let someUsers2 = users.filter(el=>el.payment>=20000) //! filter выводит ВСЕ верные значениЯ
  console.log(...someUsers2);
        
    
  array = [2, 5, 9, 5, 0, 6,]
  let test = array.find(el=> el>3)
  console.log(test);
  


array = [2, 5, 6,]

let acc = 0
array.forEach (el=>acc+=el) //! forEach перебирает каждый элемент массива (по аналогии с циклом for)
console.log(acc);




let reduce = array.reduce((acc, el)=>acc+=el) //! reduce нужен для вычисления одного значения на основе всех элементов массива
console.log(reduce);



  

// map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
// sort(func) – сортирует массив «на месте», а потом возвращает его.
// reverse()


array = [2, 5, 9, 8]
console.log(array.reverse()); //! reverse - меняет порядок элементов задом наперёд

console.log(array.sort()); //! sort - сортирует элементы в порядке возрастания

let testMap = array.map(el=>el*10) //! создаёт новый массив и НЕ меняет исходный массив
console.log(testMap);

array.copyWithin
 



array = [2, 5, 9, 15, 0, 4]
