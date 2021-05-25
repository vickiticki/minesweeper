import React, { Component } from 'react'

export class App extends Component {
  // state: {
  //  board: Array(8).fill(0).map(row => new Array(8).fill(' '))
  //   id: null,
  //   state: new,
  //   mines: 10,
  // }
  state = {
    board: [
      Array(8)
        .fill(0)
        .map(row => new Array(8).fill(' ')),
    ],
    id: null,
    mines: 10,
  }

  handleClickCell = (row, column) => {
    console.log(`You clicked row ${row} column ${column}}`)
  }
  render() {
    return (
      <div>
        <h1 className="the top of the page">
          <header>Minesweeper</header>
        </h1>
        <h1>
          <button>New Game</button>
        </h1>
        <ul>
          {this.state.board.map((boardRow, rowIndex) => {
            return boardRow.map((cell, columnIndex) => {
              return (
                <li
                  key={columnIndex}
                  onClick={() => this.handleClickCell(rowIndex, columnIndex)}
                >
                  {' '}
                  {cell}
                </li>
              )
            })
          })}
        </ul>
      </div>
    )
  }
}
