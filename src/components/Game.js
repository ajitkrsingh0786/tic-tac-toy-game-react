import React, { Component } from 'react';
import Board from './Board'
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {

            xIsNext: true,
            squares: Array(9).fill(null)

        }
    }

    handleClick(i) {

        const squares = this.state.squares.slice();
        if (squares[i] === null) {
            squares[i] = this.state.xIsNext ? 'X' : '0';
            let time = 150;
            if (squares[0] === squares[1] && squares[0] === squares[2] && squares[0] !== null) {

                this.setState({
                    squares: squares,
                    xIsNext: !this.state.xIsNext,
                })

                setTimeout(() => {
                    alert(squares[i] === 'X' ? "First player has won" : "Second player has won");
                    this.setState({
                        squares: Array(9).fill(null),
                        xIsNext: true,
                    });
                }, time);

            } else if (squares[3] === squares[4] && squares[3] === squares[5] && squares[3] !== null) {
                this.setState({
                    squares: squares,
                    xIsNext: !this.state.xIsNext,
                })


                setTimeout(() => {
                    alert(squares[i] === 'X' ? "First player has won" : "Second player has won");
                    this.setState({
                        squares: Array(9).fill(null),
                        xIsNext: true,
                    });
                }, time);

            } else if (squares[6] === squares[7] && squares[6] === squares[8] && squares[6] !== null) {
                this.setState({
                    squares: squares,
                    xIsNext: !this.state.xIsNext,
                })


                setTimeout(() => {
                    alert(squares[i] === 'X' ? "First player has won" : "Second player has won");
                    this.setState({
                        squares: Array(9).fill(null),
                        xIsNext: true,
                    });
                }, time);

            } else if (squares[0] === squares[3] && squares[0] === squares[6] && squares[0] !== null) {
                this.setState({
                    squares: squares,
                    xIsNext: !this.state.xIsNext,
                })

                setTimeout(() => {
                    alert(squares[i] === 'X' ? "First player has won" : "Second player has won");
                    this.setState({
                        squares: Array(9).fill(null),
                        xIsNext: true,
                    });
                }, time);
            } else if (squares[1] === squares[4] && squares[1] === squares[7] && squares[1] !== null) {
                this.setState({
                    squares: squares,
                    xIsNext: !this.state.xIsNext,
                })

                setTimeout(() => {
                    alert(squares[i] === 'X' ? "First player has won" : "Second player has won");
                    this.setState({
                        squares: Array(9).fill(null),
                        xIsNext: true,
                    });
                }, time);

            } else if (squares[2] === squares[5] && squares[2] === squares[8] && squares[2] !== null) {
                this.setState({
                    squares: squares,
                    xIsNext: !this.state.xIsNext,
                })

                setTimeout(() => {
                    alert(squares[i] === 'X' ? "First player has won" : "Second player has won");
                    this.setState({
                        squares: Array(9).fill(null),
                        xIsNext: true,
                    });
                }, time);
            } else if (squares[0] === squares[4] && squares[0] === squares[8] && squares[0] !== null) {
                this.setState({
                    squares: squares,
                    xIsNext: !this.state.xIsNext,
                })

                setTimeout(() => {
                    alert(squares[i] === 'X' ? "First player has won" : "Second player has won");
                    this.setState({
                        squares: Array(9).fill(null),
                        xIsNext: true,
                    });
                }, time);
            } else if (squares[i] === squares[4] && squares[2] === squares[6] && squares[2] !== null) {
                this.setState({
                    squares: squares,
                    xIsNext: !this.state.xIsNext,
                })

                setTimeout(() => {
                    alert(squares[i] === 'X' ? "First player has won" : "Second player has won");
                    this.setState({
                        squares: Array(9).fill(null),
                        xIsNext: true,
                    });
                }, time);
            } else {

                if (squares[0] !== null && squares[1] !== null && squares[2] !== null && squares[3] !== null && squares[4] !== null &&
                    squares[5] !== null && squares[6] !== null && squares[7] !== null && squares[8] !== null) {

                        this.setState({
                            squares: squares,
                            xIsNext: !this.state.xIsNext,
                        })

                    setTimeout(() => {
                        alert("Match Draw");
                        this.setState({
                            squares: Array(9).fill(null),
                            xIsNext: true,
                        });
                    }, time);
                } else {
                    this.setState({
                        squares: squares,
                        xIsNext: !this.state.xIsNext,
                    })
                }
            }

        } else {
            alert("this box is already filled");
        }


    }

    render() {

        return (
            <div className="game">
                <div className="game-board">
                    <Board onClick={(i) => this.handleClick(i)}
                        squares={this.state.squares} />
                </div>

            </div>
        )
    }
}
export default Game;