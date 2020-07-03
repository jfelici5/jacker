import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import {Modal, Button} from 'antd';


class Form extends React.Component{
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

    handleSubmit = (event) => {
        console.log(this.state.currentGPA)
    }

    state = { visible: false };

    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };

    render(){
        return (
            <div>
            <form id = "myform">
                <label>
                    Current GPA:                    
                </label>
                <input type = 'number' 
                step = "0.01" 
                value = {this.state.currentGPA}
                onChange = {this.handleGPAChange} />
                <label>
                    Desired GPA:                    
                </label>
                <input type = 'number'
                step = '0.01'
                value = {this.state.desiredGPA}
                onChange = {this.handleDesiredChange}
                />
                <Button type = "button" onClick={this.showModal}>
                    Submit
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>

                
            </form>
            
            </div>
        )
    }
}




export default Form
