const path = require("path");
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const favicon = require('express-favicon');


const MONGODB_URI = process.env.DB_CONN;

const app = express();
app.use(favicon('./favicon.png'));

app.set("view engine", "ejs");
app.set("views", "views");

const calcRoutes=require('./routes/calculatorRoute')


app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')))



app.use(calcRoutes)




mongoose
  .connect(process.env.DB_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Database connected");
    app.listen(process.env.PORT || 3000);
  })
  .catch((err) => console.log(err));
