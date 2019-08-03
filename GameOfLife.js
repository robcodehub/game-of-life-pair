class GameOfLife {
  constructor(width, height) {
    this.width = width; // cols
    this.height = height; //rows
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array
   */

  makeBoard() {
    const rowsByColumns = []
    for (let i = 0; i < this.height; i++) {
      rowsByColumns[i] = []
      for (let j = 0; j < this.width; j++) {
        rowsByColumns[i].push(0)
      }
    }
    return rowsByColumns
  }


  getCell(row, col) {
    //Returns the cell value for the given row and col coordinates.

    if (row !== -1 && col !== -1) {
       return this.board[row][col];
    }
    else {
      return 0;
    }

  }

  setCell(value, row, col) {
    // Sets a new value for a cell in the given row and col coordinates

    if (row !== -1 && col !== -1) {
      this.board[row][col] = value
   }

  }

  toggleCell(row, col) {
    // toggle a cell value between dead and alive.

    const val = this.getCell(row, col)
    if (val === 0) {
      this.setCell(1, row, col)
     }
     else {
      this.setCell(0, row, col)
     }
  }

  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
    let livingCount = 0;

    //current cell = this.board[row][col]
    // top Cell = this.board[row-1][col]
    // bottom cell this.board[row+1][col]
    // left cell this.board[row][col-1]
    // right cell this.board[row][col+1]

    // top right cell this.board[row-1][col+1]
    // top left cell this.board[row-1][col-1]
    // bottom right cell this.board[row+1][col+1]
    // bottom left cell this.board[row+1][col-1]


    let topCell = this.getCell(row-1,col);
    let bottomCell = this.getCell(row+1,col);
    let leftCell = this.getCell(row,col-1);
    let rightCell = this.getCell(row,col+1);

    let topRightCell = this.getCell(row-1,col+1);
    let topLeftCell = this.getCell(row-1,col-1);
    let bottomRightCell = this.getCell(row+1,col+1);
    let bottomLeftCell = this.getCell(row+1,col-1);


    livingCount = topCell + bottomCell + leftCell + rightCell + topRightCell + topLeftCell + bottomRightCell + bottomLeftCell;


    //returns living count here
    //return count of living neighbours
    return livingCount;
  }


  /**
   * Given the present board, apply the rules to generate a new board
   */

  tick() {
    const newBoard = this.makeBoard();
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board
    // (the next iteration of the game)
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    this.board = newBoard;
  }
}
