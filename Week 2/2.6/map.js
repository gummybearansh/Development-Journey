// given an array return new array where every element is multiplied by 2 

let arr = [1, 2, 3, 4, 5]

function transform(i){
    return i * 2; 
}

let newArr = arr.map(transform);
console.log(newArr);

