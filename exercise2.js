let myArray = ["hello", NaN, Infinity, 2.47, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function isPrimeNumber (num) {
    if (isNaN(num)) {
        return "The passed argument is not a number";
    } else if (!Number.isInteger(num)) {
        return "The passed argument is not an integer";
    } else if (!(num > 1)) {
        return "Prime number must be greater than one";
    } else if (num > 1000) {
        return "The input number is too large";
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return `${num} is not a prime number`;
            };
        };
        return `${num} is a prime number`;
    };
};

myArray.forEach(element => console.log(isPrimeNumber(element)));
