import React, { Component } from 'react'

class Form extends Component{
    constructor(props) {
        super(props)

        this.state = {
            currentGPA: 0,
            desiredGPA: 0
        }
    }

    handleGPAChange = (event) => {
        this.setState({
            currentGPA: event.target.value
        })
    }

    handleDesiredChange = (event) => {
        this.setState({
            desiredGPA: event.target.value
        })
    }

    render(){
        return (
            <form>
                <div>
                    <label>
                        Current GPA:
                    </label>
                    <input type = 'number' 
                    step = "0.01" 
                    value = {this.state.currentGPA}
                    onChange = {this.handleGPAChange} />
                </div>
                <div>
                    <label>
                        Desired GPA:
                    </label>
                    <input type = 'number'
                    step = '0.01'
                    value = {this.state.desiredGPA}
                    onChange = {this.handleDesiredChange}
                    />
                </div>
            </form>
        )
    }
}

export default Form