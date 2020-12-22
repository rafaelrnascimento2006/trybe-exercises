// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

function testOdd(a, b, c) {
  let test = false;
  if (a % 2 === 1 || b % 2 === 1 || c % 2 === 1) {
    test = true;
  }
  return test;
}

console.log(testOdd(4, 3, 2));
