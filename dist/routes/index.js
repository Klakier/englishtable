'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res) {
    res.render('index', {
        title: 'Express'
    });
});

module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksVUFBVSxRQUFRLFNBQVIsQ0FBVjtBQUNKLElBQUksU0FBUyxRQUFRLE1BQVIsRUFBVDs7OztBQUlKLE9BQU8sR0FBUCxDQUFXLEdBQVgsRUFBZ0IsVUFBUyxHQUFULEVBQWMsR0FBZCxFQUFtQjtBQUMvQixRQUFJLE1BQUosQ0FBVyxPQUFYLEVBQW9CO0FBQ2hCLGVBQU8sU0FBUDtLQURKLEVBRCtCO0NBQW5CLENBQWhCOztBQU1BLE9BQU8sT0FBUCxHQUFpQixNQUFqQiIsImZpbGUiOiJyb3V0ZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vKiBHRVQgaG9tZSBwYWdlLiAqL1xuXG5yb3V0ZXIuZ2V0KCcvJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgICByZXMucmVuZGVyKCdpbmRleCcsIHtcbiAgICAgICAgdGl0bGU6ICdFeHByZXNzJ1xuICAgIH0pO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyJdfQ==