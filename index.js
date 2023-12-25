class Node {
  prev = null;

  coord = null;

  constructor(coord) {
    this.coord = coord;
  }
}

function getMoves(coord) {
  const moves = [];
  // Takes number from a string version of coords
  const x = parseInt(coord[1]);
  const y = parseInt(coord[3]);

  // All possible knight moves
  moves.push([x + 1, y - 2]);
  moves.push([x + 1, y + 2]);
  moves.push([x + 2, y - 1]);
  moves.push([x + 2, y + 1]);
  moves.push([x - 2, y - 1]);
  moves.push([x - 2, y + 1]);
  moves.push([x - 1, y - 2]);
  moves.push([x - 1, y + 2]);

  // Remove out of bound moves
  const validmoves = [];
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    if (!(move[0] < 0 || move[1] < 0) || (move[0] > 8 || move[1] > 8)) {
      validmoves.push(move);
    }
  }
  return validmoves;
}

function knightMoves(start, end) {
  const visited = [];
  const queue = [new Node(start)];
  // Level order search using queue and unexplored moves
  while (queue.length > 0) {
    const current = queue[0];
    visited.push(current);
    if (JSON.stringify(current.coord) === JSON.stringify(end)) {
      break;
    } else {
      const possibleMoves = getMoves(`[${current.coord}]`);
      possibleMoves.forEach((coord) => {
        // Unvisited moves added to the queue
        if (!visited.includes(new Node(coord))) {
          const move = new Node(coord);
          move.prev = current; // All moves link to the previous to reconstruct path later
          queue.push(move);
        }
      });
    }
    queue.shift();
  }

  let temp = visited[visited.length - 1]; // Get the end node
  let path = [];
  let count = 0;
  // Trail back to the start using the prev node links
  while (temp !== null) {
    path.push(temp.coord);
    temp = temp.prev;
    count++;
  }
  // Reconstruct path
  path = path.reverse();
  console.log(`You made it in ${count - 1} moves! Here is the path:`);
  path.forEach((coord) => {
    console.log(coord);
  });
}

knightMoves([3, 0], [4, 3]); // Expected output ([3, 0], [5, 1], [4, 3])
