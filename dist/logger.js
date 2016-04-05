'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logger = undefined;
exports.httpRequestsLogger = httpRequestsLogger;

var _winston = require('winston');

var winston = _interopRequireWildcard(_winston);

var _objectInspections = require('./Utils/objectInspections');

var objectInspections = _interopRequireWildcard(_objectInspections);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/// <reference path="../typings/main.d.ts" />

var logger = exports.logger = new winston.Logger({
    transports: [new winston.transports.Console({
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true
    })]
});

function httpRequestsLogger(req, res, next) {
    logger.info('Request: ' + req.method + ':' + req.path);
    if (!objectInspections.isEmpty(req.params)) {
        logger.debug('\t -- Params:', objectInspections.isDefined(req.params) ? req.params : {});
    }

    if (!objectInspections.isEmpty(req.body)) {
        logger.debug('\t -- Body:', objectInspections.isDefined(req.body) ? req.body : {});
    }
    next();
}

exports.default = logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7UUFnQmdCOztBQWRoQjs7SUFBWTs7QUFDWjs7SUFBWTs7Ozs7O0FBRUwsSUFBSSwwQkFBUyxJQUFJLFFBQVEsTUFBUixDQUFlO0FBQ25DLGdCQUFZLENBQ1IsSUFBSSxRQUFRLFVBQVIsQ0FBbUIsT0FBbkIsQ0FBMkI7QUFDM0IsZUFBTyxPQUFQO0FBQ0EsMEJBQWtCLElBQWxCO0FBQ0EsY0FBTSxLQUFOO0FBQ0Esa0JBQVUsSUFBVjtLQUpKLENBRFEsQ0FBWjtDQURnQixDQUFUOztBQVdKLFNBQVMsa0JBQVQsQ0FBNEIsR0FBNUIsRUFBaUMsR0FBakMsRUFBc0MsSUFBdEMsRUFBNEM7QUFDL0MsV0FBTyxJQUFQLGVBQXdCLElBQUksTUFBSixTQUFjLElBQUksSUFBSixDQUF0QyxDQUQrQztBQUUvQyxRQUFJLENBQUMsa0JBQWtCLE9BQWxCLENBQTBCLElBQUksTUFBSixDQUEzQixFQUF3QztBQUN4QyxlQUFPLEtBQVAsQ0FBYSxlQUFiLEVBQThCLGtCQUFrQixTQUFsQixDQUE0QixJQUFJLE1BQUosQ0FBNUIsR0FBMEMsSUFBSSxNQUFKLEdBQWEsRUFBdkQsQ0FBOUIsQ0FEd0M7S0FBNUM7O0FBSUEsUUFBSSxDQUFDLGtCQUFrQixPQUFsQixDQUEwQixJQUFJLElBQUosQ0FBM0IsRUFBc0M7QUFDdEMsZUFBTyxLQUFQLENBQWEsYUFBYixFQUE0QixrQkFBa0IsU0FBbEIsQ0FBNEIsSUFBSSxJQUFKLENBQTVCLEdBQXdDLElBQUksSUFBSixHQUFXLEVBQW5ELENBQTVCLENBRHNDO0tBQTFDO0FBR0EsV0FUK0M7Q0FBNUM7O2tCQVlRIiwiZmlsZSI6ImxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5cbmltcG9ydCAqIGFzIHdpbnN0b24gZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgKiBhcyBvYmplY3RJbnNwZWN0aW9ucyBmcm9tICcuL1V0aWxzL29iamVjdEluc3BlY3Rpb25zJztcblxuZXhwb3J0IHZhciBsb2dnZXIgPSBuZXcgd2luc3Rvbi5Mb2dnZXIoe1xuICAgIHRyYW5zcG9ydHM6IFtcbiAgICAgICAgbmV3IHdpbnN0b24udHJhbnNwb3J0cy5Db25zb2xlKHtcbiAgICAgICAgICAgIGxldmVsOiAnZGVidWcnLFxuICAgICAgICAgICAgaGFuZGxlRXhjZXB0aW9uczogdHJ1ZSxcbiAgICAgICAgICAgIGpzb246IGZhbHNlLFxuICAgICAgICAgICAgY29sb3JpemU6IHRydWVcbiAgICAgICAgfSlcbiAgICBdXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGh0dHBSZXF1ZXN0c0xvZ2dlcihyZXEsIHJlcywgbmV4dCkge1xuICAgIGxvZ2dlci5pbmZvKGBSZXF1ZXN0OiAke3JlcS5tZXRob2R9OiR7cmVxLnBhdGh9YCk7XG4gICAgaWYgKCFvYmplY3RJbnNwZWN0aW9ucy5pc0VtcHR5KHJlcS5wYXJhbXMpKSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZygnXFx0IC0tIFBhcmFtczonLCBvYmplY3RJbnNwZWN0aW9ucy5pc0RlZmluZWQocmVxLnBhcmFtcykgPyByZXEucGFyYW1zIDoge30pO1xuICAgIH1cblxuICAgIGlmICghb2JqZWN0SW5zcGVjdGlvbnMuaXNFbXB0eShyZXEuYm9keSkpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKCdcXHQgLS0gQm9keTonLCBvYmplY3RJbnNwZWN0aW9ucy5pc0RlZmluZWQocmVxLmJvZHkpID8gcmVxLmJvZHkgOiB7fSk7XG4gICAgfVxuICAgIG5leHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyOyJdfQ==