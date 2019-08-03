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
    //invalid value for row, like board[-1][0], will throw an error

    if (row !== -1 && col !== -1) {
       return this.board[row][col];
    }

  }



  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
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


