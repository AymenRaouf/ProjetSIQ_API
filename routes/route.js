var express = require('express'),
    Router = express.Router();

Router.post('/', function(req,res){
    console.log(req.body);
    res.sendStatus(200)
})

module.exports = Router;