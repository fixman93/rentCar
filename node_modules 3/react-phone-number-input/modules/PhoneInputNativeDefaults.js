'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createPhoneInput = createPhoneInput;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _default = require('../locale/default.json');

var _default2 = _interopRequireDefault(_default);

var _InternationalIcon = require('./InternationalIcon');

var _InternationalIcon2 = _interopRequireDefault(_InternationalIcon);

var _PropTypes = require('./PropTypes');

var _PhoneInputNative = require('./PhoneInputNative');

var _PhoneInputNative2 = _interopRequireDefault(_PhoneInputNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function createPhoneInput(defaultMetadata) {
	var _class, _temp2;

	return _temp2 = _class = function (_Component) {
		_inherits(PhoneInputNativeDefaults, _Component);

		function PhoneInputNativeDefaults() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, PhoneInputNativeDefaults);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhoneInputNativeDefaults.__proto__ || Object.getPrototypeOf(PhoneInputNativeDefaults)).call.apply(_ref, [this].concat(args))), _this), _this.storeInputRef = function (ref) {
				return _this.input = ref;
			}, _this.render = function () {
				return _react2.default.createElement(_PhoneInputNative2.default, _extends({ ref: _this.storeInputRef }, _this.props));
			}, _this.focus = function () {
				return _this.input.focus();
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		return PhoneInputNativeDefaults;
	}(_react.Component), _class.propTypes = {
		metadata: _PropTypes.metadata.isRequired,
		labels: _PropTypes.labels.isRequired,
		internationalIcon: _propTypes2.default.func.isRequired
	}, _class.defaultProps = {
		metadata: defaultMetadata,
		labels: _default2.default,
		internationalIcon: _InternationalIcon2.default
	}, _temp2;
}

exports.default = createPhoneInput();
//# sourceMappingURL=PhoneInputNativeDefaults.js.map