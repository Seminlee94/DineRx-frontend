import React from "react";
import './login.css'
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar } from 'rsuite';

class Login extends React.Component {
    render(){
        return (
            <>
                <div className="top-login">
                   <img 
                        src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                        style={{ height: "100%" }}
                   />
                </div>

                <Form className="bottom-login" layout="horizontal">
                    <FormGroup>
                    <ControlLabel>City</ControlLabel>
                    <FormControl name="city" className="login-form" />
                    {/* <HelpBlock>Required</HelpBlock> */}
                    </FormGroup>

                    <FormGroup>
                    <ControlLabel>Hospital</ControlLabel>
                    <FormControl name="hospital" className="login-form"  />
                    {/* <HelpBlock tooltip>Required</HelpBlock> */}
                    </FormGroup>

                    <FormGroup>
                    <ControlLabel>Full Name</ControlLabel>
                    <FormControl name="name" className="login-form"  />
                    </FormGroup>

                    <FormGroup>
                    <ControlLabel>Medical Identification Number</ControlLabel>
                    <FormControl name="mrn" type="number" className="login-form"  />
                    <HelpBlock tooltip>What is MRN?</HelpBlock>
                    </FormGroup>

                    <FormGroup>
                    <ControlLabel>Date of Birth</ControlLabel>
                    <FormControl name="dob" type="number" className="login-form" />
                    </FormGroup>

                    <FormGroup>
                    <ButtonToolbar>
                        <Button appearance="primary" className="login-button" >Submit</Button>
                    </ButtonToolbar>
                    </FormGroup>


                </Form>
            </>

        )
    }
}


export default Login