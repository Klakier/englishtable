"use strict";

// based on https://bost.ocks.org/mike/shuffle/
module.exports = function (array) {
    var m = array.length,
        t,
        i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlV0aWxzL3NodWZmbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsT0FBTyxPQUFQLEdBQWlCLFVBQVUsS0FBVixFQUFpQjtBQUMxQixRQUFJLElBQUksTUFBTSxNQUFOO1FBQWMsQ0FBdEI7UUFBeUIsQ0FBekI7OztBQUQwQixXQUluQixDQUFQLEVBQVU7OztBQUdOLFlBQUksS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWdCLEdBQWhCLENBQWY7OztBQUhNLFNBTU4sR0FBSSxNQUFNLENBQU4sQ0FBSixDQU5NO0FBT04sY0FBTSxDQUFOLElBQVcsTUFBTSxDQUFOLENBQVgsQ0FQTTtBQVFOLGNBQU0sQ0FBTixJQUFXLENBQVgsQ0FSTTtLQUFWOztBQVdBLFdBQU8sS0FBUCxDQWYwQjtDQUFqQiIsImZpbGUiOiJVdGlscy9zaHVmZmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYmFzZWQgb24gaHR0cHM6Ly9ib3N0Lm9ja3Mub3JnL21pa2Uvc2h1ZmZsZS9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgIHZhciBtID0gYXJyYXkubGVuZ3RoLCB0LCBpO1xuXG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxl4oCmXG4gICAgICAgIHdoaWxlIChtKSB7XG5cbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudOKAplxuICAgICAgICAgICAgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG0tLSk7XG5cbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIHQgPSBhcnJheVttXTtcbiAgICAgICAgICAgIGFycmF5W21dID0gYXJyYXlbaV07XG4gICAgICAgICAgICBhcnJheVtpXSA9IHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfTtcblxuIl19