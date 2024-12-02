
const express = require("express");
const path = require("path");
const app = express();

const quiz = require("./quiz.js");

let port = 8080;

app.use(express.urlencoded({ extended: true }));
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, "/public/css")))
app.use(express.static(path.join(__dirname, "/public/js")))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
const methodOverride = require("method-override");
const { get, request } = require("http");
const getQuiz = require("./quiz.js");
app.use(methodOverride('_method'))


app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

let data; 
app.get("", (request, response) => {
    response.render("index.ejs");
})
app.post("/quiz", async (request, response) => {
    const { name, email, topics, questions, level } = request.body;
    data = await getQuiz(topics, questions, level);
    response.render("quiz.ejs", {data});
});

app.post("/score", (request, response) => {
    let answer = request.body;
    console.log(data);
    console.log(answer);
    response.render("score.ejs", {data, answer});
})

app.get("/index.ejs", (request, response) => {
    response.render("index.ejs");
})



