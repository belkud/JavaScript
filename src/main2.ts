import './style.css'







let user_info  = document.querySelectorAll('#info_about_user input') as any
// console.log(info_about_user.forEach(e=>
    // console.log(e)
    
// ));




// document.body.addEventListener('click', (e)=> {
//     // console.log(e.target.innerHTML);
//     let test  = e.target.innerHTML
//     // console.log(test);
    
// })


let form_submit  = document.querySelector('#form_submit') as HTMLInputElement //!кнопка

form_submit.addEventListener ('click', (e)=> {
    e.preventDefault()
    let child = form_result.children
    child[0].innerHTML = user_info[0].value
    child[1].innerHTML = user_info[1].value
    child[2].innerHTML = user_info[2].value
    child[4].innerHTML = user_info[5].value
    child[5].innerHTML = user_info[6].value

    // if (e.target.value = 'Male') {
        child[3].innerHTML = test
    // } else {
    //     child[3].innerHTML = 'Female'
        
    // }
    

})


let form_result  = document.querySelector('#form_result') as HTMLDivElement



console.log(user_info[3].value);



console.log(document.cookie);
console.log(document.cookie);




localStorage.setItem('surname', 'Petrov')
localStorage.setItem('city', 'Sochi')
localStorage.setItem('color', 'yellow')
localStorage.setItem('digital', '8')
// console.log(localStorage.clear()); //! полностью чистит

console.log(localStorage.getItem('surname'))
console.log(localStorage.removeItem('surname'))


console.log(localStorage);

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
   console.log(key + ' : ' + localStorage.getItem(key));
}
 

console.log(localStorage.key(1));

console.log(localStorage.color = 'green');

console.log(localStorage);



let user = {
    name : 'Petya',
    age : 30
}


console.log(user);
console.log(typeof user);

console.log(JSON.stringify(user));

let string = JSON.stringify(user)
console.log(JSON.parse(string));

// sessionStorage.setItem('test', '1')
console.log(sessionStorage);



window.addEventListener('storage', (e)=> {
    console.log(e.key);
    console.log(e.oldValue);
    console.log(e.newValue);
    console.log(e.url);
    console.log(e.storageArea);
    console.log('test', 'test');
    
    
})


localStorage.setItem('11111', '22222');
 
  
  localStorage.setItem('now2', 'test2');


  console.log(localStorage);
  