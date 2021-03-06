var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

var papiClient = require('papic.js');
papiClient.route(app);

app.use('/papi', express.static(papiClient.staticPath));
app.use('/components', express.static('./components'));
app.use('/material', express.static('./node_modules/material-design-lite/dist'));
app.use('/', express.static('./public'));


var server = app.listen(process.env.PORT || 3000, function(){
    var addr = server.address();
    console.log("MiS server listening on", addr.address, addr.port);
});