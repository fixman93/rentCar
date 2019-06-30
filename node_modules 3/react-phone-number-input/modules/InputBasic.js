'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.createInput = createInput;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = require('libphonenumber-js/core');

var _reactLifecyclesCompat = require('react-lifecycles-compat');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// `PureComponent` is only available in React >= 15.3.0.
var PureComponent = _react2.default.PureComponent || _react2.default.Component;

function createInput(defaultMetadata) {
	var _class, _temp2;

	/**
  * `InputBasic`'s caret is not as "smart" as the default `inputComponent`'s
  * but still works good enough. When erasing or inserting digits in the middle
  * of a phone number the caret usually jumps to the end: this is the expected
  * behaviour and it's the workaround for the [Samsung Galaxy smart caret positioning bug](https://github.com/catamphetamine/react-phone-number-input/issues/75).
  */
	var InputBasic = (_temp2 = _class = function (_PureComponent) {
		_inherits(InputBasic, _PureComponent);

		function InputBasic() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, InputBasic);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputBasic.__proto__ || Object.getPrototypeOf(InputBasic)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.onChange = function (event) {
				var onChange = _this.props.onChange;
				var value = _this.state.value;


				var newValue = (0, _core.parseIncompletePhoneNumber)(event.target.value);

				// By default, if a value is something like `"(123)"`
				// then Backspace would only erase the rightmost brace
				// becoming something like `"(123"`
				// which would give the same `"123"` value
				// which would then be formatted back to `"(123)"`
				// and so a user wouldn't be able to erase the phone number.
				// Working around this issue with this simple hack.
				if (newValue === value) {
					if (_this.format(newValue).indexOf(event.target.value) === 0) {
						// Trim the last digit (or plus sign).
						newValue = newValue.slice(0, -1);
					}
				}

				// Prevents React from resetting the `<input/>` caret position.
				// https://github.com/reactjs/react-redux/issues/525#issuecomment-254852039
				// https://github.com/facebook/react/issues/955
				_this.setState({ value: newValue }, function () {
					return onChange(newValue);
				});
			}, _this.onBlur = function (event) {
				var onBlur = _this.props.onBlur;
				var value = _this.state.value;


				if (onBlur) {
					// `event` is React's `SyntheticEvent`.
					// Its `.value` is read-only therefore cloning it.
					var _event = _extends({}, event, {
						target: _extends({}, event.target, {
							value: value
						})

						// Workaround for `redux-form` event detection.
						// https://github.com/erikras/redux-form/blob/v5/src/events/isEvent.js
					});_event.stopPropagation = event.stopPropagation;
					_event.preventDefault = event.preventDefault;

					return onBlur(_event);
				}
			}, _this.focus = function () {
				return _this.input.focus();
			}, _this.storeInput = function (ref) {
				return _this.input = ref;
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(InputBasic, [{
			key: 'format',
			value: function format(value) {
				var _props = this.props,
				    country = _props.country,
				    metadata = _props.metadata;


				return (0, _core.formatIncompletePhoneNumber)(value, country, metadata);
			}
		}, {
			key: 'render',
			value: function render() {
				var _props2 = this.props,
				    onChange = _props2.onChange,
				    onFocus = _props2.onFocus,
				    country = _props2.country,
				    metadata = _props2.metadata,
				    rest = _objectWithoutProperties(_props2, ['onChange', 'onFocus', 'country', 'metadata']);

				// Prevents React from resetting the `<input/>` caret position.
				// https://github.com/reactjs/react-redux/issues/525#issuecomment-254852039
				// https://github.com/facebook/react/issues/955


				var value = this.state.value;


				return _react2.default.createElement('input', _extends({
					type: 'tel',
					autoComplete: 'tel'
				}, rest, {
					ref: this.storeInput,
					value: this.format(value),
					onChange: this.onChange,
					onFocus: onFocus,
					onBlur: this.onBlur }));
			}
		}], [{
			key: 'getDerivedStateFromProps',


			// Prevents React from resetting the `<input/>` caret position.
			// https://github.com/reactjs/react-redux/issues/525#issuecomment-254852039
			// https://github.com/facebook/react/issues/955
			value: function getDerivedStateFromProps(_ref2) {
				var value = _ref2.value;

				return { value: value };
			}

			// This `onBlur` interceptor is a workaround for `redux-form`'s bug
			// so that it gets the up-to-date `value` in its `onBlur` handler.
			// Without this fix it just gets the actual (raw) input field textual value.
			// E.g. `+7 800 555 35 35` instead of `+78005553535`.
			//
			// New `value` is taken from `event` in `redux-form`'s `handleBlur()`.
			// https://github.com/erikras/redux-form/blob/785edf8aac3adc84aba2ab6898a4aa8c48687750/src/ConnectedField.js#L168
			// `redux-form` shouldn't have taken the new `value` from `event`.
			//
			// A developer is not supposed to pass this `onBlur` property manually.
			// Instead, `redux-form` passes `onBlur` to this component automatically
			// and this component patches that `onBlur` handler (a hacky way but works).
			//

		}]);

		return InputBasic;
	}(PureComponent), _class.propTypes = {
		// The parsed phone number.
		// E.g.: `""`, `"+"`, `"+123"`, `"123"`.
		value: _propTypes2.default.string.isRequired,

		// Updates the `value`.
		onChange: _propTypes2.default.func.isRequired,

		// Toggles the `--focus` CSS class.
		// https://github.com/catamphetamine/react-phone-number-input/issues/189
		onFocus: _propTypes2.default.func,

		// `onBlur` workaround for `redux-form`'s bug.
		onBlur: _propTypes2.default.func,

		// A two-letter country code for formatting `value`
		// as a national phone number (e.g. `(800) 555 35 35`).
		// E.g. "US", "RU", etc.
		// If no `country` is passed then `value`
		// is formatted as an international phone number.
		// (e.g. `+7 800 555 35 35`)
		country: _propTypes2.default.string,

		// `libphonenumber-js` metadata.
		metadata: _propTypes2.default.object.isRequired
	}, _class.defaultProps = {
		metadata: defaultMetadata }, _temp2);


	return (0, _reactLifecyclesCompat.polyfill)(InputBasic);
}

exports.default = createInput();
//# sourceMappingURL=InputBasic.js.map