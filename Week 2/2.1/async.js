function onDone(){
    console.log("DONE DONE");
}

setTimeout(onDone, 10000);

let a = 0;
for (let i = 0; i < 100000000; i++){
    a+= i;
}