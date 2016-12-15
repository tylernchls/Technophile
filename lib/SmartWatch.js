var Tablet = require('./Tablet');
var Watch = require('./Watch');

function SmartWatch() {
  Watch.call(this)
}


function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(SmartWatch.prototype, Tablet.prototype);
extend(SmartWatch.prototype, Watch.prototype);

module.exports = SmartWatch;