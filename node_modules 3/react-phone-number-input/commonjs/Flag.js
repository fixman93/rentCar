'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _countries = require('./countries');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Default country flag icon.
// `<img/>` is wrapped in a `<div/>` to prevent SVGs from exploding in size in IE 11.
// https://github.com/catamphetamine/react-phone-number-input/issues/111
var FlagComponent = function FlagComponent(_ref) {
	var country = _ref.country,
	    flags = _ref.flags,
	    flagsPath = _ref.flagsPath,
	    className = _ref.className;

	if (flags && flags[country]) {
		return flags[country]();
	}
	return _react2.default.createElement('img', {
		alt: country,
		className: 'react-phone-number-input__icon-image',
		src: '' + flagsPath + (0, _countries.getCountryCodeForFlag)(country).toLowerCase() + '.svg' });
};

FlagComponent.propTypes = {
	// The country to be selected by default.
	// Two-letter country code ("ISO 3166-1 alpha-2").
	country: _propTypes2.default.string.isRequired,

	// Country flag icon components.
	// By default flag icons are inserted as `<img/>`s
	// with their `src` pointed to `flag-icon-css` github repo.
	// There might be cases (e.g. an offline application)
	// where having a large (3 megabyte) `<svg/>` flags
	// bundle is more appropriate.
	// `import flags from 'react-phone-number-input/flags'`.
	flags: _propTypes2.default.objectOf(_propTypes2.default.func),

	// A base URL path for national flag SVG icons.
	// By default it uses the ones from `flag-icon-css` github repo.
	flagsPath: _propTypes2.default.string.isRequired
};

exports.default = FlagComponent;
//# sourceMappingURL=Flag.js.map