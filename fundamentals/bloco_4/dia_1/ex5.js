// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

function testTriangle(a, b, c) {
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
}

testTriangle(90, 60, 30);
