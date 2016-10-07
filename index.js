var dns = require('dns');
dnscache = require('dnscache')({
  enable: true,
  ttl: 300,
  cachesize: 1000
});

var port = process.env.PORT || 3005;

var express = require('express');
var httpProxy = require('http-proxy');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

apiForwardingUrl = 'http://localhost:3001/'

var app = express();
app.use(logger('dev'));

app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (error, request, response, next) {
    response.status(error.status || 500);
    response.json({ error: error.message });
});

var apiProxy = httpProxy.createProxyServer();

app.all('/api/*', function(req, res) {
  console.log('Forwarding API call to ');
  apiProxy.web(req, res, { target: apiForwardingUrl });
});

var server = app.listen(port, function () {
      var host = server.address().address;
      var port = server.address().port;
      console.log('App is listening on http://%s:%s', host, port);
  });
