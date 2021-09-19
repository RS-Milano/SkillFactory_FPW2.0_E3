let counter = 0;

function intervalOutput (start, end) {
    let currentValue = start + counter;
    console.log(currentValue);
    if (currentValue === end) {
        clearInterval(intervalID);
    };
    counter++;
};

let intervalID = setInterval(intervalOutput, 1000, 5, 15);
