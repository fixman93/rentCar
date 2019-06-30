'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PhoneInput = require('./PhoneInput');

var _PhoneInput2 = _interopRequireDefault(_PhoneInput);

var _CountrySelectReactResponsiveUI = require('./CountrySelectReactResponsiveUI');

var _CountrySelectReactResponsiveUI2 = _interopRequireDefault(_CountrySelectReactResponsiveUI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhoneInputReactResponsiveUI = (_temp2 = _class = function (_Component) {
	_inherits(PhoneInputReactResponsiveUI, _Component);

	function PhoneInputReactResponsiveUI() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, PhoneInputReactResponsiveUI);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhoneInputReactResponsiveUI.__proto__ || Object.getPrototypeOf(PhoneInputReactResponsiveUI)).call.apply(_ref, [this].concat(args))), _this), _this.storeInputRef = function (ref) {
			return _this.input = ref;
		}, _this.focus = function () {
			return _this.input.focus();
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	// These two country-select-related properties are
	// implemented as `defaultProps` instead of passing them
	// directly to the `<PhoneInput/>` analogous to how it's
	// implemented in `<PhoneInputNative/>` (see `./PhoneInputNative.js` notes).


	_createClass(PhoneInputReactResponsiveUI, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_PhoneInput2.default, _extends({ ref: this.storeInputRef }, this.props));
		}

		// Proxy `.focus()` method.

	}]);

	return PhoneInputReactResponsiveUI;
}(_react.Component), _class.propTypes = {
	// `<input/>` CSS class.
	// Both for the phone number `<input/>` and
	// the country select autocomplete `<input/>`.
	inputClassName: _propTypes2.default.string,

	// If set to `false`, then country flags will be shown
	// for all countries when country `<select/>` is expanded.
	// By default shows flag only for currently selected country.
	saveOnIcons: _propTypes2.default.bool,

	// `aria-label` for the `<Select/>`'s toggle `<button/>`.
	countrySelectAriaLabel: _propTypes2.default.string,

	// `aria-label` for the `<Select/>`'s "Close" button
	// (which is an "x" visible in fullscreen mode).
	// (not yet implemented but is likely to be).
	countrySelectCloseAriaLabel: _propTypes2.default.string,

	// Defines the height (in items) of the expanded country `<select/>`.
	countrySelectMaxItems: _propTypes2.default.number }, _class.defaultProps = {
	countrySelectComponent: _CountrySelectReactResponsiveUI2.default,
	countrySelectProperties: COUNTRY_SELECT_PROPERTIES,
	getInputClassName: getInputClassName
}, _temp2);
exports.default = PhoneInputReactResponsiveUI;


var COUNTRY_SELECT_PROPERTIES = {
	inputClassName: 'inputClassName',
	saveOnIcons: 'saveOnIcons',
	countrySelectAriaLabel: 'ariaLabel',
	countrySelectCloseAriaLabel: 'closeAriaLabel',
	countrySelectMaxItems: 'maxItems'
};

function getInputClassName(_ref2) {
	var disabled = _ref2.disabled,
	    invalid = _ref2.invalid;

	return (0, _classnames2.default)('rrui__input', 'rrui__input-element', 'rrui__input-field', {
		'rrui__input-field--invalid': invalid,
		'rrui__input-field--disabled': disabled
	});
}
//# sourceMappingURL=PhoneInputReactResponsiveUI.js.map