import * as fs from 'fs';
import Router from 'express';
import * as handlebars from 'handlebars';
import * as itemsTransformation from './../../Utils/itemsTransformation';
import * as modelTransformation from './js/model-transformation.js';

var generateView = (viewPath, callback) => {
    fs.readFile(__dirname + viewPath, 'utf8', function(err, rawTemplate) {
        if (err) {
            callback(err, null);
        }

        // todo : cache
        var template = handlebars.compile(rawTemplate);
        callback(null, template);
    });
};

export function index(req, res) {
    res.render('table.handlebars');
}

export function getResult(req, res) {
    var data = itemsTransformation.transform(req.body.dictionary, req.body.elementsPerPage);
    var model = {
        items: data,
        columnNames: req.body.columnNames
    };
    generateView('/views/result.handlebars', (err, template) => {
        res.append('Content-Type', 'text/html');
        res.send(template(model));
    });
}

export function tableInput(req, res) {
    generateView('/views/table-input.handlebars', (err, view) => {
        var model = modelTransformation.toTable(req.body.data);
        res.append('Content-Type', 'text/html');
        res.send(view(model));
    });
}

export function textboxInput(req, res) {
    generateView('/views/textbox-input.handlebars', (err, view) => {
        var model = modelTransformation.toText(req.body.data);
        res.append('Content-Type', 'text/html');
        res.send(view(model));
    });
}