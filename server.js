const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log("App is listening on PORT " + PORT);
});
