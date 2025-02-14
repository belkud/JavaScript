console.log(333 +123);

let pol = 'vov'

let pol2 = pol.split('').reverse().join('')
console.log(pol2);
if (pol == pol2) {
    console.log(`значение ${pol} -  поллиндром`);
} else {
    console.log(`значение ${pol} -  не поллиндром`);
}




let array = [10, 11, 12, 13, 14, 15]
let array2 = [1, 1, 2, 3, 4, 5]


function summer(p) {
    let summ = 0
    for (let i = 0; i < p.length; i++) {   
        summ+=p[i]
    }
    console.log(summ);
}
summer(array)

summer(array2)

// Написать функцию, которая реализует работу оператора %. 
// Функция принимает 2 параметра и возвращает остаток от 
// деления первого параметра на второй. В функции исполь
// зовать только + - * /, оператор % не использовать. 


function balance (a, b) {
    if(a>b) {
        console.log(Math.round(((a/b)-parseInt(a/b))*b));
        
    } else {
        console.log('Делитель больше делимого числа');
        
    }
}

balance(15, 9)


let text = document.querySelector('#text')
text.innerHTML += 555



let b = 2
console.log(b);

console.log(b=5);

const n = 3
console.log(n);

// console.log(n=8)

const dayOfWeek = 'Четверг'
console.log(dayOfWeek);
console.log(typeof dayOfWeek);

const day_of_week = b + n
console.log(day_of_week);

// let n1 = Number(prompt('введите 1-е число', 'первое число'))

// let n2 = +prompt('введите 2-е число', 'второе число')
// alert('общая сумма чисел = ' + (n1+n2))
// console.log(n1+n2);

let num3 = 555
console.log(typeof num3);

let num4 = '555'
console.log(typeof num4);

let numBothNumbers = num3 + num4
console.log(typeof Number(numBothNumbers));

let numBothNumbers2 =  parseFloat(numBothNumbers)
// let numBothNumbers2 = numBothNumbers * 1
console.log(numBothNumbers2);

let hours = 10
let minutes = 15
let time = 24*60 - hours*60 - minutes
console.log('время до конца дня: ')
console.log((23-hours) + ' часов' + ' и ' + (60 - minutes) + ' минут');


let memory = 10000
console.log(memory/820 - (memory%820)/820 );
console.log(Math.floor(memory/820));

let n2 = 15
console.log(n%2==0);

let name2 = document.querySelector('#name')
console.log(name2.innerHTML);


console.log(parseInt(window.location.search.split('').splice(11).join('')));
console.log(name2.value);

