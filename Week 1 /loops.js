function sumToN(n){
    let ans = 0; 
    for (let i = 1; i <= n; i++){
        ans += i;
    }
    return ans;
}

console.log(sumToN(100));