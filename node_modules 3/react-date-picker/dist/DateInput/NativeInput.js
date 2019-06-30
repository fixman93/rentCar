"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dates = require("../shared/dates");

var _propTypes2 = require("../shared/propTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NativeInput =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(NativeInput, _PureComponent);

  function NativeInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NativeInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NativeInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "stopPropagation", function (event) {
      return event.stopPropagation();
    });

    return _this;
  }

  _createClass(NativeInput, [{
    key: "render",
    value: function render() {
      var nativeValueParser = this.nativeValueParser;
      var _this$props = this.props,
          disabled = _this$props.disabled,
          maxDate = _this$props.maxDate,
          minDate = _this$props.minDate,
          name = _this$props.name,
          onChange = _this$props.onChange,
          required = _this$props.required,
          value = _this$props.value;
      return _react.default.createElement("input", {
        type: this.nativeInputType,
        disabled: disabled,
        max: maxDate ? nativeValueParser(maxDate) : null,
        min: minDate ? nativeValueParser(minDate) : null,
        name: name,
        onChange: onChange,
        onFocus: this.stopPropagation,
        required: required,
        style: {
          visibility: 'hidden',
          position: 'absolute',
          top: '-9999px',
          left: '-9999px'
        },
        value: value ? nativeValueParser(value) : ''
      });
    }
  }, {
    key: "nativeInputType",
    get: function get() {
      var valueType = this.props.valueType;

      switch (valueType) {
        case 'decade':
        case 'year':
          return 'number';

        case 'month':
          return 'month';

        case 'day':
          return 'date';

        default:
          throw new Error('Invalid valueType.');
      }
    }
  }, {
    key: "nativeValueParser",
    get: function get() {
      var valueType = this.props.valueType;

      switch (valueType) {
        case 'century':
        case 'decade':
        case 'year':
          return _dates.getYear;

        case 'month':
          return _dates.getISOLocalMonth;

        case 'day':
          return _dates.getISOLocalDate;

        default:
          throw new Error('Invalid valueType.');
      }
    }
  }]);

  return NativeInput;
}(_react.PureComponent);

exports.default = NativeInput;
NativeInput.propTypes = {
  disabled: _propTypes.default.bool,
  maxDate: _propTypes2.isMaxDate,
  minDate: _propTypes2.isMinDate,
  name: _propTypes.default.string,
  onChange: _propTypes.default.func,
  required: _propTypes.default.bool,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.instanceOf(Date)]),
  valueType: _propTypes2.isValueType
};