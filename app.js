var express = require('express'),
    http = require('http'),
    path = require('path');
var Client = require('components-client');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function(request, response) {
  var client = new Client(['sales-service']);
  client.fetch().then(function() {
    sscHTML = client.getHtml('sales-service');
    sscCSS = client.getCss('sales-service');
    sscJS = client.getJs('sales-service');
    // console.log(sscHTML, sscJS, sscCSS)
    response.status(200).render('index', {ssc: sscHTML, sscCSS: sscCSS, sscJS: sscJS});
  });

});

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
