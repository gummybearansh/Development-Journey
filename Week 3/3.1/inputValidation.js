const express = require("express");
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    const kidneys = req.body.kidneys;
    const numberOfKidneys = kidneys.length;

    res.send("You have " + numberOfKidneys + " kidneys")
})

// global catches 
app.use(function (err, req, res, next){
    res.json({
        msg: "Sorry sm is up with our server"
    })
})
app.listen(3001);