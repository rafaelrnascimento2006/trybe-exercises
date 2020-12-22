// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals

function chess(piece) {
  switch (piece.toLowerCase()) {
    case 'king':
      console.log('The king moves one square in any direction.');
      break;
    case 'rook':
      console.log('A rook can move any number of squares along a rank or file.');
      break;
    case 'bishop':
      console.log('A bishop can move any number of squares diagonally.');
      break;
    case 'queen':
      console.log('A queen can move any number of squares along a rank, file, or diagonal.');
      break;
    case 'knight':
      console.log('A knight moves to any of the closest squares that are not on the same rank, file, or diagonal.');
      break;
    case 'pawn':
      console.log('A pawn can move forward to the unoccupied square immediately in front of it on the same file; or the pawn can capture an opponents piece on a square diagonally in front of it on an adjacent file, by moving to that square.');
      break;
    default:
      console.log('invalid piece.')
  }
}

chess('King')
