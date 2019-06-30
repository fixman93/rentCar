'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

// Could have been `import { Select } from 'react-responsive-ui'`
// but in that case Webpack bundles the whole `react-responsive-ui` package.


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Select = require('react-responsive-ui/commonjs/Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountrySelectReactResponsiveUI = (_temp = _class = function (_Component) {
	_inherits(CountrySelectReactResponsiveUI, _Component);

	function CountrySelectReactResponsiveUI() {
		_classCallCheck(this, CountrySelectReactResponsiveUI);

		return _possibleConstructorReturn(this, (CountrySelectReactResponsiveUI.__proto__ || Object.getPrototypeOf(CountrySelectReactResponsiveUI)).apply(this, arguments));
	}

	_createClass(CountrySelectReactResponsiveUI, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    name = _props.name,
			    value = _props.value,
			    onChange = _props.onChange,
			    onFocus = _props.onFocus,
			    onBlur = _props.onBlur,
			    options = _props.options,
			    disabled = _props.disabled,
			    tabIndex = _props.tabIndex,
			    className = _props.className,
			    ariaLabel = _props.ariaLabel,
			    saveOnIcons = _props.saveOnIcons,
			    scrollMaxItems = _props.scrollMaxItems,
			    toggleClassName = _props.toggleClassName;


			return _react2.default.createElement(_Select2.default, {
				icon: true,
				name: name,
				value: value,
				onChange: onChange,
				onFocus: onFocus,
				onBlur: onBlur,
				options: options,
				disabled: disabled,
				tabIndex: tabIndex,
				className: className,
				'aria-label': this.props['aria-label'],
				saveOnIcons: saveOnIcons,
				scrollMaxItems: scrollMaxItems,
				toggleClassName: toggleClassName });
		}
	}]);

	return CountrySelectReactResponsiveUI;
}(_react.Component), _class.defaultProps = {
	// If set to `false`, then country flags will be shown
	// for all countries when country `<select/>` is expanded.
	// By default shows flag only for currently selected country.
	// (is `true` by default to save user's traffic
	//  because all flags are about 3 MegaBytes)
	saveOnIcons: true,

	// Toggles the `--focus` CSS class.
	// https://github.com/catamphetamine/react-phone-number-input/issues/189
	onFocus: _propTypes2.default.func,

	// Toggles the `--focus` CSS class.
	// https://github.com/catamphetamine/react-phone-number-input/issues/189
	onBlur: _propTypes2.default.func
}, _temp);
exports.default = CountrySelectReactResponsiveUI;
//# sourceMappingURL=CountrySelectReactResponsiveUI.js.map