const { describe, it } = require('node:test');
const { ok } = require('assert');
const { Imaginary } = require('../src/imaginary-number.js');
const { Real } = require('../src/real-number.js');

const minusOne = new Real(-1);
const zero = new Real(0);
const one = new Real(1);
const two = new Real(2);
const three = new Real(3);

describe('Imaginary Number', function () {
  describe('equality', function () {

    it('should be reflective', function () {
      const actual = new Imaginary(two);

      const expected = new Imaginary(two);

      ok(actual.isEqual(expected));
    });
  });

  describe('addition', function () {

    it('should be closed', function () {
      const addend = new Imaginary(two);
      const augend = new Imaginary(one);

      const expected = new Imaginary(three);
      
      const actual = addend.add(augend);
  
      ok(actual.isEqual(expected));
    });

    it('should be commutative', function () {
      const addend = new Imaginary(one);
      const augend = new Imaginary(two);

      const expected = new Imaginary(three);

      const actual = addend.add(augend);

      ok(actual.isEqual(expected));
    });

    it('should provide the original back on identity', function () {
      const number = new Imaginary(two);
      const identity = new Imaginary(zero);

      const expected = number;
  
      const actual = number.add(identity);

      ok(actual.isEqual(expected));
    });  
  });

  describe('subtraction', function () {

    it('should be closed', function () {
      const subtrahend = new Imaginary(two);
      const minuend = new Imaginary(one);

      const expected = new Imaginary(one);
      
      const actual = subtrahend.subtract(minuend);
  
      ok(actual.isEqual(expected));
    });

    it('should not be commutative', function () {
      const subtrahend = new Imaginary(one);
      const minuend = new Imaginary(two);

      const expected = new Imaginary(minusOne);

      const actual = subtrahend.subtract(minuend);

      ok(actual.isEqual(expected));
    });

    it('should provide the original back on identity', function () {
      const number = new Imaginary(two);
      const identity = new Imaginary(zero);

      const expected = number;
  
      const actual = number.subtract(identity);

      ok(actual.isEqual(expected));
    });  
  });

  describe('multiplication', function () {

    it('should not be closed', function () {
      const multiplicand = new Imaginary(two);
      const multiplier = new Imaginary(one);

      const expected = new Real(-2);
      
      const actual = multiplicand.multiply(multiplier);
  
      ok(actual.isEqual(expected));
    });

    it('should be commutative', function () {
      const multiplicand = new Imaginary(one);
      const multiplier = new Imaginary(two);

      const expected = new Real(-2);

      const actual = multiplicand.multiply(multiplier);

      ok(actual.isEqual(expected));
    });

    it('should provide the negation of original back on identity', function () {
      const number = new Imaginary(two);
      const identity = new Imaginary(one);

      const expected = new Real(-2);
  
      const actual = number.multiply(identity);

      ok(actual.isEqual(expected));
    });  
  });
});
