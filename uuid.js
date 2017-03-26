// We will pass these to the wrapper function at the end of the file
(function (isNode, isAngular) {
    
// This wrapper function returns the contents of your module, 
// with dependencies
var UUIDModule = function () {
  var UUID = function () {};

  UUID.prototype.v4 = function () { 
    var uuid = '';
    var i;
    var random;
    for (i = 0; i < 21; i++) {
      random = Math.random() * 16 | 0;

      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      }

      if (i === 12) {
        uuid += 4;
      } else {
        uuid += (i === 16 ? (random & 3 | 8) : random).toString(16);
      }
    }
    return uuid + new Date().getTime().toString(16);
  };

  UUID.prototype.validate = function (deviceId) {
    var regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return regex.test(deviceId);
  };

  return new UUID();
};
    
if (isAngular) {
  // AngularJS module definition
  angular.module('uuid', []).
    factory('uuid', [UUIDModule]);
} else if (isNode) {
  // NodeJS module definition
  module.exports = new UUIDModule();
}

})(typeof module !== 'undefined' && module.exports,
  typeof angular !== 'undefined'); 