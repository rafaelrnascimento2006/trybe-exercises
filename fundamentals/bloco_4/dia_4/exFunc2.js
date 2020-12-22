// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function biggestNumberIndex(array) {
  let biggest = 0;
  for(let key in array) {
    if (array[key] > biggest) {
      biggest = key;
    }
  }
  return biggest;
}

console.log(biggestNumberIndex([2, 3, 6, 7, 10, 1]));
