// inicio section que retorna o valor inteiro mais proximo baseado no numero fracionado informado
const round = document.querySelector('#round');
const res = document.querySelector('.resRounded');
const buttonRound = document.querySelector('#buttonRound');

function rounded(round) {
  return Math.round(round);
}
buttonRound.addEventListener('click', function () {
  if (round == '') {
    alert('VocÊ deve informar um número válido');
  } else {
    res.innerHTML =
      'O resultado da operação é:  ' + Number(rounded(round.value));
  }
});
// fim section que retorna o valor inteiro mais proximo baseado no numero fracionado informado

// inicio section 2 
const pow = document.querySelector('#pow');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const resPow = document.querySelector('.resPow')
function mathPow(x, y) {
  return Math.pow(x, y)
}
pow.addEventListener('click', function () {
  if (input1 == '' && input2 == '') {
    alert('VocÊ deve informar um número válido');
  } else {
    resPow.innerHTML =
      'O resultado da operação é:  ' + Number(mathPow(input1.value, input2.value));
  }
});
// fim section 2 

// inicio section 3
const calcCircle = document.querySelector('#calcCircle');
const input3 = document.querySelector('#input3');
const resCircle = document.querySelector('.resCircle')
function circuloCircunferencia(radius) {
  return (2 * Math.PI.toFixed(2)) * radius
}
function circuloArea(radius) {
  return Math.PI.toFixed(2) * Math.pow(radius, 2)
}
calcCircle.addEventListener('click', function () {
  if (input3 == '') {
    alert('VocÊ deve informar um número válido');
  } else {
    resCircle.innerHTML =
      'O cálculo da circunferência do circulo é:  ' + Number(circuloCircunferencia(input3.value).toFixed(2)) + ' O cálculo da área do circulo e: ' + Number(circuloArea(input3.value).toFixed(2));
  }
});
// fim section 3

// inicio section 4
const calcCubo = document.querySelector('#calcCubo');
const input4 = document.querySelector('#input4');
const resCubo = document.querySelector('.resCubo')
function baseArea(area) {
  return Math.pow(area, 2)
}
function totalArea(area) {
  return baseArea(area) * 6
}
function totalValue(area) {
  return Math.pow(area, 3)
}
calcCubo.addEventListener('click', function () {
  if (input4 == '') {
    alert('VocÊ deve informar um número válido');
  } else {
    resCubo.innerHTML =
      'O cálculo da área da base de um cubo é:  ' + Number(baseArea(input4.value).toFixed(2)) + ' O cálculo da área total do cubo é: ' + Number(totalArea(input4.value).toFixed(2)) + ' O calculo do volume do cubo é: ' + Number(totalValue(input4.value).toFixed(2)) ;
  }
});
// fim section 4

// inicio section 5

const calcRaiz = document.querySelector('#calcRaiz');
const input5 = document.querySelector('#input5');
const resRaiz = document.querySelector('.resRaiz')
function mathSqrt(value) {
  return Math.sqrt(value)
}
calcRaiz.addEventListener('click', function () {
  if (input1 == '' && input2 == '') {
    alert('VocÊ deve informar um número válido');
  } else {
    resRaiz.innerHTML =
      'O resultado da operação é:  ' + Number(mathSqrt(input5.value).toFixed(2));
  }
});

// fim section 5