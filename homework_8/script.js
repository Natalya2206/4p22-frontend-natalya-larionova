'use strict';

const button = document.getElementById('button');

button.addEventListener('click', (event) => {
    event.preventDefault();
    const firstNumber = document.getElementById('first-number').value;
    const symbol = document.getElementById('symbol').value;
    const secondNumber = document.getElementById('second-number').value;
    let result;


    switch (symbol) {
        case '': result = 'Не введён знак';
        break;
        case '+': result = Number(firstNumber) + Number(secondNumber);
        break;
        case '-': result = Number(firstNumber) - Number(secondNumber);
        break;
        case '*': result = Number(firstNumber) * Number(secondNumber);
        break;
        case '/': result = Number(firstNumber) / Number(secondNumber);
        break;
        default: result = 'Программа не поддерживает такую операцию';
        break;
    };

    if (firstNumber === '') {
        result = 'Первое число не указано';
    } else if (secondNumber === '') {
        result = 'Второе число не указано';
    } else if (isNaN(firstNumber) || isNaN(secondNumber)) {
        result = 'Некорректный ввод чисел';
    } else if (result === Infinity) {
        result = 'Операция некорректна';
    } else {
        console.log(result);
    }

    document.getElementById('result').innerHTML = result;
});    