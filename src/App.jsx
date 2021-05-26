import React, { Component } from 'react'

export class App extends Component {
  state = {
    id: 1,
    // these numbers were there for visual purposes while working on css
    // board: [
    //   [' 1', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    //   [' ', ' 2', ' ', ' ', ' ', ' ', ' ', ' '],
    //   [' ', ' ', ' 3', ' ', ' ', ' ', ' ', ' '],
    //   [' ', ' ', ' ', ' 4', ' ', ' ', ' ', ' '],
    //   [' ', ' ', ' ', ' ', ' 5', ' ', ' ', ' '],
    //   [' ', ' ', ' ', ' ', ' ', ' 6', ' ', ' '],
    //   [' ', ' ', ' ', ' ', ' ', ' ', ' 7', ' '],
    //   [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' 8'],
    // ]
    board: Array(8)
      .fill(0)
      .map(row => new Array(8).fill(' ')),
    mines: 10,
    state: 'new',
  }

  handleClickCell = (row, column) => {
    console.log(`You clicked row ${row} column ${column}}`)
    // const body = (row: row, col: column)
    // const response = await fetch(
    //   api url
    // method: "POST"
    // headers: { 'content-type': 'application.json'},
    // body: JSON.stringify(body)
    // )
    // if (response.status === 200) {
    //   const game = await response.json()
    //   this.setState(game)
    }
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
        {/* can move this whole thing to a component:  */}
        {/* change "this.state.kyle" to "this.props.kyle" in component space */}
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
