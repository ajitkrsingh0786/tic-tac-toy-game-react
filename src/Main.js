import React, { Component } from 'react';


class Main extends Component {
    constructor(props) {
        super(props);

        this.state={
            arr:new Array(9)
        }
    }
         

    render() {

        return (
            <div className="tic-tac-page">
                <table class="table table-bordered table-dark offset-1 col-6 mt-5">
                    
                    <tbody >
                        <tr>                           
                           <td>{this.state.arr.length}</td>
                            <td>{this.state.arr[1]}</td>
                            <td></td>
                        </tr>
                        <tr>
                            
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                        <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Main;
