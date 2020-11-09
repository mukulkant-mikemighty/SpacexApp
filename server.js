var express = require('express');
var app = express();
app.use(express.static('./dist/SpaceX'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/SpaceX/'});
});
app.listen(process.env.PORT || 8080);