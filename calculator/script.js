


const allNums = document.querySelectorAll('.num-btn');
const display = document.querySelector('h2');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal-btn');
const opBtns = document.querySelectorAll('.op-btn')

let previous = null
let current = null
let op = null

opBtns.forEach(btn => {
    btn.addEventListener('click',setOp)

})
function setOp(){
    switch(display.innerText){

        case '': 
        if(this.innerText == '-'){
            display.innerText = '-'
        }
        else op = this.innerText
        break;

        default: previous = Number(display.innerText)
                 op = this.innerText
                 clearDisplay()
                 break;
    }
}

allNums.forEach(element => {
    element.addEventListener('click',logNum);
    
});

function logNum(){
    display.innerText += this.innerText;

}

clearBtn.addEventListener('click',clearDisplay);
function clearDisplay(){
    display.innerText = ''
}

equalBtn.addEventListener('click',calculate)
function calculate(){

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


