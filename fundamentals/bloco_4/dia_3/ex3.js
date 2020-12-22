// 3- Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

let n = 5;

for (let i = 1; i <= n; i += 1) {
  let line = '';

  for (let index = n - i; index > 0; index -= 1) {
    line += ' ';
  }

  for (let index = 0; index < i; index += 1) {
    line += '*';
  }
  console.log(line);
}
