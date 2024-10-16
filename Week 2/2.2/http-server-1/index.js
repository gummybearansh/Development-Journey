const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/t', function(req, res){
    // this is basically what is sent to the server
    const message = req.body.message;
    console.log(message);

    res.json({
        output: "This is what the server returns"
    });
})

app.listen(port, function(){
    console.log(`example app listening on port ${port}`)
})

