'use strict';

var _inputControl = require('./input control');

var _dom = require('./dom');

var _templateParser = require('./template parser');

var _templateParser2 = _interopRequireDefault(_templateParser);

var _templateFormatter = require('./template formatter');

var _templateFormatter2 = _interopRequireDefault(_templateFormatter);

var _parseDigit = require('./parse digit');

var _parseDigit2 = _interopRequireDefault(_parseDigit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// US phone number template
var TEMPLATE = '(xxx) xxx-xxxx';
var parse = (0, _templateParser2.default)(TEMPLATE, _parseDigit2.default);
var format = (0, _templateFormatter2.default)(TEMPLATE);

describe('input control', function () {
	it('should handle onChange', function () {
		var input = {
			value: '1234567-',
			selectionStart: 5,
			selectionEnd: 6,
			setSelectionRange: function setSelectionRange(position) {
				this.selectionStart = position;
			}
		};

		var value = void 0;
		var on_change = function on_change(_) {
			return value = _;
		};

		(0, _inputControl.onChange)({}, input, parse, format, on_change);

		expect(input.value).to.equal('(123) 456-7');
		expect(input.selectionStart).to.equal(8);
		expect(value).to.equal('1234567');
	});

	it('should handle onCut', function (done) {
		var input = {
			value: '1234567-',
			selectionStart: 5,
			selectionEnd: 6,
			setSelectionRange: function setSelectionRange(position) {
				this.selectionStart = position;
			}
		};

		var value = void 0;
		var on_change = function on_change(_) {
			return value = _;
		};

		(0, _inputControl.onCut)({}, input, parse, format, on_change);

		setTimeout(function () {
			expect(input.value).to.equal('(123) 456-7');
			expect(input.selectionStart).to.equal(8);
			expect(value).to.equal('1234567');
			done();
		}, 0);
	});

	it('should handle onPaste', function () {
		var input = {
			value: '1234567-',
			selectionStart: 5,
			selectionEnd: 5,
			setSelectionRange: function setSelectionRange(position) {
				this.selectionStart = position;
			}
		};

		var value = void 0;
		var on_change = function on_change(_) {
			return value = _;
		};

		(0, _inputControl.onPaste)({}, input, parse, format, on_change);

		expect(input.value).to.equal('(123) 456-7');
		expect(input.selectionStart).to.equal(8);
		expect(value).to.equal('1234567');
	});

	it('should handle onPaste (with selection)', function () {
		var input = {
			value: '1234567-',
			selectionStart: 5,
			selectionEnd: 6,
			setSelectionRange: function setSelectionRange(position) {
				this.selectionStart = position;
			}
		};

		var value = void 0;
		var on_change = function on_change(_) {
			return value = _;
		};

		(0, _inputControl.onPaste)({}, input, parse, format, on_change);

		expect(input.value).to.equal('(123) 457');
		expect(input.selectionStart).to.equal(8);
		expect(value).to.equal('123457');
	});

	it('should not handle onKeyDown', function () {
		var input = {
			value: '1234567-',
			selectionStart: 5,
			selectionEnd: 6,
			setSelectionRange: function setSelectionRange(position) {
				this.selectionStart = position;
			}
		};

		var value = void 0;
		var on_change = function on_change(_) {
			return value = _;
		};

		(0, _inputControl.onKeyDown)({}, input, parse, format, on_change);

		expect(input.value).to.equal('1234567-');
		expect(input.selectionStart).to.equal(5);
		expect(value).to.be.undefined;
	});

	it('should handle onKeyDown (Delete)', function () {
		var input = {
			value: '1234567-',
			selectionStart: 5,
			selectionEnd: 5,
			setSelectionRange: function setSelectionRange(position) {
				this.selectionStart = position;
			}
		};

		var event = {
			keyCode: _dom.Keys.Delete,
			preventDefault: function preventDefault() {}
		};

		var value = void 0;
		var on_change = function on_change(_) {
			return value = _;
		};

		(0, _inputControl.onKeyDown)(event, input, parse, format, on_change);

		expect(input.value).to.equal('(123) 457');
		expect(input.selectionStart).to.equal(8);
		expect(value).to.equal('123457');
	});

	it('should handle onKeyDown (Backspace)', function () {
		var input = {
			value: '1234567-',
			selectionStart: 5,
			selectionEnd: 5,
			setSelectionRange: function setSelectionRange(position) {
				this.selectionStart = position;
			}
		};

		var event = {
			keyCode: _dom.Keys.Backspace,
			preventDefault: function preventDefault() {}
		};

		var value = void 0;
		var on_change = function on_change(_) {
			return value = _;
		};

		(0, _inputControl.onKeyDown)(event, input, parse, format, on_change);

		expect(input.value).to.equal('(123) 467');
		expect(input.selectionStart).to.equal(7);
		expect(value).to.equal('123467');
	});

	it('should handle onKeyDown (Backspace with selection)', function () {
		var input = {
			value: '1234567-',
			selectionStart: 4,
			selectionEnd: 6,
			setSelectionRange: function setSelectionRange(position) {
				this.selectionStart = position;
			}
		};

		var event = {
			keyCode: _dom.Keys.Backspace,
			preventDefault: function preventDefault() {}
		};

		var value = void 0;
		var on_change = function on_change(_) {
			return value = _;
		};

		(0, _inputControl.onKeyDown)(event, input, parse, format, on_change);

		expect(input.value).to.equal('(123) 47');
		expect(input.selectionStart).to.equal(7);
		expect(value).to.equal('12347');
	});

	it('should handle onKeyDown (Delete with selection)', function () {
		var input = {
			value: '1234567-',
			selectionStart: 4,
			selectionEnd: 6,
			setSelectionRange: function setSelectionRange(position) {
				this.selectionStart = position;
			}
		};

		var event = {
			keyCode: _dom.Keys.Delete,
			preventDefault: function preventDefault() {}
		};

		var value = void 0;
		var on_change = function on_change(_) {
			return value = _;
		};

		(0, _inputControl.onKeyDown)(event, input, parse, format, on_change);

		expect(input.value).to.equal('(123) 47');
		expect(input.selectionStart).to.equal(7);
		expect(value).to.equal('12347');
	});
});
//# sourceMappingURL=input control.test.js.map