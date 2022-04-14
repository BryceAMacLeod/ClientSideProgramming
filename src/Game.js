import React from 'react';
import { Board } from './Board';
import axios from 'axios';

export class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        puzzleData: []
      }

      this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        axios
            .get(this.props.api)
            .then(response => {
                const data = response.data;
                this.setState({ puzzleData: data.rows });
            });
    }
    handleClick(i, row) {
        
        let puzzleData = this.state.puzzleData.slice();
        switch(puzzleData[row][i].currentState) {
            case 0:
                document.getElementById('t'+row+'-'+i).style.backgroundColor = "blue";
                puzzleData[row][i].currentState = 1;
                break;
            case 1:
                document.getElementById('t'+row+'-'+i).style.backgroundColor = "yellow";
                puzzleData[row][i].currentState = 2;
                break;
            case 2:
                document.getElementById('t'+row+'-'+i).style.backgroundColor = "gray";
                puzzleData[row][i].currentState = 0;
                break;
            default:
                console.error("there was a problem with puzzle colors");
        }
        this.setState({puzzleData})
    }
    handleChange(i) {
         

        let puzzleData = this.state.puzzleData.slice();
        puzzleData.map((row) => {
            return row.map((square) => {
                let theSquare =  document
                .getElementById("t" + puzzleData.indexOf(row) + "-" + row.indexOf(square));
                if(square.canToggle) {
                    if(square.currentState !== square.correctState 
                    && square.currentState !== 0
                    && i.target.checked) {
                        theSquare.style.border = "2px solid red";
                    } else {
                        theSquare.style.border = "inherit";
                    }
                }
                return null;
            })
        })
        
    }
    handleButtonClick(i) {
        let puzzleData = this.state.puzzleData.slice();
        if( (puzzleData.some((row) => {
            return row.some((square) => 
            square.currentState !== square.correctState && square.currentState !== 0);
        }))) {
            // when atleast one piece is incorrect
            alert("Something is wrong");
        }
        // if no piece is incorrect
        else{
            // when every piece is correct
            if((puzzleData.every((row) => {
                return row.every((square) => 
                square.currentState === square.correctState);
            }))) {
                // the puzzle is complete
                alert("You did it!!");
            }
            else{
                // when every piece is not incorrect
                alert("So far so good");
            }
        }
    }
    render() {  
      return (
        <div className="game">
          <div className="game-board">
            <Board 
            puzzleData={this.state.puzzleData}
            onClick={(i, row)=>this.handleClick(i, row)} />
            <label for="checkStatus">Show incorrect squares</label>
            <input name="checkStatus" id="checkStatus" type="checkbox" onChange={(i) => this.handleChange(i)} />
            <div>
                <button name="checkComplete" id="checkComplete" onClick={(i) => this.handleButtonClick(i)}>Check</button>
            </div>
          </div>
        </div>
      );
    }
  }
