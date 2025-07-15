console.log("Hello node!");
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello node!");
});

app.get(`/say-hello/:name`, (req, res) => {
  const name = req.params.name;
  res.send(`hello ${name}`);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
