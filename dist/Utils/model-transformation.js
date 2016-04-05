'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.toTable = toTable;
exports.toText = toText;

var _objectInspections = require('./objectInspections');

var objectInspections = _interopRequireWildcard(_objectInspections);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RowSeperator = '\n';
var ColumnsSepartor = '\t';

var isString = function isString(value) {
    return typeof value === 'string' || value instanceof String;
};

var splitWithoutEmptyEntries = function splitWithoutEmptyEntries(array, separtor) {
    return array.split(separtor).filter(function (v) {
        return v;
    });
};
var tryDeduceSeparator = function tryDeduceSeparator(value) {
    var result = [];
    var matches = value.match(/(\s+)/g);
    matches.forEach(function (match) {
        var isTab = match.indexOf('\t') !== -1;
        result.push({
            priority: isTab ? match.length * 4 : match.length,
            value: match
        });
    });

    result.sort(function (a, b) {
        return a.priority < b.priority;
    });

    if (result.length === 0) {
        throw 'Can not deduce separator';
    }
    var separtor = result[0];

    return separtor.value;
};

var normalizeSpace = function normalizeSpace(value) {
    return value.replace(/\s/g, ' ');
};

function toTable(input) {
    if (objectInspections.isArray(input)) {
        return input;
    }

    var result = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = splitWithoutEmptyEntries(input, RowSeperator)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var row = _step.value;

            var rowValue = row.trim();
            if (rowValue === '') {
                continue;
            }
            var separator = tryDeduceSeparator(rowValue);

            var _splitWithoutEmptyEnt = splitWithoutEmptyEntries(row, separator);

            var _splitWithoutEmptyEnt2 = _slicedToArray(_splitWithoutEmptyEnt, 2);

            var left = _splitWithoutEmptyEnt2[0];
            var right = _splitWithoutEmptyEnt2[1];

            left = normalizeSpace(left);
            right = normalizeSpace(right);

            result.push({
                left: left,
                right: right
            });
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return result;
}

function toText(input) {
    if (isString(input)) {
        return input;
    }

    var result = '';

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var row = _step2.value;

            result += row.left + ColumnsSepartor + row.right + RowSeperator;
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlV0aWxzL21vZGVsLXRyYW5zZm9ybWF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBb0NnQjtRQXlCQTs7QUE3RGhCOztJQUFZOzs7O0FBQ1osSUFBTSxlQUFlLElBQWY7QUFDTixJQUFNLGtCQUFrQixJQUFsQjs7QUFFTixJQUFJLFdBQVcsU0FBWCxRQUFXLENBQUMsS0FBRCxFQUFXO0FBQ3RCLFdBQVEsT0FBTyxLQUFQLEtBQWlCLFFBQWpCLElBQTZCLGlCQUFpQixNQUFqQixDQURmO0NBQVg7O0FBSWYsSUFBSSwyQkFBMkIsU0FBM0Isd0JBQTJCLENBQUMsS0FBRCxFQUFRLFFBQVIsRUFBcUI7QUFDaEQsV0FBTyxNQUFNLEtBQU4sQ0FBWSxRQUFaLEVBQXNCLE1BQXRCLENBQTZCO2VBQUs7S0FBTCxDQUFwQyxDQURnRDtDQUFyQjtBQUcvQixJQUFJLHFCQUFxQixTQUFyQixrQkFBcUIsQ0FBQyxLQUFELEVBQVc7QUFDaEMsUUFBSSxTQUFTLEVBQVQsQ0FENEI7QUFFaEMsUUFBSSxVQUFVLE1BQU0sS0FBTixDQUFZLFFBQVosQ0FBVixDQUY0QjtBQUdoQyxZQUFRLE9BQVIsQ0FBZ0IsaUJBQVM7QUFDckIsWUFBSSxRQUFRLE1BQU0sT0FBTixDQUFjLElBQWQsTUFBd0IsQ0FBQyxDQUFELENBRGY7QUFFckIsZUFBTyxJQUFQLENBQVk7QUFDUixzQkFBVSxRQUFRLE1BQU0sTUFBTixHQUFlLENBQWYsR0FBbUIsTUFBTSxNQUFOO0FBQ3JDLG1CQUFPLEtBQVA7U0FGSixFQUZxQjtLQUFULENBQWhCLENBSGdDOztBQVdoQyxXQUFPLElBQVAsQ0FBWSxVQUFDLENBQUQsRUFBSSxDQUFKO2VBQVUsRUFBRSxRQUFGLEdBQWEsRUFBRSxRQUFGO0tBQXZCLENBQVosQ0FYZ0M7O0FBYWhDLFFBQUksT0FBTyxNQUFQLEtBQWtCLENBQWxCLEVBQXFCO0FBQ3JCLGNBQU0sMEJBQU4sQ0FEcUI7S0FBekI7QUFHQSxRQUFJLFdBQVcsT0FBTyxDQUFQLENBQVgsQ0FoQjRCOztBQWtCaEMsV0FBTyxTQUFTLEtBQVQsQ0FsQnlCO0NBQVg7O0FBcUJ6QixJQUFJLGlCQUFpQixTQUFqQixjQUFpQixDQUFDLEtBQUQsRUFBVztBQUM1QixXQUFPLE1BQU0sT0FBTixDQUFjLEtBQWQsRUFBcUIsR0FBckIsQ0FBUCxDQUQ0QjtDQUFYOztBQUlkLFNBQVMsT0FBVCxDQUFpQixLQUFqQixFQUF3QjtBQUMzQixRQUFJLGtCQUFrQixPQUFsQixDQUEwQixLQUExQixDQUFKLEVBQXNDO0FBQ2xDLGVBQU8sS0FBUCxDQURrQztLQUF0Qzs7QUFJQSxRQUFJLFNBQVMsRUFBVCxDQUx1Qjs7Ozs7O0FBTTNCLDZCQUFnQix5QkFBeUIsS0FBekIsRUFBZ0MsWUFBaEMsMkJBQWhCLG9HQUErRDtnQkFBdEQsa0JBQXNEOztBQUMzRCxnQkFBSSxXQUFXLElBQUksSUFBSixFQUFYLENBRHVEO0FBRTNELGdCQUFJLGFBQWEsRUFBYixFQUFpQjtBQUNqQix5QkFEaUI7YUFBckI7QUFHQSxnQkFBSSxZQUFZLG1CQUFtQixRQUFuQixDQUFaLENBTHVEOzt3Q0FNdkMseUJBQXlCLEdBQXpCLEVBQThCLFNBQTlCLEVBTnVDOzs7O2dCQU10RCxpQ0FOc0Q7Z0JBTWhELGtDQU5nRDs7QUFPM0QsbUJBQU8sZUFBZSxJQUFmLENBQVAsQ0FQMkQ7QUFRM0Qsb0JBQVEsZUFBZSxLQUFmLENBQVIsQ0FSMkQ7O0FBVTNELG1CQUFPLElBQVAsQ0FBWTtBQUNSLHNCQUFNLElBQU47QUFDQSx1QkFBTyxLQUFQO2FBRkosRUFWMkQ7U0FBL0Q7Ozs7Ozs7Ozs7Ozs7O0tBTjJCOztBQXNCM0IsV0FBTyxNQUFQLENBdEIyQjtDQUF4Qjs7QUF5QkEsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQzFCLFFBQUksU0FBUyxLQUFULENBQUosRUFBcUI7QUFDakIsZUFBTyxLQUFQLENBRGlCO0tBQXJCOztBQUlBLFFBQUksU0FBUyxFQUFULENBTHNCOzs7Ozs7O0FBTzFCLDhCQUFnQixnQ0FBaEIsd0dBQXVCO2dCQUFkLG1CQUFjOztBQUNuQixzQkFBVSxJQUFJLElBQUosR0FBVyxlQUFYLEdBQTZCLElBQUksS0FBSixHQUFZLFlBQXpDLENBRFM7U0FBdkI7Ozs7Ozs7Ozs7Ozs7O0tBUDBCOztBQVcxQixXQUFPLE1BQVAsQ0FYMEI7Q0FBdkIiLCJmaWxlIjoiVXRpbHMvbW9kZWwtdHJhbnNmb3JtYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBvYmplY3RJbnNwZWN0aW9ucyBmcm9tICcuL29iamVjdEluc3BlY3Rpb25zJztcbmNvbnN0IFJvd1NlcGVyYXRvciA9ICdcXG4nO1xuY29uc3QgQ29sdW1uc1NlcGFydG9yID0gJ1xcdCc7XG5cbnZhciBpc1N0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZyk7XG59O1xuXG52YXIgc3BsaXRXaXRob3V0RW1wdHlFbnRyaWVzID0gKGFycmF5LCBzZXBhcnRvcikgPT4ge1xuICAgIHJldHVybiBhcnJheS5zcGxpdChzZXBhcnRvcikuZmlsdGVyKHYgPT4gdik7XG59O1xudmFyIHRyeURlZHVjZVNlcGFyYXRvciA9ICh2YWx1ZSkgPT4ge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBsZXQgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKC8oXFxzKykvZyk7XG4gICAgbWF0Y2hlcy5mb3JFYWNoKG1hdGNoID0+IHtcbiAgICAgICAgdmFyIGlzVGFiID0gbWF0Y2guaW5kZXhPZignXFx0JykgIT09IC0xO1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBwcmlvcml0eTogaXNUYWIgPyBtYXRjaC5sZW5ndGggKiA0IDogbWF0Y2gubGVuZ3RoLFxuICAgICAgICAgICAgdmFsdWU6IG1hdGNoXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmVzdWx0LnNvcnQoKGEsIGIpID0+IGEucHJpb3JpdHkgPCBiLnByaW9yaXR5KTtcblxuICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93ICdDYW4gbm90IGRlZHVjZSBzZXBhcmF0b3InO1xuICAgIH1cbiAgICB2YXIgc2VwYXJ0b3IgPSByZXN1bHRbMF07XG5cbiAgICByZXR1cm4gc2VwYXJ0b3IudmFsdWU7XG59O1xuXG52YXIgbm9ybWFsaXplU3BhY2UgPSAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxzL2csICcgJyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdG9UYWJsZShpbnB1dCkge1xuICAgIGlmIChvYmplY3RJbnNwZWN0aW9ucy5pc0FycmF5KGlucHV0KSkge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IHJvdyBvZiBzcGxpdFdpdGhvdXRFbXB0eUVudHJpZXMoaW5wdXQsIFJvd1NlcGVyYXRvcikpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnRyaW0oKTtcbiAgICAgICAgaWYgKHJvd1ZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlcGFyYXRvciA9IHRyeURlZHVjZVNlcGFyYXRvcihyb3dWYWx1ZSk7XG4gICAgICAgIHZhciBbbGVmdCwgcmlnaHRdID0gc3BsaXRXaXRob3V0RW1wdHlFbnRyaWVzKHJvdywgc2VwYXJhdG9yKTtcbiAgICAgICAgbGVmdCA9IG5vcm1hbGl6ZVNwYWNlKGxlZnQpO1xuICAgICAgICByaWdodCA9IG5vcm1hbGl6ZVNwYWNlKHJpZ2h0KTtcblxuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9UZXh0KGlucHV0KSB7XG4gICAgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gICAgZm9yIChsZXQgcm93IG9mIGlucHV0KSB7XG4gICAgICAgIHJlc3VsdCArPSByb3cubGVmdCArIENvbHVtbnNTZXBhcnRvciArIHJvdy5yaWdodCArIFJvd1NlcGVyYXRvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufSJdfQ==