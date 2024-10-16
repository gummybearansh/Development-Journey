for (let i = 0; i < 10; i++){
    setTimeout(function (){
        console.log(i + " seconds");
    }, i * 1000);
}
