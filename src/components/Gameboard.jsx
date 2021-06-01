import React, { Component } from 'react'

class Gameboard extends Component {
  getClassName = cell => {
    switch (cell) {
      case '_':
        return 'isEmpty cell'
      case 'F':
        return 'isFlag cell'
      case '*':
        return 'isBomb cell'
      case '@':
        return 'isFlaggedBomb cell'
      // case '1':
      //   return 'is1 cell'
      // case '2':
      //   return 'is2 cell'
      // case '3':
      //   return 'is3 cell'
      // case '4':
      //   return 'is4 cell'
      // case '5':
      //   return 'is5 cell'
      // case '6':
      //   return 'is6 cell'
      // case '7':
      //   return 'is7 cell'
      // case '8':
      //   return 'is8 cell'
      default:
        return 'other cell'
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
                    key={columnIndex}
                    onClick={() => this.props.leftClick(rowIndex, columnIndex)}
                    onContextMenu={() =>
                      this.props.rightClick(rowIndex, columnIndex)
                    }
                    className={this.getClassName(cell)}
                  >
                    {cell}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Gameboard
