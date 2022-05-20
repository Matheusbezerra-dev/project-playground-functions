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
function fizzBuzz(a) {
  let string = [];
  for (let i of a){
    if(i % 3 === 0 && i % 5 === 0);{
      string.push('fizzBuzz');
    }else if(i % 3 === 0){
      string.push('fizz');
    }else if(i % 5 === 0){
      string.push('buzz');
    }else if{
      string.push('bug!');
    };
    return string
  };
    
};


// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

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
