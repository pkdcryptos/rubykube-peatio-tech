var express   = require('express');
var validator = require('email-validator');
var app       = express();
var cors      = require('cors');
var request  = require('request');

app.use(express.static('dist'))

app.use(require('body-parser').json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/subscribers', cors(), function(req, res, next) {
  var email = req.body.email + '';
  var name = email.split('@');
  var uri = 'https://hooks.zapier.com/hooks/catch/2773572/slszwk/';
  var request = require('request');

  if (validator.validate(email)) {
    request.post({
      url: uri,
      headers: { "Content-Type": "application/json" },
      body: {
        name: name[0],
        email: email
      },
      json:true
    }, function(error, response, body){
      console.log(error);
      console.log(JSON.stringify(response));
      console.log(body);
    });
    res.status(200).send();
  } else {
    res.status(422).send();
  }
});

app.listen(8080, function () {
  console.log('Peatio-tech listening on port 8080!')
})
