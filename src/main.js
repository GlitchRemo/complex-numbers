const makeComplexNumber = function(real, imaginary) {
  const number = {real, imaginary};

  const getRealPart = function() {
    return number.real;
  }

  const getImaginaryPart = function() {
    return number.imaginary;
  }

  const getNumber = function() {
    return number;
  }

  const display = function() {
  }

  return {
    getRealPart,
    getImaginaryPart,
    display,
    getNumber
  };
}

const operate = function(first, second) {

  const add = function() {
    return {
      real: first.real + second.real,
      imaginary: first.imaginary + second.imaginary
    };
  }

  const multiply = function() {
    const real = (first.real * second.real) - (first.imaginary * second.imaginary);
    const imaginary = (first.real * second.imaginary) + (first.imaginary * second.real);

    return {real, imaginary};
  }

  return {add, multiply};
}

exports.makeComplexNumber = makeComplexNumber;
exports.operate = operate;
