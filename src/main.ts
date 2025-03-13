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










for (let i = 0; i < 6; i++) { //! прерывание цикла
    
    if (i==3) {
        break
    }
    console.log(i);  
}
console.log('================');





for (let i = 0; i < 10; i++) { //! переход к следующей итерации
    if (i%2==0) {
        continue
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

userName()

// let name = 'Petya' // глобальная переменная



function userName() {
    let name = 'Dima' // локальная переменная
    
    if (name=='' || name == 'Vasya') {
        console.log('Данный пользователь ' + name + ' уже есть');
    } else {
        console.log(`Привет ${name}`);
    }
}
console.log(`привет ${name}`);

userName()

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








console.log(Math.round(5.4)) // округление до ближайшего числа

console.log(Math.floor(9.9)) // округление вниз до ближайшего числа

console.log(Math.ceil(5.2)) // округление вверх до ближайшего числа

console.log(Math.trunc(5.4)); // отбрасывает дробную часть

console.log('----------');


console.log(10%4);



// 9. Написать функцию, которая выводит все четные или нечетные числа, в указанном 
// пользователем диапазоне. Какие числа выводить, определяется третьим параметром типа
// bool (true – четные, false – нечетные).

// function showEvenOddNumberInDiapazone (min:number, max:number, bool:boolean) {

// }

// console.log(showEvenOddNumberInDiapazone(5, 15, false))
 
//! Создайте функцию checkPassword(x), которая вернет
//! значение true, если в качестве аргумента в нее будет
//! передан допустимый пароль (одно из значений «Step»,
//! «Web» или «JavaScript»). Иначе функция должна вернуть false.

function checkPassword (pass:string) {
    if (pass == 'Step' || pass == 'JavaScript' || pass == 'Web') {
        return true
    } else {
        return false
    }
}
console.log(checkPassword('Step'));




//! 5. Создайте функцию определения знака числа sign(x),
//! которая вернет значение –1, если аргумент «х» — отрицательное число, 1 — если 
//! положительное, 0 — если аргумент «х» равен нулю.

function determineSign (x:number) {
    if (x>0) {
        return 1
    }
    if (x<0) {
        return -1
    } 
    if (x==0) {
        return 0
    }
    return 'введите число'
}
console.log(determineSign(5))






//! Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет 
//! Иван Петров с возрастом 17 лет" (только здесь данные, которые были переданы в функцию)

function showUserInfo (name:string, surname:string, age:number) {
    return `Привет ${name} ${surname}, тебе ${age} лет`
}
console.log(showUserInfo('Ivan', 'Ivanov', 18));






//! Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости 
//! от времени суток (Доброе утро\день\вечер\ночи Иван)

let data = new Date
console.log(`Текущее время: ${data.getHours()} часов и ${data.getMinutes()} минут `);

function greetUser (name:string) {
    let hours = data.getHours()

if (hours>=6 && hours<12) {
    return `Доброе утро ${name}`
}
if (hours<18) {
    return `Добрый день ${name}`
}
if (hours<22) {
    return `Добрый вечер ${name}`
}
return `Доброй ночи ${name}`
}

console.log(greetUser('Vasya'));
console.log(greetUser('Petya'));




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


//! Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста 
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

checkUserAge(80);











  

console.clear()





//! 4. Написать функцию, которая проверяет, является ли переданное ей число простым.



//! 5. Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. 
//! Вызовите функцию для всех чисел от 2 до 9.


