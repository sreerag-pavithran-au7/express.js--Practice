const express = require("express");
const bodyParser =  require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", (req, res) =>{
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) =>{
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var total = weight/(height*height);
    res.send("Your calculated BMI is " + total);
});

app.listen(3000, function(){
    console.log("Server running successfully");
});