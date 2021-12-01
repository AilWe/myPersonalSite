const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const https = require("https");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://admin-ailin:***@cluster0.sk1ge.mongodb.net/recommendationDB");
const recommendationsSchema = {
    name: String,
    title: String,
    Email: String,
    institute: String,
    recommendation: String,
};

const Recommendation = mongoose.model("Recommendation", recommendationsSchema);

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res){
    const recommendationPost = req.body.recommendationPost;
    if(recommendationPost != null)
        res.redirect("/recommendation");
});
app.get("/recommendation", function(req, res){
    res.sendFile(__dirname + "/recommendation.html");
});
app.get("/drum_kit.html", function (req, res){
    res.sendFile(__dirname+"/drum_kit.html");
});
app.get("/dicee.html", function (req, res){
    res.sendFile(__dirname+"/dicee.html");
});
app.get("/simon.html", function (req, res){
    res.sendFile(__dirname+"/simon.html");
});


app.post("/recommendation", function (req, res){
    let Name = req.body.name;
    let Title = req.body.title;
    let email = req.body.email;
    let Institution = req.body.institute;
    let Message = req.body.message;
    const newRecommendation = new Recommendation({
        name: Name,
        title: Title,
        Email: email,
        institute: Institution,
        recommendation: Message
    });

    newRecommendation.save();
    //console.log(name);
    res.redirect("/recommendationreply")
});
app.get("/recommendationreply", function(req, res){
    res.sendFile(__dirname + "/recommendationReply.html");
});

app.listen(process.env.PORT || 3001, function (){
    console.log("listening");
});
