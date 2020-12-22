// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function biggestName(array) {
  let biggest = '';
  for (let key of array) {
    if (key.length > biggest.length) {
      biggest = key;
    }
  }
  return biggest;
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
