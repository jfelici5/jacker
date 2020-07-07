import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import {Modal, Button, Input, InputNumber, Form} from 'antd';

//desiredpoints = (desiredGPA*totalCredits)-(currentGPA*completedCredits)
//thus, 
//desiredPoints = (4*16)-(4*12)

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 40 },
  };

class Calc extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            completedUnits: 0,
            remainingUnits: 0,
            currentGPA: 0,
            desiredGPA: 0,
            neededGPA: 0,
            desiredPoints: ((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits))),
        }
    }

    handleGPAChange = (value) => {
        this.setState({
            currentGPA: value,
        })
    }

    handleCompletedUnitsChange = (value) => {
        this.setState({
            completedUnits: value,
        })
    }
    
    handleRemainingUnitsChange = (value) => {
        this.setState({
            remainingUnits: value,
        })
    }

    handleDesiredChange = (value) => {
        this.setState({
            desiredGPA: parseFloat(value).toFixed(2),
        })
    }

    state = { visible: false };

    showModal = () => {
        if (((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)) < 0
        && this.state.desiredGPA !='' 
        && this.state.currentGPA!=''
        && this.state.completedUnits!=''
        && this.state.remainingUnits!=''){
            this.setState({
                visible: true,
                coolGPA: 0
            })
        }

        if(((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)) > 0
        && this.state.desiredGPA !='' 
        && this.state.currentGPA!=''
        && this.state.completedUnits!=''
        && this.state.remainingUnits!=''){
        this.setState({
        visible: true,
        coolGPA: ((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2))
        
    });
        }
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

    onFinish = values => {
        console.log('Success:', values);
      };
    
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    render(){
        return (
            <div>
            <Form
            {...layout}
            name ="basic" 
            >
            <Form.Item
            label = "Completed units"
            name = "completedUnits"
            rules={[{ required: true}]}
            >
                <InputNumber 
                onChange = {this.handleCompletedUnitsChange}/>
            </Form.Item>
            <Form.Item
            label = "Remaining units"
            name = "remainingUnits"
            rules={[{ required: true }]}
            >
                <InputNumber 
                onChange = {this.handleRemainingUnitsChange}/>
            </Form.Item>
            <Form.Item
            label = "Current GPA"
            name = "currentGPA"
            rules={[{ required: true}]}
            >
                <InputNumber 
                onChange = {this.handleGPAChange}/>
            </Form.Item>
            <Form.Item
            label = "Desired GPA"
            name = "desiredGPA"
            rules={[{ required: true}]}>
            <InputNumber 
            onChange = {this.handleDesiredChange}/>
            </Form.Item>
            
            
            <Form.Item
            {...tailLayout}>
                <Button type = "primary" htmlType = "submit" onClick={this.showModal}>
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
            </Form.Item>
                
        </Form>
            
        </div>
        )
    }
}

export default Calc
