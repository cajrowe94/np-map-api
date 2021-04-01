const express = require("express");
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});