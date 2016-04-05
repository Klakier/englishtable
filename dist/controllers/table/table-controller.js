'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.index = index;
exports.getResult = getResult;
exports.tableInput = tableInput;
exports.textboxInput = textboxInput;

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _handlebars = require('handlebars');

var handlebars = _interopRequireWildcard(_handlebars);

var _itemsTransformation = require('./../../Utils/itemsTransformation');

var itemsTransformation = _interopRequireWildcard(_itemsTransformation);

var _modelTransformation = require('./../../Utils/model-transformation');

var modelTransformation = _interopRequireWildcard(_modelTransformation);

var _objectInspections = require('./../../Utils/objectInspections');

var objectInspection = _interopRequireWildcard(_objectInspections);

var _logger = require('../../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var generateView = function generateView(viewPath, callback) {
    fs.readFile(__dirname + viewPath, 'utf8', function (err, rawTemplate) {
        if (err) {
            callback(err, null);
        }

        // todo : cache
        var template = handlebars.compile(rawTemplate);
        callback(null, template);
    });
};

function index(req, res) {
    res.render('table.handlebars', {});
}

function getResult(req, res) {
    var data = itemsTransformation.transform(req.body.dictionary, req.body.elementsPerPage);
    var model = {
        items: data,
        columnNames: req.body.columnNames
    };
    generateView('/views/result.handlebars', function (err, template) {
        res.append('Content-Type', 'text/html');
        res.send(template(model));
    });
}

function tableInput(req, res) {
    generateView('/views/table-input.handlebars', function (err, view) {
        var data = req.body.data ? req.body.data : [];
        if (!objectInspection.isArray(data)) {
            res.send('Error');
            return;
        }

        var model = {
            rows: data
        };

        res.append('Content-Type', 'text/html');

        _logger2.default.debug('Render view table-input with model', model);
        res.send(view(model));
    });
}

function textboxInput(req, res) {
    generateView('/views/textbox-input.handlebars', function (err, view) {
        var data = req.body.data ? req.body.data : [];
        if (!objectInspection.isArray(data)) {
            res.send('Error');
            return;
        }

        var model = modelTransformation.toText(data);
        res.append('Content-Type', 'text/html');
        _logger2.default.debug('Render view textbox-input with model', model);
        res.send(view({
            text: model
        }));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3RhYmxlL3RhYmxlLWNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFvQmdCO1FBSUE7UUFZQTtRQW1CQTs7QUF2RGhCOztJQUFZOztBQUNaOzs7O0FBQ0E7O0lBQVk7O0FBQ1o7O0lBQVk7O0FBQ1o7O0lBQVk7O0FBQ1o7O0lBQVk7O0FBQ1o7Ozs7Ozs7O0FBRUEsSUFBSSxlQUFlLFNBQWYsWUFBZSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXdCO0FBQ3ZDLE9BQUcsUUFBSCxDQUFZLFlBQVksUUFBWixFQUFzQixNQUFsQyxFQUEwQyxVQUFTLEdBQVQsRUFBYyxXQUFkLEVBQTJCO0FBQ2pFLFlBQUksR0FBSixFQUFTO0FBQ0wscUJBQVMsR0FBVCxFQUFjLElBQWQsRUFESztTQUFUOzs7QUFEaUUsWUFNN0QsV0FBVyxXQUFXLE9BQVgsQ0FBbUIsV0FBbkIsQ0FBWCxDQU42RDtBQU9qRSxpQkFBUyxJQUFULEVBQWUsUUFBZixFQVBpRTtLQUEzQixDQUExQyxDQUR1QztDQUF4Qjs7QUFZWixTQUFTLEtBQVQsQ0FBZSxHQUFmLEVBQW9CLEdBQXBCLEVBQXlCO0FBQzVCLFFBQUksTUFBSixDQUFXLGtCQUFYLEVBQStCLEVBQS9CLEVBRDRCO0NBQXpCOztBQUlBLFNBQVMsU0FBVCxDQUFtQixHQUFuQixFQUF3QixHQUF4QixFQUE2QjtBQUNoQyxRQUFJLE9BQU8sb0JBQW9CLFNBQXBCLENBQThCLElBQUksSUFBSixDQUFTLFVBQVQsRUFBcUIsSUFBSSxJQUFKLENBQVMsZUFBVCxDQUExRCxDQUQ0QjtBQUVoQyxRQUFJLFFBQVE7QUFDUixlQUFPLElBQVA7QUFDQSxxQkFBYSxJQUFJLElBQUosQ0FBUyxXQUFUO0tBRmIsQ0FGNEI7QUFNaEMsaUJBQWEsMEJBQWIsRUFBeUMsVUFBQyxHQUFELEVBQU0sUUFBTixFQUFtQjtBQUN4RCxZQUFJLE1BQUosQ0FBVyxjQUFYLEVBQTJCLFdBQTNCLEVBRHdEO0FBRXhELFlBQUksSUFBSixDQUFTLFNBQVMsS0FBVCxDQUFULEVBRndEO0tBQW5CLENBQXpDLENBTmdDO0NBQTdCOztBQVlBLFNBQVMsVUFBVCxDQUFvQixHQUFwQixFQUF5QixHQUF6QixFQUE4QjtBQUNqQyxpQkFBYSwrQkFBYixFQUE4QyxVQUFDLEdBQUQsRUFBTSxJQUFOLEVBQWU7QUFDekQsWUFBSSxPQUFPLEdBQUMsQ0FBSSxJQUFKLENBQVMsSUFBVCxHQUFpQixJQUFJLElBQUosQ0FBUyxJQUFULEdBQWdCLEVBQWxDLENBRDhDO0FBRXpELFlBQUksQ0FBQyxpQkFBaUIsT0FBakIsQ0FBeUIsSUFBekIsQ0FBRCxFQUFpQztBQUNqQyxnQkFBSSxJQUFKLENBQVMsT0FBVCxFQURpQztBQUVqQyxtQkFGaUM7U0FBckM7O0FBS0EsWUFBSSxRQUFRO0FBQ1Isa0JBQU0sSUFBTjtTQURBLENBUHFEOztBQVd6RCxZQUFJLE1BQUosQ0FBVyxjQUFYLEVBQTJCLFdBQTNCLEVBWHlEOztBQWF6RCx5QkFBTyxLQUFQLENBQWEsb0NBQWIsRUFBbUQsS0FBbkQsRUFieUQ7QUFjekQsWUFBSSxJQUFKLENBQVMsS0FBSyxLQUFMLENBQVQsRUFkeUQ7S0FBZixDQUE5QyxDQURpQztDQUE5Qjs7QUFtQkEsU0FBUyxZQUFULENBQXNCLEdBQXRCLEVBQTJCLEdBQTNCLEVBQWdDO0FBQ25DLGlCQUFhLGlDQUFiLEVBQWdELFVBQUMsR0FBRCxFQUFNLElBQU4sRUFBZTtBQUMzRCxZQUFJLE9BQU8sR0FBQyxDQUFJLElBQUosQ0FBUyxJQUFULEdBQWlCLElBQUksSUFBSixDQUFTLElBQVQsR0FBZ0IsRUFBbEMsQ0FEZ0Q7QUFFM0QsWUFBSSxDQUFDLGlCQUFpQixPQUFqQixDQUF5QixJQUF6QixDQUFELEVBQWlDO0FBQ2pDLGdCQUFJLElBQUosQ0FBUyxPQUFULEVBRGlDO0FBRWpDLG1CQUZpQztTQUFyQzs7QUFLQSxZQUFJLFFBQVEsb0JBQW9CLE1BQXBCLENBQTJCLElBQTNCLENBQVIsQ0FQdUQ7QUFRM0QsWUFBSSxNQUFKLENBQVcsY0FBWCxFQUEyQixXQUEzQixFQVIyRDtBQVMzRCx5QkFBTyxLQUFQLENBQWEsc0NBQWIsRUFBcUQsS0FBckQsRUFUMkQ7QUFVM0QsWUFBSSxJQUFKLENBQVMsS0FBSztBQUNWLGtCQUFNLEtBQU47U0FESyxDQUFULEVBVjJEO0tBQWYsQ0FBaEQsQ0FEbUM7Q0FBaEMiLCJmaWxlIjoiY29udHJvbGxlcnMvdGFibGUvdGFibGUtY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBoYW5kbGViYXJzIGZyb20gJ2hhbmRsZWJhcnMnO1xuaW1wb3J0ICogYXMgaXRlbXNUcmFuc2Zvcm1hdGlvbiBmcm9tICcuLy4uLy4uL1V0aWxzL2l0ZW1zVHJhbnNmb3JtYXRpb24nO1xuaW1wb3J0ICogYXMgbW9kZWxUcmFuc2Zvcm1hdGlvbiBmcm9tICcuLy4uLy4uL1V0aWxzL21vZGVsLXRyYW5zZm9ybWF0aW9uJztcbmltcG9ydCAqIGFzIG9iamVjdEluc3BlY3Rpb24gZnJvbSAnLi8uLi8uLi9VdGlscy9vYmplY3RJbnNwZWN0aW9ucyc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4uLy4uL2xvZ2dlcic7XG5cbnZhciBnZW5lcmF0ZVZpZXcgPSAodmlld1BhdGgsIGNhbGxiYWNrKSA9PiB7XG4gICAgZnMucmVhZEZpbGUoX19kaXJuYW1lICsgdmlld1BhdGgsICd1dGY4JywgZnVuY3Rpb24oZXJyLCByYXdUZW1wbGF0ZSkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG9kbyA6IGNhY2hlXG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IGhhbmRsZWJhcnMuY29tcGlsZShyYXdUZW1wbGF0ZSk7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHRlbXBsYXRlKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleChyZXEsIHJlcykge1xuICAgIHJlcy5yZW5kZXIoJ3RhYmxlLmhhbmRsZWJhcnMnLCB7fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXN1bHQocmVxLCByZXMpIHtcbiAgICB2YXIgZGF0YSA9IGl0ZW1zVHJhbnNmb3JtYXRpb24udHJhbnNmb3JtKHJlcS5ib2R5LmRpY3Rpb25hcnksIHJlcS5ib2R5LmVsZW1lbnRzUGVyUGFnZSk7XG4gICAgdmFyIG1vZGVsID0ge1xuICAgICAgICBpdGVtczogZGF0YSxcbiAgICAgICAgY29sdW1uTmFtZXM6IHJlcS5ib2R5LmNvbHVtbk5hbWVzXG4gICAgfTtcbiAgICBnZW5lcmF0ZVZpZXcoJy92aWV3cy9yZXN1bHQuaGFuZGxlYmFycycsIChlcnIsIHRlbXBsYXRlKSA9PiB7XG4gICAgICAgIHJlcy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgcmVzLnNlbmQodGVtcGxhdGUobW9kZWwpKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhYmxlSW5wdXQocmVxLCByZXMpIHtcbiAgICBnZW5lcmF0ZVZpZXcoJy92aWV3cy90YWJsZS1pbnB1dC5oYW5kbGViYXJzJywgKGVyciwgdmlldykgPT4ge1xuICAgICAgICB2YXIgZGF0YSA9IChyZXEuYm9keS5kYXRhKSA/IHJlcS5ib2R5LmRhdGEgOiBbXTtcbiAgICAgICAgaWYgKCFvYmplY3RJbnNwZWN0aW9uLmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIHJlcy5zZW5kKCdFcnJvcicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1vZGVsID0ge1xuICAgICAgICAgICAgcm93czogZGF0YVxuICAgICAgICB9O1xuXG4gICAgICAgIHJlcy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcblxuICAgICAgICBsb2dnZXIuZGVidWcoJ1JlbmRlciB2aWV3IHRhYmxlLWlucHV0IHdpdGggbW9kZWwnLCBtb2RlbCk7XG4gICAgICAgIHJlcy5zZW5kKHZpZXcobW9kZWwpKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRleHRib3hJbnB1dChyZXEsIHJlcykge1xuICAgIGdlbmVyYXRlVmlldygnL3ZpZXdzL3RleHRib3gtaW5wdXQuaGFuZGxlYmFycycsIChlcnIsIHZpZXcpID0+IHtcbiAgICAgICAgdmFyIGRhdGEgPSAocmVxLmJvZHkuZGF0YSkgPyByZXEuYm9keS5kYXRhIDogW107XG4gICAgICAgIGlmICghb2JqZWN0SW5zcGVjdGlvbi5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICByZXMuc2VuZCgnRXJyb3InKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtb2RlbCA9IG1vZGVsVHJhbnNmb3JtYXRpb24udG9UZXh0KGRhdGEpO1xuICAgICAgICByZXMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZygnUmVuZGVyIHZpZXcgdGV4dGJveC1pbnB1dCB3aXRoIG1vZGVsJywgbW9kZWwpO1xuICAgICAgICByZXMuc2VuZCh2aWV3KHtcbiAgICAgICAgICAgIHRleHQ6IG1vZGVsXG4gICAgICAgIH0pKTtcbiAgICB9KTtcbn0iXX0=