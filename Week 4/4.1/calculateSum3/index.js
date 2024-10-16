const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
//     next(); 
//   });

app.get('/sum', (req, res) =>{
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const ans = (a+b).toString()
    res.send(ans);
})

app.listen(5501);