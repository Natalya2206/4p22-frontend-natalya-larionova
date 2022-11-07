'use strict';

function fibonacci() {
    let a = 0;
    let b = 1;
    let counter = 0;

    return () => {
        if (counter === 0) {
            counter++;
            return 0;
        } 
        
        if (counter === 1) {
            counter++;
            return 1;
        }

        let result = a + b;
        a = b;
        b = result;
        return result;
    };
}

const functionFibonacci = fibonacci();

console.log(functionFibonacci());
console.log(functionFibonacci());
console.log(functionFibonacci());
console.log(functionFibonacci());
console.log(functionFibonacci());
console.log(functionFibonacci());
console.log(functionFibonacci());