const express = require("express");
const app = express(); 
// user object has name: "_string_"
// also has kidneys: _array_of_kidneys_
// kidney itslef is an object -> each kidney -> healthy: ? true or false 
var user = {
    name: "John", 
    kidneys: [{
        healthy: true
    }, {
        healthy: true
    }]
}

app.get('/', function (req, res){
    // tell user how many kidneys they have and their health
    const numberOfKidneys = user.kidneys.length; 
    let healthyKidneys = 0
    for (let i = 0; i < numberOfKidneys; i++){
        if (user.kidneys[i].healthy == true) healthyKidneys ++;
    }
    let unhealthyKidneys = numberOfKidneys - healthyKidneys;

    res.send(`<h1>You have ${numberOfKidneys} kidneys<br>
        Healthy Kidneys: ${healthyKidneys}<br>
        Unhealthy Kidneys: ${unhealthyKidneys}<h1>`);
})

app.use(express.json()); 

app.post('/', function (req, res){
    // allow user to add unhealthy or healthy kidney 
    const healthOfKidney = req.body.healthOfKidney; 
    user.kidneys.push({
        healthy: healthOfKidney
    })
    res.send("New kidney added");
})

app.put('/', function (req, res){
    // convert all unhealthy kidneys to healthy kidneys 

    // if user has no unhealthy kidneys give out 422 error code 
    let isThereAtleastOneUnhealthyKidney = false; 
    for (let i = 0; i < user.kidneys.length; i++){
        if (user.kidneys[i].healthy == false){ 
            isThereAtleastOneUnhealthyKidney = true; 
            break;
        }
    }

    if (isThereAtleastOneUnhealthyKidney){
        for (let i = 0; i < user.kidneys.length; i++){
            user.kidneys[i].healthy = true; 
        }
        res.send("Converted all kidneys to healthy");
    }
    else {
        res.status(422).json({
            message: "You have no unhealthy kidneys"
        })
    }
    
})

app.delete('/', function(req, res){
    // removes all unhealthy kidneys of the user 
    
    // if user has no unhealthy kidneys give out 422 error code 
    let isThereAtleastOneUnhealthyKidney = false; 
    for (let i = 0; i < user.kidneys.length; i++){
        if (user.kidneys[i].healthy == false){ 
            isThereAtleastOneUnhealthyKidney = true; 
            break;
        }
    }

    if (isThereAtleastOneUnhealthyKidney){
        for (let i = 0; i < user.kidneys.length; i++){
            if (user.kidneys[i].healthy == false){
                user.kidneys.splice(i);
            }
        }
        res.send("Successfully removed all unhealthy kidneys");
    }
    else {
        res.status(422).json({
            message: "You have no unhealthy kidneys"
        })
    }
    
})

app.listen(3000);