import React, { Component } from 'react'

export class App extends Component {
  // state: {
  //  board: Array(8).fill(0).map(row => new Array(8).fill(' '))
  //   id: null,
  //   state: new,
  //   mines: 10,
  // }

  state = {
    id: 1,
    board: [
      [' 1', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' 2', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' 3', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' 4', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' 5', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' 6', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' 7', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' 8'],
    ],
    mines: 10,
    state: 'new',
  }

  handleClickCell = (row, column) => {
    console.log(`You clicked row ${row} column ${column}}`)
  }

  // figure out how to make menu not show up because that's annoying
  handleRightClick = (row, column) => {
    console.log(`right click at ${row}, ${column}`)
  }

  render() {
    return (
      <div className="everything">
        <h1 className="the top of the page">
          <header>Mineduster</header>
        </h1>
        <h1>
          <button>New Game</button>
        </h1>
        <div className="whole board">
          {this.state.board.map((boardRow, rowIndex) => {
            return boardRow.map((cell, columnIndex) => {
              return (
                <div
                  className="individual cell"
                  key={columnIndex}
                  onClick={() => this.handleClickCell(rowIndex, columnIndex)}
                  onContextMenu={() =>
                    this.handleRightClick(rowIndex, columnIndex)
                  }
                >
                  {cell}
                </div>
              )
            })
          })}
        </div>
      </div>
    )
  }
}

{
  /* <div>
  {this.state.board.map((row, rowId) => (
    return(
      <div className='row'>
        {row.map((cell, columnIndex) => (
          return(
            <div className='cell'></div>
          )
        )))}
      </div>
    )
  ))}
</div> */
}
