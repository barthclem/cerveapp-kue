
var kue = require('kue');
var express = require('express');
var kueUiExpress =  require('kue-ui-express');
var app = express();

kue.createQueue(
  {
  redis: process.env.REFIS_URL
  }
);

kueUiExpress(app, '/kue/', '/kue-api');

 //// Mount kue JSON api Mount kue JSON api
app.use('/kue-api/', kue.app);

app.listen(3000, () => { console.log(` Server Started (-_-)`);});

