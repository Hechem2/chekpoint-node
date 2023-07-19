function logHelloWorld() {
  return console.log("HELLO WORLD");
}

logHelloWorld();

const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("File created successfully!");
});

fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello Node!!!!</h1>\n");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});