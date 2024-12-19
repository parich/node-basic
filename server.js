const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const fs = require("fs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/writeFile", (req, res) => {
  const data = req.body;
  fs.writeFileSync("data.json", JSON.stringify(data));
  res.send("Done");
});

app.get("/readFile", (req, res) => {
  const data = fs.readFileSync("data.json");
  res.send(data);
});

app.post("/hello", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.put("/myput", (req, res) => {
  res.send(req.body);
});

app.delete("/mydelete/:id", (req, res) => {
  res.send(`id = ${req.params.id}`);
});

app.get("/hello/:name", (req, res) => {
  res.send(`hello ${req.params.name}`);
});

app.get("/hello/:name/:age", (req, res) => {
  res.send(`hello ${req.params.name}, you are ${req.params.age} years old`);
});

const PORT = process.env.PORT || 3002;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
