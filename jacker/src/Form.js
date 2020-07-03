import React, { Component } from 'react'

class Form extends Component{
    constructor(props) {
        super(props)

        this.state = {
            currentGPA: 0
        }
    }

    render(){
        return (
            <form>
                <div>
                    <label>
                        Current GPA:
                    </label>
                    <input type = 'number' />
                </div>
            </form>
        )
    }
}

export default Form