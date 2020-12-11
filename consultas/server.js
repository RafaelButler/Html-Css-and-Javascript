require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const routes = require("./routes");

app.use(express.json({
  type: ['application/json', 'text/plain']
}));
app.use(bodyParser.json())
app.use(routes);

app.listen(5555, () => console.log("Server Up"));
