function iPromiseIwill(){
    console.log("Hello from inside the promise");
    return new Promise(function(resolve){
        setTimeout(resolve, 10000);
        console.log("does this run before or after?");
    });
}

function onDone(){
    console.log("Promise has been done");
}

var a = iPromiseIwill();
console.log(a + " Just returned");
a.then(onDone);
console.log(a + " Before done");