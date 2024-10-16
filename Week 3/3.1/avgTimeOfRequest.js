const express = require("express");
const app = express(); 

let data = {};
data.totalTime = 0;
data.requestCount = 0; 
data.avgRequestTime = 0;

app.use((req, res, next) => {
    let startTime = Date.now();
    res.on('finish', () => {
        let endTime = Date.now();
        let duration = endTime - startTime; 
        data.totalTime += duration; 
        data.requestCount ++; 
        data.avgRequestTime = data.totalTime / data.requestCount;

        console.log(data);
    })  

    next();
})

app.get('/test', (req, res) => {
    res.json(data);
})

app.get('/', (req, res) => {
    res.json(data);
})

app.listen(3000);