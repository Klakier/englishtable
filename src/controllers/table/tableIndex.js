import * as fs from 'fs';
import Router from 'express';
import * as handlebars from 'handlebars';
import * as itemsTransformation from './../../Utils/itemsTransformation';

export function index(req,res) {
    res.render('table.handlebars');
}

export function getResult(req, res) {
    fs.readFile(__dirname + '/views/result.handlebars', 'utf8', function(err, rawTemplate) {
        if (err) {
            return console.error(err);
        }

        var data = itemsTransformation.transform(req.body.dictionary, req.body.elementsPerPage);
        var template = handlebars.compile(rawTemplate);
        var view = template({
            items: data,
            columnNames: req.body.columnNames
        });

        res.append('Content-Type', 'text/html');
        res.send(view);
    });
}