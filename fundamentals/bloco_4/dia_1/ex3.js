// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

function compareNumbers(a, b, c) {
  if (a > b && a > c) {
    console.log('A é maior');
  } else if (b > a && b > c) {
    console.log('B é maior');
  } else if (c > a && c > b) {
    console.log('C é maior');
  } else {
    console.log('números inválidos');
  }
}

compareNumbers(4, 3, 2);
