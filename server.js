const constants= require('./utils/constants');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const router = express.Router();
require("./routes")(router);


const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(constants.DB_URI, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});


app.use('/orders', router);

app.listen(constants.PORT, function() {
    console.log("Server is running on Port: " + constants.PORT);
});