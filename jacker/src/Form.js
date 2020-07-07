import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import {Modal, Button, Input, InputNumber} from 'antd';

//desiredpoints = (desiredGPA*totalCredits)-(currentGPA*completedCredits)
//thus, 
//desiredPoints = (4*16)-(4*12)

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
            neededGPA: 0,
            desiredPoints: ((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits))),
        }
    }

    handleGPAChange = (event) => {
        this.setState({
            currentGPA: event.target.value,
        })
    }

    handleCompletedUnitsChange = (event) => {
        this.setState({
            completedUnits: event.target.value,
        })
    }
    
    handleRemainingUnitsChange = (event) => {
        this.setState({
            remainingUnits: event.target.value,
        })
    }

    handleDesiredChange = (event) => {
        this.setState({
            desiredGPA: event.target.value,

        })
    }

    state = { visible: false };

    showModal = () => {
      this.setState({
        visible: true,
        coolGPA: ((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits
 
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
                Remaining Units:                    
            </label>
            <input type = 'number' 
            step = ".5" 
            value = {this.state.remainingUnits}
            onChange = {this.handleRemainingUnitsChange} />
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
                    coolGPA = {this.state.coolGPA}                    

                >
                    <p> You need a minimum GPA of {this.state.coolGPA} across your remaining courses to achieve a total GPA of {this.state.desiredGPA}</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>

                
                </form>
            
            </div>
        )
    }
}

export default Form
