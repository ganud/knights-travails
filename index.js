class Node {
  prev = null;

  coord = null;

  constructor(coord) {
    this.coord = coord;
  }
}

function getMoves(coord) {
  let moves = [];
  let x = parseInt(coord[1]);
  let y = parseInt(coord[3]);
  moves.push([x + 1, y - 2]);
  moves.push([x + 1, y + 2]);
  moves.push([x + 2, y - 1]);
  moves.push([x + 2, y + 1]);
  moves.push([x - 2, y - 1]);
  moves.push([x - 2, y + 1]);
  moves.push([x - 1, y - 2]);
  moves.push([x - 1, y + 2]);
  let validmoves = []
  for (let i = 0; i < moves.length; i++) {
    let move = moves[i]
    if (!(move[0] < 0 || move[1] < 0) || (move[0] > 8 || move[1] > 8)) {
      validmoves.push(move);
    }
  }
  return validmoves;
}

function knightMoves(start, end) {
  let visited = []
  let queue = [start];

  while (queue.length > 0) {
    const current = queue[0];
    visited.push(current);
    if (JSON.stringify(current) === JSON.stringify(end)) {
      console.log('success')
      break;
    }
    else {
      let possibleMoves = getMoves(`[${current}]`);
      possibleMoves.forEach(move => {
        if (!visited.includes(move)) {
          queue.push(move);
        }
      });
    }
    queue.shift();
  }
  console.log(visited)


}

knightMoves([0,0], [1,4]) // Expected output ([1, 2], [3, 3], [1, 4])

