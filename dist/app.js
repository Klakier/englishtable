'use strict';

var _tableRoute = require('./routes/table-route');

var table = _interopRequireWildcard(_tableRoute);

var _logger = require('./logger');

var loggers = _interopRequireWildcard(_logger);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var routes = require('./routes/index');
var users = require('./routes/user');

var app = express();

var env = process.env.NODE_ENV || 'development';

app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env === 'development';

// view engine setup
app.engine('handlebars', exphbs({
    defaultLayout: __dirname + '/views/layouts/main',
    partialsDir: [__dirname + '/views/partials/']
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(loggers.httpRequestsLogger);

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', routes);
app.use('/users', users);
app.use('/table', table.app);

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
    });
});

module.exports = app;
//# sourceMappingURL=data:application/json;base64,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b250ZW50IjpbIlxudmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbnZhciBmYXZpY29uID0gcmVxdWlyZSgnc2VydmUtZmF2aWNvbicpO1xudmFyIGNvb2tpZVBhcnNlciA9IHJlcXVpcmUoJ2Nvb2tpZS1wYXJzZXInKTtcbnZhciBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbnZhciBleHBoYnMgPSByZXF1aXJlKCdleHByZXNzLWhhbmRsZWJhcnMnKTtcblxudmFyIHJvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzL2luZGV4Jyk7XG52YXIgdXNlcnMgPSByZXF1aXJlKCcuL3JvdXRlcy91c2VyJyk7XG5cbmltcG9ydCAqIGFzIHRhYmxlIGZyb20gJy4vcm91dGVzL3RhYmxlLXJvdXRlJztcbmltcG9ydCAqIGFzIGxvZ2dlcnMgZnJvbSAnLi9sb2dnZXInO1xuXG52YXIgYXBwID0gZXhwcmVzcygpO1xuXG52YXIgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcblxuYXBwLmxvY2Fscy5FTlYgPSBlbnY7XG5hcHAubG9jYWxzLkVOVl9ERVZFTE9QTUVOVCA9IGVudiA9PT0gJ2RldmVsb3BtZW50JztcblxuLy8gdmlldyBlbmdpbmUgc2V0dXBcbmFwcC5lbmdpbmUoJ2hhbmRsZWJhcnMnLCBleHBoYnMoe1xuICAgIGRlZmF1bHRMYXlvdXQ6IF9fZGlybmFtZSArICcvdmlld3MvbGF5b3V0cy9tYWluJyxcbiAgICBwYXJ0aWFsc0RpcjogW19fZGlybmFtZSArICcvdmlld3MvcGFydGlhbHMvJ11cbn0pKTtcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2hhbmRsZWJhcnMnKTtcbmFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKF9fZGlybmFtZSwgJy92aWV3cycpKTtcblxuLy8gYXBwLnVzZShmYXZpY29uKF9fZGlybmFtZSArICcvcHVibGljL2ltZy9mYXZpY29uLmljbycpKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe1xuICAgIGV4dGVuZGVkOiB0cnVlXG59KSk7XG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcbmFwcC51c2UobG9nZ2Vycy5odHRwUmVxdWVzdHNMb2dnZXIpO1xuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcvcHVibGljJykpKTtcblxuYXBwLnVzZSgnLycsIHJvdXRlcyk7XG5hcHAudXNlKCcvdXNlcnMnLCB1c2Vycyk7XG5hcHAudXNlKCcvdGFibGUnLCB0YWJsZS5hcHApO1xuXG4vLy8gY2F0Y2ggNDA0IGFuZCBmb3J3YXJkIHRvIGVycm9yIGhhbmRsZXJcbmFwcC51c2UoZnVuY3Rpb24gKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignTm90IEZvdW5kJyk7XG4gICAgZXJyLnN0YXR1cyA9IDQwNDtcbiAgICBuZXh0KGVycik7XG59KTtcblxuLy8vIGVycm9yIGhhbmRsZXJzXG5cbi8vIGRldmVsb3BtZW50IGVycm9yIGhhbmRsZXJcbi8vIHdpbGwgcHJpbnQgc3RhY2t0cmFjZVxuXG5pZiAoYXBwLmdldCgnZW52JykgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBhcHAudXNlKGZ1bmN0aW9uIChlcnIsIHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICAgIHJlcy5zdGF0dXMoZXJyLnN0YXR1cyB8fCA1MDApO1xuICAgICAgICByZXMucmVuZGVyKCdlcnJvcicsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlLFxuICAgICAgICAgICAgZXJyb3I6IGVycixcbiAgICAgICAgICAgIHRpdGxlOiAnZXJyb3InXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vLyBwcm9kdWN0aW9uIGVycm9yIGhhbmRsZXJcbi8vIG5vIHN0YWNrdHJhY2VzIGxlYWtlZCB0byB1c2VyXG5hcHAudXNlKGZ1bmN0aW9uIChlcnIsIHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzIHx8IDUwMCk7XG4gICAgcmVzLnJlbmRlcignZXJyb3InLCB7XG4gICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlLFxuICAgICAgICBlcnJvcjoge30sXG4gICAgICAgIHRpdGxlOiAnZXJyb3InXG4gICAgfSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcHA7XG4iXX0=