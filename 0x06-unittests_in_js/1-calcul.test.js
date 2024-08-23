const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('it should return 6 when the input 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('it should return 6 when the input 1.2 and 3.7', function() {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });
  });
  describe('SUBTRACT', function() {
    it('should return 6 when the input 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
    });
    it('should return -2 when the input 3.2 and 5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.2, 5), -2)
    });
  });
  describe('DIVIDE', function() {
    it('should return 0.2 when the input 1.4 and 4.5', function() {
       assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
    });
    it('should return Error, when divided by 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error')
    });
    it('should return 2, when input is 4.4 and 2', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 4.4, 2), 2)
    });
  });
});