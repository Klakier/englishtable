import * as fs from 'fs';
import Router from 'express';
import * as handlebars from 'handlebars';
import * as itemsTransformation from './../../Utils/itemsTransformation';
import * as modelTransformation from './../../Utils/model-transformation';
import * as objectInspection from './../../Utils/objectInspections';
import logger from '../../logger';

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
    res.render('table.handlebars', {});
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
        var data = (req.body.data) ? req.body.data : [];
        if (!objectInspection.isArray(data)) {
            res.send('Error');
            return;
        }

        var model = {
            rows: data
        };

        res.append('Content-Type', 'text/html');

        logger.debug('Render view table-input with model', model);
        res.send(view(model));
    });
}

export function textboxInput(req, res) {
    generateView('/views/textbox-input.handlebars', (err, view) => {
        var data = (req.body.data) ? req.body.data : [];
        if (!objectInspection.isArray(data)) {
            res.send('Error');
            return;
        }

        var model = modelTransformation.toText(data);
        res.append('Content-Type', 'text/html');
        logger.debug('Render view textbox-input with model', model);
        res.send(view({
            text: model
        }));
    });
}