const complex = function(real, imaginary) {
  const number = {real, imaginary};

  const getRealPart = function() {
    return number.real;
  }

  const getImaginaryPart = function() {
    return number.imaginary;
  }

  const add = function(real, imaginary) {
    const realPart = number.real + real;
    const imaginaryPart = number.imaginary + imaginary;

    return {realPart, imaginaryPart };
  }

  const multiply = function(real, imaginary) {
    const realPart = (number.real * real) - (number.imaginary * imaginary);
    const imaginaryPart = (number.real * imaginary) + (number.imaginary * real);

    return {realPart, imaginaryPart};
  }

  const display = function() {
    if(real === 0) return `${number.imaginary}i`;
    if(imaginary === 0) return number.real;

    const Sign = number.imaginary > 0 ? '+' : '-';
    const imaginaryPart = Math.abs(number.imaginary);

    return `${number.real} ${Sign} ${imaginaryPart}i`;
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
