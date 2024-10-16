const express = require("express");
const cors = require("cors");

const app = express()
app.use(cors());

app.get('/', (req, res) =>{
    res.send("helo");
})
app.get('/solve', (req, res) =>{
    const principal = Number(req.query.principal);
    const rate = Number(req.query.rate);
    const time = Number(req.query.time);

    console.log(principal, rate, time);
    
    const interestEarned = principal * rate * time / 100;
    const actualInterest = interestEarned / principal * 100;
 
    const returning = {"totalAmount": interestEarned+principal, "actualInterest":actualInterest };

    res.json(returning);
})

app.listen(5501)