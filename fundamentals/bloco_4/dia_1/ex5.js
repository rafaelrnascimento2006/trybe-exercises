let a = 90;
let b = 60;
let c = 30;

switch (a + b + c) {
  case 180:
    console.log(true);
    break;
  default:
    console.log(false);
    break;
}

if (a <= 0 || b <= 0 || c <= 0) {
  console.log('Números inválidos!')
}
