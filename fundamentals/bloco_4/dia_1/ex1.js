// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição
// Subtração
// Multiplicação
// Divisão
// Módulo

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function modulus(a, b) {
  return a % b
}

console.log('Adição = ' + sum(4, 2));
console.log('Subtração = ' + sub(4, 2));
console.log('Multiplicação = ' + mult(4, 2));
console.log('Divisão = ' + div(4, 2));
console.log('Módulo = ' + modulus(4, 2));
