// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function testPositive(number) {
  if (number > 0) {
    console.log('positive');
  } else if (number < 0) {
    console.log('negative');
  } else {
    console.log('zero');
  }
}

testPositive(4);
