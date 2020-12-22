// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

let n = 7;

for (let i = 1; i <= n; i += 2) {
  let line = '';

  for (let index = (n - i) / 2; index > 0; index -= 1) {
    line += ' ';
  }

  for (let index = 0; index < i; index += 1) {
    if (i > 1 && i < n && index !== 0 && index !== i - 1 ) {
      line += ' '
    } else {
      line += '*';
    }
  }
  console.log(line);
}
