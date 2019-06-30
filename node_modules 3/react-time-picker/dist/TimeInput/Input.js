"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mergeClassNames = _interopRequireDefault(require("merge-class-names"));

var _utils = require("../shared/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var select = function select(element) {
  return element && element.select();
};

var Input = function Input(_ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      itemRef = _ref.itemRef,
      max = _ref.max,
      min = _ref.min,
      name = _ref.name,
      nameForClass = _ref.nameForClass,
      onChange = _ref.onChange,
      onKeyDown = _ref.onKeyDown,
      placeholder = _ref.placeholder,
      required = _ref.required,
      showLeadingZeros = _ref.showLeadingZeros,
      step = _ref.step,
      value = _ref.value;
  var hasLeadingZero = showLeadingZeros && value !== null && value < 10;
  return [hasLeadingZero && _react.default.createElement("span", {
    key: "leadingZero",
    className: "".concat(className, "__leadingZero")
  }, "0"), _react.default.createElement("input", {
    key: "input",
    autoComplete: "off",
    className: (0, _mergeClassNames.default)("".concat(className, "__input"), "".concat(className, "__").concat(nameForClass || name), hasLeadingZero && "".concat(className, "__input--hasLeadingZero")),
    disabled: disabled,
    name: name,
    max: max,
    min: min,
    onChange: onChange,
    onFocus: function onFocus(event) {
      return select(event.target);
    },
    onKeyDown: onKeyDown,
    onKeyUp: function onKeyUp(event) {
      return (0, _utils.updateInputWidth)(event.target);
    },
    placeholder: placeholder,
    ref: function ref(_ref2) {
      if (_ref2) {
        (0, _utils.updateInputWidth)(_ref2);
      }

      if (itemRef) {
        itemRef(_ref2, name);
      }
    },
    required: required,
    step: step,
    type: "number",
    value: value !== null ? value : ''
  })];
};

Input.propTypes = {
  className: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool,
  itemRef: _propTypes.default.func,
  max: _propTypes.default.number,
  min: _propTypes.default.number,
  onChange: _propTypes.default.func,
  onKeyDown: _propTypes.default.func,
  required: _propTypes.default.bool,
  showLeadingZeros: _propTypes.default.bool,
  step: _propTypes.default.number,
  value: _propTypes.default.number
};
Input.defaultProps = {
  placeholder: '--'
};
var _default = Input;
exports.default = _default;