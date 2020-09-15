import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray : [
                {
                    username: "MattB",
                    password: "password"
                },

                {
                    username: "EricS",
                    email: "eric@devmtn.com"
                },

                 {
                    occupation: "rapper",
                    hometown: "Detroit"
                }

            ],
            userInput : "",
            filteredArray : []

        }
    }

    handleChange(val){
        this.setState({userInput: val});
    }

    solveToyProblem(userInput){
        let unfiltered = this.state.unFilteredArray;
        let arr = [];
        for (let i = 0; i < unfiltered.length; i++) {
            if(unfiltered[i].hasOwnProperty(userInput)){
                arr.push(unfiltered[i]);
                // console.log("hello" + arr);
            }
            
        }
        this.setState({filteredArray: arr});
    }
    
    
    
    
    
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>

                <input className="inputLine" onChange={(e)=> this.handleChange(e.target.value)}></input>


                <button className="confirmationButton" onClick={() => {
                    this.solveToyProblem(this.state.userInput)}
                }>Solve</button>

            <span className="resultsBox filterObjectRB">Solution: {JSON.stringify(this.state.filteredArray, null, 10)}</span>

            </div>
        )
    }
}
