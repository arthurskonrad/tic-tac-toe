var express = require("express");
var app = express();
var port = 3000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.use(express.static("app/dist"));
