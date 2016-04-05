'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _itemsTransformation = require('../Utils/itemsTransformation');

var transformation = _interopRequireWildcard(_itemsTransformation);

var _tableController = require('../controllers/table/table-controller');

var tableController = _interopRequireWildcard(_tableController);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = exports.app = (0, _express2.default)();

/* GET users listing. */
app.get('/', tableController.index);

app.post('/', tableController.getResult);

app.post('/print', function (req, res) {
    res.append('Content-Type', 'text/html');
    res.send('<div>foobar</div>');
});

app.post('/input/table', tableController.tableInput);
app.post('/input/textbox', tableController.textboxInput);

app.engine('handlebars', (0, _expressHandlebars2.default)({
    defaultLayout: __dirname + '/../views/layouts/main',
    partialsDir: [__dirname + '/../controllers/table/views']
}));

app.use(_express2.default.static(_path2.default.join(__dirname, '/../controllers/table/views/public')));

app.set('view engine', 'handlebars');
app.set('views', __dirname + '/../controllers/table/views');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy90YWJsZS1yb3V0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVk7O0FBQ1o7O0lBQVk7O0FBQ1o7Ozs7Ozs7O0FBRU8sSUFBSSxvQkFBTSx3QkFBTjs7O0FBR1gsSUFBSSxHQUFKLENBQVEsR0FBUixFQUFhLGdCQUFnQixLQUFoQixDQUFiOztBQUVBLElBQUksSUFBSixDQUFTLEdBQVQsRUFBYyxnQkFBZ0IsU0FBaEIsQ0FBZDs7QUFFQSxJQUFJLElBQUosQ0FBUyxRQUFULEVBQW1CLFVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUI7QUFDbEMsUUFBSSxNQUFKLENBQVcsY0FBWCxFQUEyQixXQUEzQixFQURrQztBQUVsQyxRQUFJLElBQUosQ0FBUyxtQkFBVCxFQUZrQztDQUFuQixDQUFuQjs7QUFLQSxJQUFJLElBQUosQ0FBUyxjQUFULEVBQXlCLGdCQUFnQixVQUFoQixDQUF6QjtBQUNBLElBQUksSUFBSixDQUFTLGdCQUFULEVBQTJCLGdCQUFnQixZQUFoQixDQUEzQjs7QUFFQSxJQUFJLE1BQUosQ0FBVyxZQUFYLEVBQXlCLGlDQUFXO0FBQ2hDLG1CQUFlLFlBQVksd0JBQVo7QUFDZixpQkFBYSxDQUFDLFlBQVksNkJBQVosQ0FBZDtDQUZxQixDQUF6Qjs7QUFLQSxJQUFJLEdBQUosQ0FBUSxrQkFBUSxNQUFSLENBQWUsZUFBSyxJQUFMLENBQVUsU0FBVixFQUFxQixvQ0FBckIsQ0FBZixDQUFSOztBQUVBLElBQUksR0FBSixDQUFRLGFBQVIsRUFBdUIsWUFBdkI7QUFDQSxJQUFJLEdBQUosQ0FBUSxPQUFSLEVBQWlCLFlBQVksNkJBQVosQ0FBakIiLCJmaWxlIjoicm91dGVzL3RhYmxlLXJvdXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRGaWxlIGZyb20gJ2ZzJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGhhbmRsZWJhcnMgZnJvbSAnZXhwcmVzcy1oYW5kbGViYXJzJztcbmltcG9ydCAqIGFzIHRyYW5zZm9ybWF0aW9uIGZyb20gJy4uL1V0aWxzL2l0ZW1zVHJhbnNmb3JtYXRpb24nO1xuaW1wb3J0ICogYXMgdGFibGVDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL3RhYmxlL3RhYmxlLWNvbnRyb2xsZXInO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmV4cG9ydCB2YXIgYXBwID0gZXhwcmVzcygpO1xuXG4vKiBHRVQgdXNlcnMgbGlzdGluZy4gKi9cbmFwcC5nZXQoJy8nLCB0YWJsZUNvbnRyb2xsZXIuaW5kZXgpO1xuXG5hcHAucG9zdCgnLycsIHRhYmxlQ29udHJvbGxlci5nZXRSZXN1bHQpO1xuXG5hcHAucG9zdCgnL3ByaW50JywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgICByZXMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG4gICAgcmVzLnNlbmQoJzxkaXY+Zm9vYmFyPC9kaXY+Jyk7XG59KTtcblxuYXBwLnBvc3QoJy9pbnB1dC90YWJsZScsIHRhYmxlQ29udHJvbGxlci50YWJsZUlucHV0KTtcbmFwcC5wb3N0KCcvaW5wdXQvdGV4dGJveCcsIHRhYmxlQ29udHJvbGxlci50ZXh0Ym94SW5wdXQpO1xuXG5hcHAuZW5naW5lKCdoYW5kbGViYXJzJywgaGFuZGxlYmFycyh7XG4gICAgZGVmYXVsdExheW91dDogX19kaXJuYW1lICsgJy8uLi92aWV3cy9sYXlvdXRzL21haW4nLFxuICAgIHBhcnRpYWxzRGlyOiBbX19kaXJuYW1lICsgJy8uLi9jb250cm9sbGVycy90YWJsZS92aWV3cyddXG59KSk7XG5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy8uLi9jb250cm9sbGVycy90YWJsZS92aWV3cy9wdWJsaWMnKSkpO1xuXG5hcHAuc2V0KCd2aWV3IGVuZ2luZScsICdoYW5kbGViYXJzJyk7XG5hcHAuc2V0KCd2aWV3cycsIF9fZGlybmFtZSArICcvLi4vY29udHJvbGxlcnMvdGFibGUvdmlld3MnKTsiXX0=