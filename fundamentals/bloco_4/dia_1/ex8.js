// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

function testEven(a, b, c) {
  let test = false;
  if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    test = true;
  }
  return test;
}

console.log(testEven(4, 3, 2));
