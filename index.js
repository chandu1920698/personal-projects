const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// app.get('', function (req, res) {
//     res.render('index', {});
//   });

app.listen(3000);
// app.listen(3000);