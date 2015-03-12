/**
 * Module dependencies.
 */

var express = require('express');

var app = express();
var server = app.listen(3000);

app.get('/getfile', function(req, res) {
  console.log(req.query);
  var params = req.query,
      product = params.product,
      country = params.country;
  res.type('application/json');
  res.download('json/v2.'+product+'.'+country+'.json');
});