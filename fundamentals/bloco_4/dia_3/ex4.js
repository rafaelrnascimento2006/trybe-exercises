// 4- Depois, faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****

let n = 5;

for (let i = 1; i <= n; i += 2) {
  let line = '';

  for (let index = (n - i) / 2; index > 0; index -= 1) {
    line += ' ';
  }

  for (let index = 0; index < i; index += 1) {
    line += '*';
  }

  console.log(line);
}
