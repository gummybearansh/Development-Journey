// given input array give me all even values back 

let arr = [1, 2, 3, 4, 5];

function filteringLogic(i){
    if (i % 2 == 0){
        return true;  
    }
    else {
        return false;
    }
}

let newArr = arr.filter(filteringLogic);
console.log(newArr);


