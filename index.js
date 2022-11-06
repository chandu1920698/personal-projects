const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/public',function(req,res) {
    res.sendFile('mc.html');
  });;

app.listen(port);
// app.listen(3000);