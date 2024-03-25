let inputString = '';
let firstvalue = '';
let operation = '';
let appendbuttons = document.querySelectorAll('.appenButton');
let operatorbuttons = document.querySelectorAll('.operatorButtons');
let equalbutton = document.querySelector('#equal');
let input = document.querySelector("#inputTag");
let resultDisplayed = false;

console.log(appendbuttons)
appendbuttons.forEach(button=>{
    button.addEventListener('click',()=>{
       
            inputString += button.textContent;        

            input.value = inputString;
        
      
    })
})
operatorbuttons.forEach(button=>{
    button.addEventListener('click',()=>{
       
        

        operation = button.textContent;
        console.log(operation);
        input.value = button.textContent;
        firstvalue = inputString;
        inputString = '';

    })
})

equalbutton.addEventListener('click',()=>{
    num1 = Number(firstvalue);
    num2 = Number(inputString);
    let result = null;
    switch(operation){
        case '+':
            result = num1+num2;
            break;

        case '-':
            result = num1-num2;
            break;
        
            case 'x':
            result = num1*num2;
            break;

        case '/':
            result = num1/num2;
            break;
        }
        firstvalue = '';  
    input.value = result.toString();
    inputString = result.toString();
})

document.querySelector('#reset').addEventListener('click',()=>{
    input.value = '';
    inputString = '';
    firstvalue = '';

});

document.querySelector('#Del').addEventListener('click',()=>{
    if(input.value===inputString)
        inputString = inputString.slice(0,-1);
    else
        firstvalue = firstvalue.slice(0,-1);

    input.value = (input.value).slice(0,-1)
})


const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.setAttribute('class', 'dark');
    } else {
        document.body.removeAttribute('class');
    }
});