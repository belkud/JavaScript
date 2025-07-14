import './style.css'







let user_info  = document.querySelectorAll('#info_about_user input') as any
// console.log(info_about_user.forEach(e=>
    // console.log(e)
    
// ));




document.body.addEventListener('click', (e)=> {
    console.log(e.target.innerHTML);
    
})


let form_submit  = document.querySelector('#form_submit') as HTMLInputElement //!кнопка

form_submit.addEventListener ('click', (e)=> {
    // e.preventDefault()
    let child = form_result.children
    child[0].innerHTML = user_info[0].value
    child[1].innerHTML = user_info[1].value
    child[2].innerHTML = user_info[2].value
    child[4].innerHTML = user_info[5].value
    child[5].innerHTML = user_info[6].value

    // if (e.target.value = 'Male') {
    //     child[3].innerHTML = 'Male'
    // } else {
    //     child[3].innerHTML = 'Female'
        
    // }
    

})


let form_result  = document.querySelector('#form_result') as HTMLDivElement



console.log(user_info[3].value);
