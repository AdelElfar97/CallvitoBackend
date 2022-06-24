require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan("tiny"));

//CORS
app.use(cors());
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Methods",
    "GET,POST,DELETE,PUT,OPTIONS"
  );
  response.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});



// To port
app.listen(process.env.PORT_NUMBER);

//Import Routes
const taskRouter = require("./routes/taskRouter");


app.use(taskRouter);


//Not found MW
app.use((request, response) => {
  response.status(404).json({ data: "Not Found" });
});

//Error MW
app.use((error, request, response, next) => {
  //JS  code function.length
  let status = error.status || 500;
  response.status(status).json({ Error: error + "" });
});