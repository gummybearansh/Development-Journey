const express = require("express");
const app = express(); 

let numberOfRequest = 0; 
function calculateNumberOfRequests(req, res, next){
    numberOfRequest ++;
    console.log(numberOfRequest);
    next();
}

app.get('/', calculateNumberOfRequests, (req, res) => {
    res.send("Requested " + numberOfRequest + " times");
})

app.listen(3000);
