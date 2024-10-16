function sumTo100(){
    sum = 0;
    for (let i = 1; i < 100; i++){
       sum += i;
    }
    return sum
}

// called when thread is free and 1 second has passed
function callSumTo100(){
    console.log(sumTo100());
}

setTimeout(callSumTo100, 10);

console.log("hello world");