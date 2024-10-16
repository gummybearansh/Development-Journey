function Square(n){
    return n * n;
}

function Cube(n){
    return n * n * n;
}

function sumOfWhatever(n1, n2, fn){
    num1 = fn(n1);
    num2 = fn(n2);

    return num1 + num2;
}

console.log(sumOfWhatever(2, 3, Square));
console.log(sumOfWhatever(2, 3, Cube));