const express = require("express");
const app = express(); 

function middlewareCallback1(req, res, next){
    console.log("Middleware 1 was called");
    next();
}

function middlewareCallback2(req, res, next){
    console.log("Middleware 2 was called");
    next();
}

app.get('/', middlewareCallback1, middlewareCallback2, (req, res) => {
    res.send("this gets executed only when both middlware functions send next()")
})


app.listen(3000);