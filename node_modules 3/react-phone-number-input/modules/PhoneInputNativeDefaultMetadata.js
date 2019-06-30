'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metadataMin = require('libphonenumber-js/metadata.min.json');

var _metadataMin2 = _interopRequireDefault(_metadataMin);

var _PhoneInputNativeDefaults = require('./PhoneInputNativeDefaults');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Deprecated.
// This is a file used in legacy `/index.js` export entry.
// In some next major version this file will be removed
// and `/index.js` will be redirected to `/min/index.js`.

exports.default = (0, _PhoneInputNativeDefaults.createPhoneInput)(_metadataMin2.default);
//# sourceMappingURL=PhoneInputNativeDefaultMetadata.js.map