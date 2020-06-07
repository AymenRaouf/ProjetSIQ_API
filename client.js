var fs = require('fs'); 
var https = require('https'); 

var body = JSON.stringify({
    Value1 : 'abc1',
    Value2 : 'abc2',
    Value3 : 'abc3'
})

var options = { 
    hostname: 'localhost', 
    port: 4433, 
    path: '/', 
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
        'Content-Length' : body.length
    },
    key: fs.readFileSync('./certif/client1-key.pem'), 
    cert: fs.readFileSync('./certif/client1-crt.pem'), 
    ca: fs.readFileSync('./certif/ca-crt.pem') 
}; 

var req = https.request(options, function(res) { 
    res.on('data', function(data) { 
        process.stdout.write(data+"\n"); 
    }); 
}); 


req.on('error', function(e) { 
    console.error(e); 
});

req.write(body);
req.end();
