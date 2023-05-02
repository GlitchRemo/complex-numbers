const {describe, it} = require('node:test');
const {strictEqual, deepStrictEqual} = require('assert');
const {makeComplexNumber, operate} = require('../src/main.js');

describe('Complex Numbers', function() {

  const firstNumber = makeComplexNumber(2, 3);
  const secondNumber = makeComplexNumber(5, 4);

  describe('Test for 2 + i3', function() {

    it('should get the real part as 2', function() {
      strictEqual(firstNumber.getRealPart(), 2);
    });

    it('should get the imaginary part as 3', function() {
      strictEqual(firstNumber.getImaginaryPart(), 3);
    });
  });


  describe('Test for 5 + i4', function() {

    it('should get the real part as 5', function() {
      strictEqual(secondNumber.getRealPart(), 5);
    });

    it('should get the imaginary part as 4', function() {
      strictEqual(secondNumber.getImaginaryPart(), 4);
    });
  });

  describe('Test for addition', function() {
    const first = firstNumber.getNumber();
    const second = secondNumber.getNumber();
    const operation = operate(first, second);

    it('should add two complex numbers', function() {
      deepStrictEqual(operation.add(), {real: 7, imaginary: 7});
    });

    it('should multiply two complex numbers', function() {
      deepStrictEqual(operation.multiply(), {real: -2, imaginary: 23});
    });
  });
});
