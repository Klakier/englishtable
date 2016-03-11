var express = require('express');
var fs = require('fs');
var handlebars = require('handlebars');
var transformation=  require('../Utils/itemsTransformation.js');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('table', { });
});

router.post('/', function(req, res) {
    fs.readFile('views/partials/result-template.handlebars', 'utf8', function(err, raw_template) {
        if(err) {
            return console.error(err);
        }

        var data = transformation(req.body.dictionary, req.body.elementsPerPage);
        var template = handlebars.compile(raw_template);
        var view = template({items: data});
        console.log(view);

        res.append('Content-Type', 'text/html');
        res.send(view);
    });
});

router.post('/print', function(req, res){
    res.append('Content-Type', 'text/html');
    res.send('<div>foobar</div>');
})

module.exports = router;