// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function bubbleSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        let position = array[i];

        array[i] = array[j];
        array[j] = position;
      }
    }
  }
  return array;
}

console.log(bubbleSort(numbers));
