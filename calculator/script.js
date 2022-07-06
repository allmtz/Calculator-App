


const allNums = document.querySelectorAll('.num-btn');
const display = document.querySelector('h2');
const clearBtn = document.querySelector('.clear');
const minusBtn = document.querySelector('.minus');
const addBtn = document.querySelector('.add');
const divideBtn = document.querySelector('.divide');
const multiplyBtn = document.querySelector('.multiply');
const equalBtn = document.querySelector('.equal-btn');

let previous = null
let current = null
let op = null


allNums.forEach(element => {
    element.addEventListener('click',log);
    
});

function log(){
    display.innerText += this.innerText;

}

clearBtn.addEventListener('click',clear);
function clear(){
    display.innerText = ''
}

minusBtn.addEventListener('click',subtract)
function subtract(){
    if(display.innerText == ''){
        console.log('ok')
        display.innerText = '-'
    }

    else {previous = Number(display.innerText)
    op = '-'
    clear()}
}

addBtn.addEventListener('click',add)
function add(){
    previous = Number(display.innerText)
    op = '+'
    clear()
}

divideBtn.addEventListener('click',divide)
function divide(){
    previous = Number(display.innerText)
    op = '/'
    clear()
}

multiplyBtn.addEventListener('click',multiply)
function multiply(){
    previous = Number(display.innerText)
    op = '*'
    clear()
}

equalBtn.addEventListener('click',equal)
function equal(){
    current = Number(display.innerText)

    switch(op){
        case '-':  display.innerText = previous - current
        break;
        case '+':  display.innerText = previous + current
        break;
        case '/':  display.innerText = previous / current
        break;
        case '*':  display.innerText = previous * current
        break;
    }
}


