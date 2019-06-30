'use strict';

var _chai = require('chai');

var _parseDigit = require('../source/parse digit');

var _parseDigit2 = _interopRequireDefault(_parseDigit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('parse digit', function () {
	it('should parse digits', function () {
		(0, _chai.expect)((0, _parseDigit2.default)('')).to.be.undefined;
		(0, _chai.expect)((0, _parseDigit2.default)('a')).to.be.undefined;
		(0, _chai.expect)((0, _parseDigit2.default)('5')).to.equal('5');
		// Arabic digits
		(0, _chai.expect)((0, _parseDigit2.default)('١')).to.equal('1');
	});
});
//# sourceMappingURL=parse digit.test.js.map