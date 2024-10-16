// function sum(a, b, fn){
//     sum =  a + b;
//     fn(sum);
// }

// function displayResult(data){
//     console.log("Result of the sume is: " + data);
// }

// // only allowed to call one function 
// sum(1, 3, displayResult);

// displayResult is passed to sum function 
// in sum funciton fn is called on result 
// display result takes in sum from sum function and prints it 
// callbacks



// verry verry good example of callback (i think) 

function arithematic(a, b, operation){
    return operation(a, b);
}

function sum(a, b){
    return a + b;
}

function difference(a, b){
    return a - b;
}

let answer = arithematic(1,2, sum);
console.log(answer);

answer = arithematic(1, 2, difference);
console.log(answer);


function greet(){
    console.log("Hello ansh");
}

for (let i = 0; i < 5; i++){
    setTimeout(greet, i * 1000);
}