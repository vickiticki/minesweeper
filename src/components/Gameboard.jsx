import React, { Component } from 'react'

class Gameboard extends Component {
  getClassName = cell => {
    switch (cell) {
      case '_':
        return 'isEmpty'
      case 'F':
        return 'isFlag'
      case '*':
        return 'isBomb'
      case '@':
        return 'isFlaggedBomb'
      case '1':
        return 'is1'
      case '2':
        return 'is2'
      case '3':
        return 'is3'
      case '4':
        return 'is4'
      case '5':
        return 'is5'
      case '6':
        return 'is6'
      case '7':
        return 'is7'
      case '8':
        return 'is8'
      default:
        return 'cell'
    }
  }
  render() {
    return (
      <div className="whole board">
        {this.props.field.map((boardRow, rowIndex) => {
          return (
            <div key={rowIndex} className="row">
              {boardRow.map((cell, columnIndex) => {
                return (
                  <div
                    className="individual cell"
                    key={columnIndex}
                    onClick={() => this.props.leftClick(rowIndex, columnIndex)}
                    onContextMenu={() =>
                      this.props.rightClick(rowIndex, columnIndex)
                    }
                  >
                    {cell}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
      //   <ul>
      //   {this.props.unicorn.map((boardRow, rowIndex) => {
      //     return boardRow.map((cell, columnIndex) => {
      //       return (
      //         <li
      //           key={columnIndex}
      //           className={this.getClassName(cell)}
      //           onClick={() => this.props.funcClick(rowIndex, columnIndex)}
      //         >
      //           {cell}
      //         </li>
      //       )
      //     })
      //   })}
      // </ul>
    )
  }
}

export default Gameboard
