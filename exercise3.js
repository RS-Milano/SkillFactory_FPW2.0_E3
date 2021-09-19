function primeFunction (firstNum) {
    return function (secondNum) {
        return firstNum + secondNum
    };
};

let addTwoNumbers = primeFunction(2);

console.log(addTwoNumbers(3));
