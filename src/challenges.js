// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
};

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ')
};

// Desafio 4
function concatName(nomes) {
  return nomes[nomes.length - 1] + ', ' + nomes[0];
};

// Desafio 5
function footballPoints(wins, ties) {
  let a = wins;
  let b = ties;
  return (a * 3) + (b * 1);
};

// Desafio 6
function highestCount(numberMax) {
  let a = numberMax;
  let numberBigger = numberMax[0];
  let sumMax = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] > numberBigger) {
      numberBigger = a[i];
    };
  };
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] === numberBigger) {
      sumMax += 1;
    };
  }; return sumMax;
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }


}

// Desafio 8
function fizzBuzz(div) {
  let returnstring = [];
  for (let number of div) {
    if (number % 3 === 0 && number % 5 === 0) {
      returnstring.push('fizzBuzz');
    } else if (number % 3 === 0) {
      returnstring.push('fizz');
    } else if (number % 5 === 0) {
      returnstring.push('buzz');
    } else {
      returnstring.push('bug!');
    };
  }; return returnstring;
};


// Desafio 9
function encode(text) {
  let codificado = '';
  for (let letter of text) {
    if (letter === 'a') {
      codificado += '1';
    } else if (letter === 'e') {
      codificado += '2';
    } else if (letter === 'i') {
      codificado += '3';
    } else if (letter === 'o') {
      codificado += '4';
    } else if (letter === 'u') {
      codificado += '5';
    } else {
      codificado += letter
    };
  } return codificado;
};
function decode(text2) {
  let decodificado = '';
  for (let numb of text2) {
    if (numb === '1') {
      decodificado += 'a';
    } else if (numb === '2') {
      decodificado += 'e';
    } else if (numb === '3') {
      decodificado += 'i';
    } else if (numb === '4') {
      decodificado += 'o';
    } else if (numb === '5') {
      decodificado += 'u';
    } else {
      decodificado += numb;
    };
  }; return decodificado
};

// Desafio 10
function techList(a, s) {
  let objeto = [];
  a.sort();
  for (let i = 0; i < a.length; i += 1) {
    let objeto1 = {};
    objeto1.tech = a[i];
    objeto1.name = s;
    objeto.push(objeto1);
  }; if (a < 1) {
    return "Vazio!"
  } else {
    return objeto
  };

};

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
