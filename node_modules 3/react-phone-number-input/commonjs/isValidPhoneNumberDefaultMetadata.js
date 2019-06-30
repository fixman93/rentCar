'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isValidPhoneNumber;

var _isValidPhoneNumber = require('./isValidPhoneNumber');

var _isValidPhoneNumber2 = _interopRequireDefault(_isValidPhoneNumber);

var _metadataMin = require('libphonenumber-js/metadata.min.json');

var _metadataMin2 = _interopRequireDefault(_metadataMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Deprecated.
// This is a file used in the legacy root `/index.js` export file.
// (importing directly from `react-phone-number-input` is currently deprecated)
// In some next major version this file will be removed
// and `main` and `module` entries in `package.json` will be
// redirected to `/min/index.js` and `/min/index.commonjs.js`
// which don't import this file.

function isValidPhoneNumber() {
	var parameters = Array.prototype.slice.call(arguments);
	parameters.push(_metadataMin2.default);
	return _isValidPhoneNumber2.default.apply(this, parameters);
}
//# sourceMappingURL=isValidPhoneNumberDefaultMetadata.js.map