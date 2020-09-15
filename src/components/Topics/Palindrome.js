import React, { Component } from 'react'

export default class Palindrome extends Component {
    
    constructor() {
        super();

        this.state = {
            userInput: "",
            palindrome : ""
        }
    }

    handleChange(val){
        this.setState({userInput: val});
    }

    solveToyProblem(string){
        let tF = "";
        let palindrome = "";
        for (let i = string.length; i >= 0; i--) {
            palindrome+=string.charAt(i);
        }
        palindrome===string ? tF = "This is a palindrome" : tF = "This is not a palindrome";

        this.setState({palindrome: tF});
    }
    
    render() {
        return (
            <div className="puzzleBox filterStringPB">

                <h4>Palindrome</h4>
                
                <input className="inputLine" onChange={(e)=> this.handleChange(e.target.value)}></input>


                <button className="confirmationButton" onClick={() => {
                    this.solveToyProblem(this.state.userInput)}
                }>Solve</button>


            <span className="resultsBox filterStringRB">{this.state.palindrome}</span>


            </div>
        )
    }
}
