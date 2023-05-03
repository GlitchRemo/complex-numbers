const complex = function(real, imaginary) {
  const getRealPart = function() {
    return real;
  }

  const getImaginaryPart = function() {
    return imaginary;
  }

  const add = function(c) {
    const realPart = real + c.getRealPart();
    const imaginaryPart = imaginary + c.getImaginaryPart();

    return complex(realPart, imaginaryPart);
  }

  const multiply = function(c) {
    const r = real;
    const i = imaginary;
    const cr = c.getRealPart();
    const ci = c.getImaginaryPart();

    const realPart = (r * cr) - (i * ci);
    const imaginaryPart = (r * ci) + (i * cr);

    return complex(realPart, imaginaryPart);
  }

  const render = function() {
    if(imaginary === 0) return real;
    if(real === 0) return `${imaginary}i`;
    if(imaginary > 0) return `${real}+${imaginary}i`;

    return `${real}${imaginary}i`;
  }

  return {
    getRealPart,
    getImaginaryPart,
    render, 
    add,
    multiply
  };
}

exports.complex = complex;
