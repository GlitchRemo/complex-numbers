const {describe, it} = require('node:test');
const {strictEqual, deepStrictEqual} = require('assert');
const {complex} = require('../src/main.js');

describe('Complex Numbers', function() {

  const first = complex(2, 3);
  const second = complex(5, 4);

  describe('2 + i3', function() {

    it('should have the real part as 2', function() {
      strictEqual(first.getRealPart(), 2);
    });

    it('should have the imaginary part as 3', function() {
      strictEqual(first.getImaginaryPart(), 3);
    });

    it('should be added with a complex number', function() {
      deepStrictEqual(first.add(5, 4), {realPart: 7, imaginaryPart: 7});
    });

    it('should be multiplied with a complex number', function() {
      deepStrictEqual(first.multiply(1, 2), {realPart: -4, imaginaryPart: 7});
    });
  });


  describe('5 + i4', function() {

    it('should have the real part as 5', function() {
      strictEqual(second.getRealPart(), 5);
    });

    it('should have the imaginary part as 4', function() {
      strictEqual(second.getImaginaryPart(), 4);
    });

    it('should be added with a complex number', function() {
      deepStrictEqual(second.add(2, 3), {realPart: 7, imaginaryPart: 7});
    });

    it('should be multiplied with a complex number', function() {
      deepStrictEqual(second.multiply(1, 2), {realPart: -3, imaginaryPart: 14});
    });
  });

});
