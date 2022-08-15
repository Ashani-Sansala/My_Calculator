
let numberOne=0;
let numberTwo=0;

let operator='+';

const getNumberOne=(op)=>{
    operator=op;
    numberOne=parseInt(document.getElementById('input').value);
    document.getElementById('input').value='';
}

const calculate = () => {

    switch (operator) {
        case "+":
            numberTwo = parseInt(document.getElementById('input').value);
            document.getElementById('input').value = (numberOne + numberTwo);
            return;
        case "-":
            numberTwo = parseInt(document.getElementById('input').value);
            document.getElementById('input').value = (numberOne - numberTwo);
            return;
        case "*":
            numberTwo = parseInt(document.getElementById('input').value);
            document.getElementById('input').value = (numberOne * numberTwo);
            return;
        case "/":
            numberTwo = parseInt(document.getElementById('input').value);
            document.getElementById('input').value = (numberOne / numberTwo);
            return;
    }
}

const setValue = (value)=>{
    let temp = document.getElementById('input').value;
    document.getElementById('input').value=temp + value;
}

