// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

function compareNumbers(a, b) {
  if (a > b) {
    console.log('A é maior');
  } else if (b > a) {
    console.log('B é maior');
  } else {
    console.log('A e B são iguais');
  }
}

compareNumbers(4, 2);
