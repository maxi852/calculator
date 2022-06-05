window.onload = function(){
    ops = document.querySelector('.visual');
    number1 = document.querySelector('.number-1');
    number2 = document.querySelector('.number-2');
    number3 = document.querySelector('.number-3');
    number4 = document.querySelector('.number-4');
    number5 = document.querySelector('.number-5');
    number6 = document.querySelector('.number-6');
    number7 = document.querySelector('.number-7');
    number8 = document.querySelector('.number-8');
    number9 = document.querySelector('.number-9');
    number0 = document.querySelector('.number-0');
    erase = document.querySelector('.erase');
    start = document.querySelector('.start');
    multiply = document.querySelector('.multiply');
    division = document.querySelector('.division');
    adition = document.querySelector('.adition');
    less = document.querySelector('.less');
    float = document.querySelector('.float');
    result = document.querySelector('.result');
    let op1;
    let op2;

    number1.onclick = () => {
        if(ops.innerText == '+' || ops.innerText == '-' || ops.innerText == 'x' ||
        ops.innerText == '/' || ops.innerText == '0'){
            ops.innerText = 1;
        } else{
        ops.innerText += 1;
        }
    } 
    number2.onclick = () => {
        if(ops.innerText == '+' || ops.innerText == '-' || ops.innerText == 'x' ||
        ops.innerText == '/' || ops.innerText == '0'){
            ops.innerText = 2;
        } else{
        ops.innerText += 2;
        }
    } 
    number3.onclick = () => {
        if(ops.innerText == '+' || ops.innerText == '-' || ops.innerText == 'x' ||
        ops.innerText == '/' || ops.innerText == '0'){
            ops.innerText = 3;
        } else{
        ops.innerText += 3;
        }
    } 
    number4.onclick = () => {
        if(ops.innerText == '+' || ops.innerText == '-' || ops.innerText == 'x' ||
        ops.innerText == '/' || ops.innerText == '0'){
            ops.innerText = 4;
        } else{
        ops.innerText += 4;
        }
    } 
    number5.onclick = () => {
        if(ops.innerText == '+' || ops.innerText == '-' || ops.innerText == 'x' ||
        ops.innerText == '/' || ops.innerText == '0'){
            ops.innerText = 5;
        } else{
        ops.innerText += 5;
        }
    } 
    number6.onclick = () => {
        if(ops.innerText == '+' || ops.innerText == '-' || ops.innerText == 'x' ||
        ops.innerText == '/' || ops.innerText == '0'){
            ops.innerText = 6;
        } else{
        ops.innerText += 6;
        }
    } 
    number7.onclick = () => {
        if(ops.innerText == '+' || ops.innerText == '-' || ops.innerText == 'x' ||
        ops.innerText == '/' || ops.innerText == '0'){
            ops.innerText = 7;
        } else{
        ops.innerText += 7;
        }
    } 
    number8.onclick = () => {
        if(ops.innerText == '+' || ops.innerText == '-' || ops.innerText == 'x' ||
        ops.innerText == '/' || ops.innerText == '0'){
            ops.innerText = 8;
        } else{
        ops.innerText += 8;
        }
    }
    number9.onclick = () => {
        if(ops.innerText == '+' || ops.innerText == '-' || ops.innerText == 'x' ||
        ops.innerText == '/' || ops.innerText == '0'){
            ops.innerText = 9;
        } else{
        ops.innerText += 9;
        }
    }
    number0.onclick = () => {
        if(ops.innerText == '+' || ops.innerText == '-' || ops.innerText == 'x' ||
        ops.innerText == '/' || ops.innerText == '0'){
            ops.innerText = 0;
        } else{
        ops.innerText += 0;
        }
    } 
    
    erase.onclick = () => {
        console.log(ops.innerText);
        ops.innerText -= 2;
    }
    
   start.onclick = () => {
       ops.innerText = 0;
   }
   multiply.onclick = () => {
       op1 = ops.innerText
       console.log(op1);
       ops.innerText = 'x';
   }
   division.onclick = () => {
        op1 = ops.innerText
        console.log(op1);
        ops.innerText = '/';
   }
   adition.onclick = () => {
        op1 = ops.innerText
        console.log(op1);
        ops.innerText = '+';
   }
   less.onclick = () => {
        op1 = ops.innerText
        console.log(op1);
        ops.innerText = '-';
   }
   float.onclick = () => {
    if(isNaN(ops.innerText)){
    } else {
        ops.innerText += ',';
    } 
   }
   }
   