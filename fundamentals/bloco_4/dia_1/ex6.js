let piece = 'King';

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
