Gets the shortest path to a tile on an 8x8 board via a knight chess piece.


Commentary:  
This was surprisingly short, so only one file was needed.
I guess it wasn't a lie that breadth-first search would be useful. Racked my head for an hour to contemplate how the hell a search algorithm would help a knight in chess move around. Still easier than making an actual binary search tree though, somehow.

There's also a callback to linked list traversal to reconstruct the knight path using pointers, which is neat.

![image](https://github.com/ganud/knights-travails/assets/107737568/8718a807-4de5-4714-8307-09f6d75d3db3)
![image](https://github.com/ganud/knights-travails/assets/107737568/6ee74307-b0f9-4648-9681-aa8fc4e374a8)
