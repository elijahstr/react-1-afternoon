import React, { Component } from 'react'

export default class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray : ["42Dugg", "LilBaby", "LilUzi", "Gunna", "DaBaby", "LilWayne"],
            userInput: "",
            filteredArray: []

        }

    }

    handleChange(val){
        this.setState({userInput: val});
    }

    solveToyProblem(string){
        let unfiltered = this.state.unFilteredArray;
        let arr = [];
        for (let i = 0; i < unfiltered.length; i++) {
            if(unfiltered[i]!==string){
                arr.push(unfiltered[i])
            }
            
        }
        this.setState({filteredArray: arr});
    }
    
    render() {
        return (
            <div className="puzzleBox filterStringPB">

                <h4>Filter String</h4>

                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray, null, 10)}</span>

                <input className="inputLine" onChange={(e)=> this.handleChange(e.target.value)}></input>

                <button className="confirmationButton" onClick={() => {
                    this.solveToyProblem(this.state.userInput)}
                }>Solve</button>

                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray, null, 10)}</span>



            </div>
        )
    }
}
