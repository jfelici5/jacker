import React from 'react';
import {Modal, Button, InputNumber, Form} from 'antd';

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
            gpaMessage: '',
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

    //pop-up function displaying statistics
     showModal = () => {
        
        //condition for if requiredGPA results in a negative number
        if (((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)) < 0
        && this.state.desiredGPA !='' 
        && this.state.currentGPA!=''
        && this.state.completedUnits!=''
        && this.state.remainingUnits!=''){
            this.setState({
                coolGPA: (0.00).toFixed(2),
                gpaMessage: 'Time to PAR-TAYYY!!'
            }, this.modal);
        }

        //conditions for positive required GPAs
        else if(((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)) > 0
        && this.state.desiredGPA !='' 
        && this.state.currentGPA!=''
        && this.state.completedUnits!=''
        && this.state.remainingUnits!=''){
            if(((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)) > 4){
                this.setState({
                gpaMessage: 'Is that even possible?!!!',
                coolGPA: ((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)),
                }, this.modal);
            }else if(((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)) > 3.5){
                this.setState({
                gpaMessage: "It's time to hit the books!",
                coolGPA: ((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)),
                }, this.modal);
            }else if(((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)) > 3){
                this.setState({
                gpaMessage: 'You got this!',
                coolGPA: ((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)),
                }, this.modal);
            }else if(((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)) > 2.5){
                this.setState({
                gpaMessage: 'Just a little practice, and you should be fine!',
                coolGPA: ((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)),
                }, this.modal);
            }else if(((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)) > 2){
                this.setState({
                gpaMessage: "Now don't start skipping class toooooo much",
                coolGPA: ((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)),
                }, this.modal);
            }else if(((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)) > 1.5){
                this.setState({
                gpaMessage: 'I have a feeling that things are gonna be okay',
                coolGPA: ((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)),
                }, this.modal);
            }else if(((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)) > 1){
                this.setState({
                gpaMessage: "Congrats! You've earned yourself some free time!",
                coolGPA: ((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)),
                }, this.modal);
            }else if(((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)) > 0){
                this.setState({
                gpaMessage: "Time to PAR-TAY!",
                coolGPA: ((((parseFloat(this.state.desiredGPA)*(parseFloat(this.state.completedUnits)+parseFloat(this.state.remainingUnits))) - (parseFloat(this.state.currentGPA)*parseFloat(this.state.completedUnits)))/this.state.remainingUnits).toFixed(2)),
                }, this.modal);
            }
        }
    };

    modal = async() =>{

        Modal.info({
            title: this.state.gpaMessage,
            content: (
              <div>
                <p>You need a GPA of {this.state.coolGPA} for the remainder of your courses to achieve an overall GPA of {this.state.desiredGPA}</p>
                <p></p>
              </div>
            ),
            onOk() {},
          });
    }
  
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
                name ="basic" >
                    <Form.Item
                    label = 'Completed units'
                    name = "completedUnits"
                    rules={[{ required: true, message: "This field is required"}]}>
                        <InputNumber 
                        onChange = {this.handleCompletedUnitsChange}/>
                    </Form.Item>
                    <Form.Item
                    label= "Remaining units"
                    name = "remainingUnits"
                    rules={[{ required: true, message: "This field is required" }]}>
                        <InputNumber 
                        onChange = {this.handleRemainingUnitsChange}/>
                    </Form.Item>
                    <Form.Item
                    label = "The GPA I have"
                    name = "currentGPA"
                    rules={[{ required: true, message: "This field is required"}]}>
                        <InputNumber 
                        onChange = {this.handleGPAChange}/>
                    </Form.Item>
                    <Form.Item
                    label = "The GPA I want"
                    name = "desiredGPA"
                    rules={[{ required: true, message: "This field is required"}]}>
                        <InputNumber 
                        onChange = {this.handleDesiredChange}/>
                    </Form.Item>
                    <Form.Item
                    {...tailLayout}>
                        <Button type = "primary" htmlType = "submit" onClick={this.showModal}>
                            What GPA do I need?
                        </Button>
                    </Form.Item>
            </Form>
        </div>
        )
    }
}

export default Calc
