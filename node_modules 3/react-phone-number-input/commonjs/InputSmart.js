'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.createInput = createInput;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _inputFormat = require('input-format');

var _core = require('libphonenumber-js/core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This input uses `input-format` library
 * for "smart" caret positioning.
 */
function createInput(defaultMetadata) {
	var _class, _temp2;

	return _temp2 = _class = function (_Component) {
		_inherits(InputSmart, _Component);

		function InputSmart() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, InputSmart);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputSmart.__proto__ || Object.getPrototypeOf(InputSmart)).call.apply(_ref, [this].concat(args))), _this), _this.focus = function () {
				return _this.input.focus();
			}, _this.storeInput = function (ref) {
				return _this.input = ref;
			}, _this.format = function (value) {
				var _this$props = _this.props,
				    country = _this$props.country,
				    metadata = _this$props.metadata;

				// "As you type" formatter.

				var formatter = new _core.AsYouType(country, metadata);

				// Format the number.
				var text = formatter.input(value);

				return { text: text, template: formatter.getTemplate() };
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(InputSmart, [{
			key: 'render',
			value: function render() {
				var _props = this.props,
				    country = _props.country,
				    metadata = _props.metadata,
				    rest = _objectWithoutProperties(_props, ['country', 'metadata']);

				return _react2.default.createElement(_inputFormat.ReactInput, _extends({}, rest, {
					ref: this.storeInput,
					parse: _core.parsePhoneNumberCharacter,
					format: this.format }));
			}
		}]);

		return InputSmart;
	}(_react.Component), _class.defaultProps = {
		metadata: defaultMetadata
	}, _temp2;
}

exports.default = createInput();
//# sourceMappingURL=InputSmart.js.map