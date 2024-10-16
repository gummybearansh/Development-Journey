// global catches 
app.use(function (err, req, res, next){
    res.json({
        msg: "Sorry sm is up with our server"
    })
})