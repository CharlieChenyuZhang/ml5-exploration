const express = require("express");
const path = require("path");
const app = express();
// app.use(express.static("node-demo"));
const port = 3000;

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
