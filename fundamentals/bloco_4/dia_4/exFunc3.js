// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

function lowestNumberIndex(array) {
  let lowest = 0;
  for(let key in array) {
    if (array[key] < lowest) {
      lowest = key;
    }
  }
  return lowest;
}

console.log(lowestNumberIndex([2, 4, 6, 7, 10, 0, -3]))
