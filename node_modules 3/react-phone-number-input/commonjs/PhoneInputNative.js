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

var _CountrySelectNative = require('./CountrySelectNative');

var _CountrySelectNative2 = _interopRequireDefault(_CountrySelectNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhoneInputNative = (_temp2 = _class = function (_Component) {
	_inherits(PhoneInputNative, _Component);

	function PhoneInputNative() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, PhoneInputNative);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhoneInputNative.__proto__ || Object.getPrototypeOf(PhoneInputNative)).call.apply(_ref, [this].concat(args))), _this), _this.storeInputRef = function (ref) {
			return _this.input = ref;
		}, _this.focus = function () {
			return _this.input.focus();
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	// These two country-select-related properties are
	// implemented as `defaultProps` instead of passing them
	// directly to the `<PhoneInput/>` because `<PhoneInputNative/>`
	// is the default export of this library and therefore people pass
	// `countrySelectComponent` property to this `<PhoneInputNative/>` component
	// and when they don't see any changes they might get confused.
	// https://github.com/catamphetamine/react-phone-number-input/issues/229


	_createClass(PhoneInputNative, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_PhoneInput2.default, _extends({ ref: this.storeInputRef }, this.props));
		}

		// Proxy `.focus()` method.

	}]);

	return PhoneInputNative;
}(_react.Component), _class.propTypes = {
	// (optional)
	// Replaces the default country select arrow.
	countrySelectArrowComponent: _propTypes2.default.func }, _class.defaultProps = {
	countrySelectComponent: _CountrySelectNative2.default,
	countrySelectProperties: COUNTRY_SELECT_PROPERTIES
}, _temp2);
exports.default = PhoneInputNative;


var COUNTRY_SELECT_PROPERTIES = {
	countrySelectArrowComponent: 'selectArrowComponent'
};
//# sourceMappingURL=PhoneInputNative.js.map