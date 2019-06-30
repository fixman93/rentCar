'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = formatPhoneNumber;
exports.formatPhoneNumberIntl = formatPhoneNumberIntl;

var _formatPhoneNumber = require('./formatPhoneNumber');

var _formatPhoneNumber2 = _interopRequireDefault(_formatPhoneNumber);

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

function formatPhoneNumber() {
	var parameters = Array.prototype.slice.call(arguments);
	parameters.push(_metadataMin2.default);
	return _formatPhoneNumber2.default.apply(this, parameters);
}

function formatPhoneNumberIntl() {
	var parameters = Array.prototype.slice.call(arguments);
	parameters.push(_metadataMin2.default);
	return _formatPhoneNumber.formatPhoneNumberIntl.apply(this, parameters);
}
//# sourceMappingURL=formatPhoneNumberDefaultMetadata.js.map