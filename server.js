const express = require('express');
const path = require('path');
const port = 8080;
const app = express();

app.use(express.static("build"));

app.get("*",  (req, res) => {
    res.sendFile(path.resolve('build', 'index.html'));
  });
app.listen(port);

console.log('server started');