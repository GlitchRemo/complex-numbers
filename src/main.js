const complex = function(real, imaginary) {
  const number = {real, imaginary};

  const getRealPart = function() {
    return number.real;
  }

  const getImaginaryPart = function() {
    return number.imaginary;
  }

  const add = function(real, imaginary) {
    return {
      realPart: number.real + real,
      imaginaryPart: number.imaginary + imaginary
    }
  }

  const multiply = function(real, imaginary) {
    const realPart = (number.real * real) - (number.imaginary * imaginary);
    const imaginaryPart = (number.real * imaginary) + (number.imaginary * real);

    return {realPart, imaginaryPart};
  }

  const display = function() {

  }

  return {
    getRealPart,
    getImaginaryPart,
    display,
    add,
    multiply
  };
}

exports.complex = complex;
