import React, { Component } from 'react'
import Gameboard from './components/Gameboard'

export class App extends Component {
  state = {
    id: 1,
    // test board to check display
    // board: [
    //   [' 1', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    //   [' ', ' 2', ' ', ' ', ' ', ' ', ' ', ' '],
    //   [' ', ' ', ' 3', ' ', ' ', ' ', ' ', ' '],
    //   [' ', ' ', ' ', ' 4', ' ', ' ', ' ', ' '],
    //   [' ', ' ', ' ', ' ', ' 5', ' ', ' ', ' '],
    //   [' ', ' ', ' ', ' ', ' ', ' 6', ' ', ' '],
    //   [' ', ' ', ' ', ' ', ' ', ' ', ' 7', ' '],
    //   [' ', '9', ' ', ' ', ' ', ' ', ' ', ' 8'],
    // ],
    board: Array(8)
      .fill(0)
      .map(row => new Array(8).fill(' ')),
    mines: 10,
    state: 'new',
  }

  handleNewGame = async () => {
    // new game
    console.log('clicked new game')
    const response = await fetch(
      'https://minesweeper-api.herokuapp.com/games',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
      }
    )
    if (response.status === 200) {
      const game = await response.json()
      console.log(game)
      this.setState(game)
    }
  }

  componentDidMount() {
    this.handleNewGame
  }

  handleClickCell = async (row, column) => {
    console.log(`You clicked row ${row} column ${column}`)
    // const body = "row: row, col: column"
    // const response = await fetch(
    //   api url
    // method: "POST"
    // headers: { 'content-type': 'application.json'},
    // body: JSON.stringify(body)
    // )
    // if (response.status === 200) {
    //   const game = await response.json()
    //   this.setState(game)
    // }
  }

  handleRightClick = async (row, column) => {
    // get rid of popup menu
    event.preventDefault()
    // test
    console.log(`right click at ${row}, ${column}`)
    //add flag
  }

  render() {
    return (
      <div className="everything">
        <h1 className="the top of the page">
          <header>Mineduster</header>
        </h1>
        <h1>
          <button onClick={() => this.handleNewGame()}>New Game</button>
        </h1>
        {/* can move this whole thing to a component:  */}
        {/* change "this.state.kyle" to "this.props.kyle" in component space */}
        <Gameboard
          field={this.state.board}
          leftClick={this.handleClickCell}
          rightClick={this.handleRightClick}
        />
      </div>
    )
  }
}
