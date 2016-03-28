import readFile from 'fs';
import express from 'express';
import handlebars from 'express-handlebars';
import * as transformation from '../Utils/itemsTransformation';
import * as tableController from '../controllers/table/tableIndex';

export var app = express();

/* GET users listing. */
app.get('/', tableController.index);

app.post('/', tableController.getResult);

app.post('/print', function(req, res) {
    res.append('Content-Type', 'text/html');
    res.send('<div>foobar</div>');
});

app.engine('handlebars', handlebars({
    defaultLayout: __dirname + '/../views/layouts/main',
    partialsDir: [__dirname + '/../controllers/table/views/partials']
}));

app.set('view engine', 'handlebars');
app.set('views', __dirname + '/../controllers/table/views');