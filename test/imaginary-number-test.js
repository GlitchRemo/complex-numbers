const { describe, it } = require('node:test');
const { ok, strictEqual } = require('assert');
const { Imaginary } = require('../src/imaginary-number.js');
const { Real } = require('../src/real-number.js');

const zero = new Real(0);
const one = new Real(1);
const two = new Real(2);
const three = new Real(3);

describe('Imaginary Number', function () {
  describe('equality', function () {

    it('should be reflexive', function () {
      const x = new Imaginary(two);
      const y = new Imaginary(two);

      const actual = x.isEqual(y);
      const expected = true;

      strictEqual(actual, expected);
    });
  });

  describe('addition', function () {

    it('should be closed', function () {
      const addend = new Imaginary(two);
      const augend = new Imaginary(one);

      const actual = addend.add(augend);
      const expected = new Imaginary(three);
        
      ok(actual.isEqual(expected));
    });

    it('should be commutative', function () {
      const a = new Imaginary(one);
      const b = new Imaginary(two);

      const x = a.add(b);
      const y = b.add(a);

      const actual = x.isEqual(y);
      const expected = true;

      strictEqual(actual, expected);
    });

    it('should provide the original back on identity', function () {
      const number = new Imaginary(two);
      const identity = new Imaginary(zero);

      const actual = number.add(identity);
      const expected = number;

      ok(actual.isEqual(expected));
    });  
  });

  describe('subtraction', function () {

    it('should be closed', function () {
      const subtrahend = new Imaginary(two);
      const minuend = new Imaginary(one);

      const actual = subtrahend.subtract(minuend);
      const expected = new Imaginary(one);
  
      ok(actual.isEqual(expected));
    });

    it('should not be commutative', function () {
      const a = new Imaginary(one);
      const b = new Imaginary(two);

      const x = a.subtract(b);
      const y = b.subtract(a);

      const actual = x.isEqual(y);
      const expected = false;

      strictEqual(actual, expected);
    });

    it('should provide the original back on identity', function () {
      const number = new Imaginary(two);
      const identity = new Imaginary(zero);

      const actual = number.subtract(identity);
      const expected = number;

      ok(actual.isEqual(expected));
    });  
  });

  describe('multiplication', function () {

    it('should not be closed', function () {
      const multiplicand = new Imaginary(two);
      const multiplier = new Imaginary(one);

      const actual = multiplicand.multiply(multiplier);
      const expected = new Real(-2);
  
      ok(actual.isEqual(expected));
    });

    it('should be commutative', function () {
      const a = new Imaginary(one);
      const b = new Imaginary(two);
      
      const x = b.multiply(a);
      const y = a.multiply(b);

      const actual = x.isEqual(y);
      const expected = true;

      strictEqual(actual, expected);
    });

    it('should provide the negation of original back on identity', function () {
      const number = new Imaginary(two);
      const identity = new Imaginary(one);

      const actual = number.multiply(identity);
      const expected = new Real(-2);
  
      ok(actual.isEqual(expected));
    });  
  });
});
