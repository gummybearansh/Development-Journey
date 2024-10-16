const express = require("express");
const app = express(); 

app.get("/health-checkup", (req, res) => {
    const username = req.headers.username; 
    const password = req.headers.password; 
    const kidneyId = req.query.kidneyId;

    if (username != "Ansh" || password != "pass"){
        res.status(403).json({
            msg: "Could not authenticate"
        })      
        return; 

    }

    if (kidneyId != 1 && kidneyId != 2){
        res.status(402).json({
            msg: "You have incorrect number of kidneys"
        })
        return;
    }

    res.send("Heart is healthy");

})

app.listen(3000);