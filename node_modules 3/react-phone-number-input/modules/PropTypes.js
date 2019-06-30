'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.labels = exports.metadata = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var metadata = exports.metadata = _propTypes2.default.shape({
	country_calling_codes: _propTypes2.default.object.isRequired,
	countries: _propTypes2.default.object.isRequired
});

var labels = exports.labels = _propTypes2.default.objectOf(_propTypes2.default.string);
//# sourceMappingURL=PropTypes.js.map