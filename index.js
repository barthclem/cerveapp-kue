
var kue = require('kue');
var express = require('express');
var kueUiExpress =  require('kue-ui-express');
var app = express();

kue.createQueue(
  {
//  redis: {
  //  host: 'localhost',
   // port: 6379
  //}
  redis: 'redis://h:pf9de8653472bcd97e2ac00473d6dd80505495c44b56c08daf3035e42388904ad@ec2-52-5-188-199.compute-1.amazonaws.com:22129'
  }
);

kueUiExpress(app, '/kue/', '/kue-api');

 //// Mount kue JSON api Mount kue JSON api
app.use('/kue-api/', kue.app);

app.listen(3000, () => { console.log(` Server Started (-_-)`);});

