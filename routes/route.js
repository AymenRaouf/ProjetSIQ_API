var express = require('express'),
    Router = express.Router(),
    {fillDB} = require('../controllers/controller');

Router.post('/', function(req,res){
    fillDB(req.body);
    res.sendStatus(200)
})

module.exports = Router;