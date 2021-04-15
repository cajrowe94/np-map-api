const express = require("express");
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000;

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', routes);

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});