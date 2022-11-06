const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// app.get('', function (req, res) {
//     res.render('index', {});
//   });

app.listen(port);
// app.listen(3000);