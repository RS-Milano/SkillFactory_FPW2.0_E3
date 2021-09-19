const myArray = [1, 2, -1, -2, "1", "2", 0, "0", NaN, null, "hello", 0];
let amountEven = 0, amountOdd = 0, amountZero = 0;

function evenOddZero (value) {
    if (Number.isInteger(value)) {
        if (value === 0) {
            return "zero";
        } else {
            return value % 2 === 0 ? "even" : "odd";
        };
    } else {
        return "undefine";
    };
};

for (let i = 0; i < myArray.length; i++) {
    switch (evenOddZero(myArray[i])) {
        case "even":
            amountEven++;
            break;
        case "odd":
            amountOdd++;
            break;
        case "zero":
            amountZero++;
            break;
    };
};

console.log(`There are ${amountZero} zeros in the myArray, ${amountEven} even numbers, ${amountOdd} odd numbers`);
