import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import {Modal, Button, Input, InputNumber} from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

class Form extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            completedUnits: 0,
            eventualUnits: 0,
            currentGPA: 0,
            desiredGPA: 0,
            neededGPA: 0
        }
    }


    handleGPAChange = (event) => {
        this.setState({
            currentGPA: event.target.value
        })
    }

    handleCompletedUnitsChange = (event) => {
        this.setState({
            completedUnits: event.target.value
        })
    }
    
    handleEventualUnitsChange = (event) => {
        this.setState({
            eventualUnits: event.target.value
        })
    }

    handleDesiredChange = (event) => {
        this.setState({
            desiredGPA: event.target.value,
            neededGPA: (this.state.currentGPA*5)
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
            <form>
            <label>
                Completed Units:                    
            </label>
            <input type = 'number' 
            step = ".5" 
            value = {this.state.completedUnits}
            onChange = {this.handleCompletedUnitsChange} />
            <label>
                Eventual Units:                    
            </label>
            <input type = 'number' 
            step = ".5" 
            value = {this.state.eventualUnits}
            onChange = {this.handleEventualUnitsChange} />
            <label>
                Current GPA:                    
            </label>
            <input type = 'number' 
            step = "0.5" 
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
                    <p> You need a GPA of {this.state.neededGPA}</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>

                
                </form>
            
            </div>
        )
    }
}

/*
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

                */


export default Form
