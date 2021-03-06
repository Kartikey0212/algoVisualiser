const express = require("express");
const app = express();
const port = process.env.PORT || 1337 ;
app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.listen(port, () => {
  console.log("The server is up and running!");
});
