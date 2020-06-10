var bodyParser = require('body-parser'),
    express = require('express'),
    morgan = require('morgan'),
    helemt = require('helmet'),
    dotenv = require('dotenv'),
    https = require('https'),
    cors = require('cors'),
    hpp = require('hpp'),
    fs = require('fs'),
    app = express();

dotenv.config();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

var routes = require('./routes/route');
app.use(routes);

var options = { 
    key: fs.readFileSync('./certif/server-key.pem'), 
    cert: fs.readFileSync('./certif/server-crt.pem'), 
    ca: fs.readFileSync('./certif/ca-crt.pem'), 
    crl: fs.readFileSync('./certif/ca-crl.pem'), 
    requestCert: true, 
    rejectUnauthorized: true
}; 

var httpsServer = https.createServer(options, app);


var port = process.env.PORT || 4433;
httpsServer.listen(port, function(){
    console.log("Server running on port "+port+" ....")
});