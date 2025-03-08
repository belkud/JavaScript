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
 

// let nameJS = prompt('Какое «официальное» название JavaScript?') 

// if (nameJS=='ECMAScript') {
// console.log("Ответ правильный");
// alert("Ответ правильный");
// } else {
//     console.log("Ответ НЕ правильный");
// }



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










 

// i++
// console.log(i);

// i++
// console.log(i);

// i++
// console.log(i);

// i++
// console.log(i);


// while
// do while
// for


// ++i i++
// --i i--




// while (i<15) {
    //     console.log(i);  
    //     i++
    // }
    
    // console.log('================');
    
    // let p = 5
    // while (p>0) {
//     p--
//     console.log(p);

// }

// console.log('================');
// let r = 0;
// do {
    //     console.log(r);
    
//     r++;
// } while (r < 3);


// console.log('================');


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





for (let i = 1; i < 10; i+=2) {
    console.log(i);  
    
}




for (let i = 0; i < 10; i++) { 
    if (i%2==1) {
        console.log(i);  
    }
}
console.log('================');


// let i = 0
// console.log(++i);  
// console.log(i);




let number = '1234567098'
console.log(number.length);


let array = [2, 4, 5, 3, 8]
console.log(array);
let count = 0
for (let i = 0; i < array.length; i++) {
    count+=array[i]
}
console.log(count);    

console.clear()



console.log ( - -105)


 

// 7. Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.
// let minutes = Number(prompt('Введите минуты'))
// let hours = Number(prompt('Введите часы'))

let hours = 23
let minutes = 5
console.log('До полуночи остало: ' + (23-hours) + ' часа и ' + (60-minutes) + ' Минут' )


// 1. for 
// 2. while
// 3. do while


// for (let i = 0; i <= 10; i++) {
//     console.log(i);
    
// }
 

//! 3. Вывести все числа от 1 до 100, которые кратные указанному
//! пользователем числу.

// let n = 5

// for (let i = 1; i < 100; i++) {
//     if(i%n==0) {
//         console.log(i);
        
//     }
// }

//! 4. Вывести каждый 4-й элемент из указанного пользователем
//! диапазона. Пользователь указывает минимальное и максимальное значения диапазона. 


let minNum = 25
let maxNum = 80
let string = ''


for (let i = minNum; i < maxNum; i+=4 ) {
    console.log(i);        
}





//! 5. Запросить число и проверить, простое ли оно. Простое
//! число делится без остатка только на себя и на единицу.

// 5   7    11 - на себя или на 1


console.log('=======');

// let y = 13
// let acc = 0
// for (let i = 2; i < y; i++) {
//     if (y%i==0) {
    //         acc++
        
//     } 
    
// }













// let y = 25
// let acc = 0
// for (let i = 1; i <= y; i++) {
//     if (y % i == 0) {
//         acc++
//     }
// }
// console.log(acc > 2 ? 'число составное' : 'число простое')




// let y = 25
// let acc = 0
// for (let i = 2; i < y; i++) {
//     if (y % i == 0) {
//         acc++
//     }
// }
// console.log(acc > 0 ? 'число составное' : 'число простое')



//! 4. Определить количество цифр в введенном числе

let b = 12345
console.log(b.toString().length);

let b12 = '12345678'
console.log(b12.length);


for (let i = 10; i <= 20; i++) {
    console.log(i);
        
}

console.clear()


// 5. Запросить у пользователя 10 чисел и подсчитать, сколько
// он ввел положительных, отрицательных и нулей. При этом
// также посчитать, сколько четных и нечетных. Вывести
// статистику на экран. Учтите, что достаточно одной переменной 
// (не 10) для ввода чисел пользователем.
 



// for (let i = 1; i <= 10; i++) {
//   const num = Number(prompt("Введите число"));
//   if (num > 0) {
//     positive++;
//   }
//   if (num < 0) {
//     negative++;
//   }
//   if (num == 0) {
//     zero++;
//   }
//   if (num % 2 == 1) {
//     odd++;
//   }
//   if (num % 2 == 0) {
//     even++;
//   }
// }
// alert(` Из введённых цифр — положительных: ${positive}, отрицательных: ${negative}, нулей: ${zero}, четных: ${even}, нечетных: ${odd}.`)







//! 1. Подсчитать сумму всех чисел в заданном пользователем
//! диапазоне.

let UserN = 5 
let UserN2 = 20
let accum = 0 
for (let i = UserN; i < UserN2; i++) {
    accum+=i
    console.log(accum)
    console.log(`сумма счетчика =  ${accum} на итерации ${i}`);
    console.log('сумма счетчика = ' + accum + ' на итерации ' + i);    
}


//! 2. Запросить 2 числа и найти только наибольший общий
//! делитель.

// let firstNum = 20
// let secondNum = 30
// let massive = [] as any


// for (let i = 0; i < secondNum; i++) {
//     if (secondNum%i==0 && firstNum%i==0) {
//         massive.push(i)
//     }
            
// }
// console.log(massive);

// console.log(Math.max(...massive)); // первый способ
// console.log(massive[massive.length-1]); // второй способ
// console.log(massive.pop()); // третий способ

 
//! 3. Запросить у пользователя число и вывести все делители
//! этого числа.

let userNumber = 50
let stringWithNumbers = ''



for (let i = 0; i <= userNumber; i++) {
    if (userNumber%i==0) {
        // console.log(array2);
        
        stringWithNumbers+= i + ' ' //2-ой способ выведения делителей (через строку)
        
    }    
}

console.log(stringWithNumbers);




let acc2 = 0
let array2 = [] as any
while (userNumber>acc2 ) {
    acc2++
    if (userNumber%acc2==0) {
        array2.push(acc2)  //1-ый способ выведения делителей (через массив)
    }
}
console.log(array2);



//! 4. Определить количество цифр в введенном числе.
let quantatyDigitals = 5555555 as any
console.log(quantatyDigitals.toString().length);


quantatyDigitals = '555767657657'
let accumulator = 0
for (let i = 0; i < quantatyDigitals.length; i++) {
    accumulator++
}
console.log(`количество цифр в введенном числе = ${accumulator}`);







//! 5. Запросить у пользователя 10 чисел и подсчитать, сколько
//! он ввел положительных, отрицательных и нулей. При этом
//! также посчитать, сколько четных и нечетных. Вывести
//! статистику на экран. Учтите, что достаточно од

let mass = [3, 5, 4, 6, -1, -6, 10, -8, 0, 3]
let pos =0  
let evenN= 0
let zer= 0
for (let i = 0; i < mass.length; i++) {
    if (mass[i]>=0) {
        pos++
    }
    if (mass[i]%2==0) {
        evenN++
    }
    if (mass[i]==0) {
        zer++
    }
            
}
console.log(`количество положительных элементов = ${pos}
количество отрицательных элементов = ${10-pos}
количество чётных элементов = ${evenN}
количество нечётных элементов = ${10 - evenN}
количество нолей = ${zer} 
    `);



    // let positiveN = 0
    // let negativN = 0
    // for (let i = 0;  i< 4; i++) {
        // const element = Number(prompt('Введите число'))
//         if (element>=0) {
//             positiveN++
//         }
//         if (element<0) {
//             negativN++
//         }




//     }

// console.log(`положительных чисел ${positiveN},.....,,,,, отрицательных = ${negativN}`)




//! 9. Вывести таблицу умножения для всех чисел от 2 до 9.
//! Каждое число необходимо умножить на числа от 1 до 10.


//! 1-ый способ решения задачи
let multiplicationTable = [1, 2, 3, 4, 5, 6, 7, 8, 9,] as any
multiplicationTable.forEach(el => {
    console.log(el);
})

let stringMass = ''
for (let i = 0; i < multiplicationTable.length; i++) {

    stringMass+= multiplicationTable + '\n'
    
    
}
console.log(stringMass);


//! 2-ой способ решения задачи

let stringOfMultTable = ''
let strAccum = 0
for (let i = 1; i <=9; i++) {
    strAccum++
    stringOfMultTable+=  '\n' + 'строка №' + strAccum + ' = '
    for (let j = 1; j < 10; j++) {
        stringOfMultTable+=i*j + ' '
    }
}
console.log(stringOfMultTable);






console.clear()




//! 4. Запросить 2 числа и найти все общие делители.



//! 5. Посчитать факториал введенного пользователем числа.(от 0 до введеного числа)






