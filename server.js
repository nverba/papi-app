var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

var pc = require('papic.js');
pc.route(app);
app.use('/papi', express.static(pc.staticPath));

app.use('/', express.static('./public'));

var server = app.listen(process.env.PORT || 3000, function(){
    var addr = server.address();
    console.log("MiS server listening on", addr.address, addr.port);
});