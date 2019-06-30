'use strict';

var _chai = require('chai');

var _edit = require('../source/edit');

var _edit2 = _interopRequireDefault(_edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('edit', function () {
	it('should edit phone numbers', function () {
		(0, _chai.expect)((0, _edit2.default)('88005553535', 0)).to.deep.equal({ value: '88005553535', caret: 0 });
		(0, _chai.expect)((0, _edit2.default)('88005553535', 1)).to.deep.equal({ value: '88005553535', caret: 1 });

		(0, _chai.expect)((0, _edit2.default)('88005553535', 4, 'Delete')).to.deep.equal({ value: '8800553535', caret: 4 });
		(0, _chai.expect)((0, _edit2.default)('88005553535', 4, 'Backspace')).to.deep.equal({ value: '8805553535', caret: 3 });

		// No more lefthand characters to erase
		(0, _chai.expect)((0, _edit2.default)('88005553535', 0, 'Backspace')).to.deep.equal({ value: '88005553535', caret: 0 });
	});
});
//# sourceMappingURL=edit.test.js.map