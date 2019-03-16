import React, { Component } from 'react';
import Tile from '../../components/Tile';

// 3 x 3 gameboard
// state = who's turn it is
// state = array of gameboard? update the array when a move is made
// function to check winning combinations - trigger this function after every move

class GameboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 1,
      moves: ['', '', '', '', '', '', '', '', ''],
      winner: ''
    }
  }

  checkIfWinner = () => {
    const moves = this.state.moves;
    if (moves[0] && moves[1] && moves[2] === 1) {
      return this.setState({ winner: "Player 1 wins!!" })
    } else {
      this.selectTile()
      return null;
    }
  }

  selectTile = (id) => {
    if (this.state.moves[id] === 1 || this.state.moves[id] === 2) {
      return null;
    } else {
      var newArray = [...this.state.moves];
      var player = this.state.player;
      newArray.splice(id, 1, player);
      this.setState({ moves: newArray });

      if (player === 1) {
        this.setState({ player: 2 });
      } else {
        this.setState({ player: 1 });
      }
    }

  }

  render() {
    console.log(this.state, 'winner');
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <div>
          Turn: Player {this.state.player}
        </div>
        <p>{this.state.winner}</p>
        <div className="board">
          <Tile selectTile={this.selectTile} id="0" selected={this.state.moves[0]} />
          <Tile selectTile={this.selectTile} id="1" selected={this.state.moves[1]} />
          <Tile selectTile={this.selectTile} id="2" selected={this.state.moves[2]} />
          <Tile selectTile={this.selectTile} id="3" selected={this.state.moves[3]} />
          <Tile selectTile={this.selectTile} id="4" selected={this.state.moves[4]} />
          <Tile selectTile={this.selectTile} id="5" selected={this.state.moves[5]} />
          <Tile selectTile={this.selectTile} id="6" selected={this.state.moves[6]} />
          <Tile selectTile={this.selectTile} id="7" selected={this.state.moves[7]} />
          <Tile selectTile={this.selectTile} id="8" selected={this.state.moves[8]} />
        </div>
      </div>
    )
  }

}

export default GameboardContainer;