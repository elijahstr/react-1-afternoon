import React, { Component } from 'react'

export default class EvenAndOdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }
    
    handleChange(val){
        this.setState({userInput: val});
    }
    solveToyProblem(userInput){
        var arr = userInput.split(",");
        var evens = [];
        var odds = [];

        for (let i = 0; i < arr.length; i++) {
            if(arr[i]%2===0){
                evens.push(arr[i]);
            }
            else{
                odds.push(arr[i]);
            }
        }

        this.setState({evenArray: evens, oddArray: odds});

    }


    render() {
        return (
           <div className="puzzleBox evenAndOddPB">
               <h4>Evens and Odds</h4>

               <input className="inputLine" onChange={ (e)=> this.handleChange(e.target.value)}></input>

               <button className="confirmationButton" onClick={() => {this.solveToyProblem(this.state.userInput)}}>Solve</button>


               <span className="resultsBox">Evens: {this.state.evenArray}</span>

               <span className="resultsBox">Odds: {this.state.oddArray}</span>

           </div>
        )
    }
}
