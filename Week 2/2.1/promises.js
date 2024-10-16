// // approach 1 
// function mySetTimeout(fn, duration){
//     setTimeout(fn, duration);
// }

// mySetTimeout(function(){
//     console.log("Hi there");
// }, 2000);


// approach 2 (promises)
function myOwnSetTimeout(duration){
    let p = new Promise(function(resolve){
        // after 1 second, call resolve
        setTimeout(resolve, duration);
    });
    return p;
}


const ans = myOwnSetTimeout(2000)
ans.then(function(){
    console.log("Am I resolve?");
});


