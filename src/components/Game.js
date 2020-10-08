import React, { Component } from 'react';
import Board from './Board'
class Game extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            xIsNext: true,
            squares: Array(9).fill(null)
           /* stemNumber:0,
            history: [
                { squares: Array(9).fill(null) }
            ]*/
        }
    }
     
     handleClick(i){
         //console.log(i);
        // const history = this.state.history.slice(0,this.state.stemNumber+1);
        // const current = history[history.length-1];
        // const squares = current.squares.slice();
         //squares[i] = this.state.xIsNext?'X':'0';
         //   console.log(squares);
         const squares = this.state.squares.slice();
         if(squares[i]===null){
          
         squares[i] = this.state.xIsNext?'X':'0';

         this.setState({

               squares: squares,
            // history: history.concat({
           //      squares: squares 
           //  }),
             xIsNext: !this.state.xIsNext,
             //stepNumber: history.length,
             
         })}else{
         alert("this box is already filled");}
       // console.log(this.state.history);
          
     }
       
    render() {
               //const history = this.state.history;
               //console.log( history);
               //console.log(this.state.stemNumber);
              // const current = history[this.state.stemNumber];
              // console.log(current);
               //console.log(current.squares);
        return(
            <div className="game">
                <div className="game-board">
                    <Board onClick={ (i) => this.handleClick(i)}
                    squares={this.state.squares}/>
                </div>
                
            </div>
        )
    }
}
export default Game;