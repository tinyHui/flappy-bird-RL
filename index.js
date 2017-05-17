const express = require('express'),
      path = require('path'),
      app = express();

const PORT = 8000;

app.use('/static', express.static('static'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(PORT, function () {
  console.log('App listening on port ' + PORT);
})
