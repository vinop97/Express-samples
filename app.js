const express = require("express");
const app = express();
const Bodyparser = require("body-parser");
const Port = 3002;
const DefaultRoute = require('./Routers/DefaultRoute');
const FormPostRoute = require("./Routers/FormPostRoute");

app.use(Bodyparser.json());

app.get("/",DefaultRoute);

app.post("/Formpost", FormPostRoute);


app.listen(Port, () => {
   return console.log("server listening....");
})