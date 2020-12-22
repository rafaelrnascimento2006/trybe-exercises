// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

function testRepeated(array) {
  let numberCounter = 0;
  let repeatedCounter = 0;
  let repeated;
  for (let i of array) {
    for (let j of array) {
      if (i === j) {
        numberCounter += 1;
      }
    }
    if (numberCounter > repeatedCounter) {
      repeatedCounter = numberCounter;
      repeated = i;
    }
    numberCounter = 0;
  }
  return repeated;
}

console.log(testRepeated([2, 3, 2, 5, 8, 2, 3]));
