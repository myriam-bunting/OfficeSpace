// Get the queue from  https://github.com/swarup260/Learning_Algorithms/blob/master/data_structure/Queue.js
const { Queue } = require("./queue.js");

let graphAdj;
var visited;
let queue;

const initGraph = (maxVertice) => {
  visited = new Array(maxVertice);
  queue = new Queue();

  for (let i = 0; i < visited.length; i++) {
    visited[i] = false;
  }

  graphAdj = new Array(maxVertice);
  for (let i = 0; i < graphAdj.length; i++) {
    graphAdj[i] = new Array(maxVertice);
  }

  for (let i = 0; i < graphAdj.length; i++) {
    for (let j = 0; j < graphAdj[i].length; j++) {
      graphAdj[i][j] = 0;
    }
  }
};

const printGraph = () => {
  let graphline = " ";
  let i, j;
  for (i = 0; i < graphAdj.length; i++) {
    for (j = 0; j < graphAdj[i].length; j++) {
      graphline += graphAdj[i][j];
      graphline += " ";

      if (j == graphAdj.length - 1) {
        console.log(graphline);
        graphline = " ";
      }
    }
  }
};

const insertGraph = (a, b) => {
  for (let i = 0; i < graphAdj.length; i++) {
    for (let j = 0; j < graphAdj[i].length; j++) {
      if (i === a && j === b) {
        graphAdj[i][j] = 1;
        graphAdj[j][i] = 1;
      }
    }
  }
};

const bfs = (node) => {
  visited[node] = true;
  queue.equeue(node);

  while (!queue.isEmpty()) {
    let visiting = queue.dequeue();

    console.log(`we visited ${visiting}`);
    for (let j = 0; j < graphAdj[visiting].length; j++) {
      if (graphAdj[visiting][j] === 1 && visited[j] === false) {
        visited[j] = true;
        queue.equeue(j);
      }
    }
  }
};

initGraph(19);
// E = {{1, 2}, {1, 5}, {2, 3}, {2, 5}, {3, 4}, {4, 5}, {4, 6}}.
insertGraph(0, 1);
insertGraph(1, 2);
insertGraph(2, 3);
insertGraph(3, 4);
insertGraph(3, 7);
insertGraph(3, 16);
insertGraph(4, 5);
insertGraph(5, 6);
insertGraph(5, 7);
insertGraph(6, 10);
insertGraph(7, 8);
insertGraph(8, 9);
insertGraph(9, 10);
insertGraph(10, 15);
insertGraph(11, 12);
insertGraph(11, 13);
insertGraph(12, 16);
insertGraph(13, 14);
insertGraph(14, 15);
insertGraph(15, 17);

printGraph();

bfs(1);
