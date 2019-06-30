'use strict';

var _chai = require('chai');

var _closeBraces = require('../source/close braces');

var _closeBraces2 = _interopRequireDefault(_closeBraces);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('close braces', function () {
	it('should close braces', function () {
		(0, _chai.expect)((0, _closeBraces2.default)('8', 'x (xxx) xxx-xx-xx')).to.equal('8');
		(0, _chai.expect)((0, _closeBraces2.default)('8 ', 'x (xxx) xxx-xx-xx')).to.equal('8 ');
		(0, _chai.expect)((0, _closeBraces2.default)('8 (', 'x (xxx) xxx-xx-xx')).to.equal('8 (   )');
		(0, _chai.expect)((0, _closeBraces2.default)('8 (8', 'x (xxx) xxx-xx-xx')).to.equal('8 (8  )');
		(0, _chai.expect)((0, _closeBraces2.default)('8 (80', 'x (xxx) xxx-xx-xx')).to.equal('8 (80 )');
		(0, _chai.expect)((0, _closeBraces2.default)('8 (800', 'x (xxx) xxx-xx-xx')).to.equal('8 (800)');
		(0, _chai.expect)((0, _closeBraces2.default)('8 (800)', 'x (xxx) xxx-xx-xx')).to.equal('8 (800)');
		(0, _chai.expect)((0, _closeBraces2.default)('8 (800) ', 'x (xxx) xxx-xx-xx')).to.equal('8 (800) ');
		(0, _chai.expect)((0, _closeBraces2.default)('8 (800) 5', 'x (xxx) xxx-xx-xx')).to.equal('8 (800) 5');

		(0, _chai.expect)((0, _closeBraces2.default)('8 (8', 'A (AAA) AAA-AA-AA')).to.equal('8 (8AA)');
		(0, _chai.expect)((0, _closeBraces2.default)('8 (8', 'A (AAA) AAA-AA-AA', 'A')).to.equal('8 (8  )');
		(0, _chai.expect)((0, _closeBraces2.default)('8 (8', 'A (AAA) AAA-AA-AA', 'A', '_')).to.equal('8 (8__)');
	});
});
//# sourceMappingURL=close braces.test.js.map