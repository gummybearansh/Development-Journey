function square(n){
    return n * n;
}

function cube(n){
    return n * n * n;
}

function sumOfSomething(a, b, cb){
    console.log(cb);

    const val1 = cb(a);
    const val2 = cb(b);

    return val1 + val2;
}

console.log(sumOfSomething(2, 3, square));
console.log(sumOfSomething(2, 3, cube));


// anonymous function 
console.log(sumOfSomething(2, 3, function (n){
    return n * n;
}))

console.log(sumOfSomething(2, 3, function (n){
    return n * n * n;
}))