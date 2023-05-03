const {describe, it} = require('node:test');
const {strictEqual, deepStrictEqual} = require('assert');
const {complex} = require('../src/main.js');

describe('Complex Numbers', function() {

  describe('2 + i3', function() {
    it('should have the real part as 2', function() {
      const number = complex(2, 3);
      strictEqual(number.getRealPart(), 2);
    });

    it('should have the imaginary part as 3', function() {
      const number = complex(2, 3);
      strictEqual(number.getImaginaryPart(), 3);
    });

    it('should render a complex number', function() {
      const number = complex(2, 3);
      strictEqual(number.render(), '2+3i');
    });

    it('should be added with a complex number', function() {
      const addend = complex(2, 3);
      const augend = complex(5, 4);

      const sum = addend.add(augend);

      strictEqual(sum.getRealPart(), 7);
      strictEqual(sum.getImaginaryPart(), 7);
    });

    it('should be multiplied with a complex number', function() {
      const multiplicand = complex(2, 3);
      const multiplier = complex(5, 4);

      const product = multiplicand.multiply(multiplier);

      strictEqual(product.getRealPart(), -2);
      strictEqual(product.getImaginaryPart(), 23);
    });
  });

});
