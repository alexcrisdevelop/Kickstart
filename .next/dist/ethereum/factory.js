'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//create the contract factory instance from the address where is
//stored
//import web3 instance created inside the project
var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0x5513b42d25Ba068bBD59D63bAe3c69d641323E0a');

//import compiled version of the factory
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLEFBQU8sQUFBVTs7OztBQUdqQixBQUFPLEFBQXFCOzs7Ozs7QUFFNUI7QUFDQTtBQVBBO0FBUUEsSUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLElBQVQsQUFBYSxTQUM1QixLQUFBLEFBQUssTUFBTSwwQkFESSxBQUNmLEFBQTJCLFlBRDdCLEFBQWlCLEFBRWYsQUFHRjs7QUFWQTtrQkFVQSxBQUFlIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZXhhbmRyYXBpcmVzL2tpY2tzdGFydCJ9