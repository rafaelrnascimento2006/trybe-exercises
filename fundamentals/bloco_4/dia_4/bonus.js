function convertRomanNumerals(romanNumeral) {
  let romanValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let numbersArray = [];
  let result = 0;
  for (let key in romanNumeral) {
    numbersArray[key] = romanValue[romanNumeral[key]];
  }
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] < numbersArray[index + 1]) {
      numbersArray[index + 1] = numbersArray[index + 1] - numbersArray[index];
    } else {
      result += numbersArray[index];
    }
  }
  return result;
}
console.log(convertRomanNumerals('MMXX'));