const{Imaginary} = require('./imaginary-number.js');
const {Real} = require('./real-number.js');

class Complex {
  #real;
  #imaginary;

  constructor(real, imaginary) {
    this.#real = real;
    this.#imaginary = imaginary;
  }

  isEqual(otherComplex) {
    const areRealEqual = this.#real.isEqual(otherComplex.#real);
    const areImaginaryEqual = this.#imaginary.isEqual(otherComplex.#imaginary);

    return areRealEqual && areImaginaryEqual;
  }

  add(addend) {
    const real = this.#real.add(addend.#real);
    const imaginary = this.#imaginary.add(addend.#imaginary);

    return new Complex(real, imaginary);
  }
}
exports.Complex = Complex;
