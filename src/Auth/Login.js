import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { Form, FormGroup, HelpBlock } from 'rsuite';
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import avo2 from '../asset/images/avo2.png';
import './login.css';
// import {
//     geocodeByaddress,
//     geocodeByPlaceId,
//     getLatLng,
//   } from 'react-places-autocomplete';


export class Login extends Component {
 
    state = {
        possibleHospital: "",
        hospital: "",
        name: "",
        password: "",
        dob: "",
        user: {},
        hospitalClicked: false,
        nameClicked: false,
        passClicked: false,
        dobClicked: false,
    }

    // Dynamic form

    showNameForm = () => {
        this.setState({ hospitalClicked: true })
    }

    handleNameKeyPress = (event) => {
        if(event.key === 'Enter'){
          this.setState({ nameClicked: true })
        }
      }

    handlePassKeyPress = (event) => {
        if(event.key === 'Enter'){
          this.setState({ passClicked: true })
        }
      }

    handleDOBKeyPress = (event) => {
        if(event.key === 'Enter'){
          this.setState({ dobClicked: true })
        }
      }

    // Log in fetch
    loginHandler = () => {
        fetch("http://localhost:3000/api/v1/login", {
            method: 'POST',
            headers: {
                'content-type':'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                password: this.state.password,
                hospital: this.state.hospital,
                dob: this.state.dob
            })
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("token", data.jwt)
                localStorage.setItem("user", data)
                localStorage.setItem("userId", data.user.id)
                localStorage.setItem("name", data.user.name)
                localStorage.setItem("diet", data.user.diet)
                localStorage.setItem("allergy", data.user.allergy)
                localStorage.setItem("room", data.user.room)
                localStorage.setItem("hospital", data.user.hospital.name)
                this.setState( () => ({ user: data.user }), () => this.props.history.push('/'))
            })
    }

    
    // form handling
    handleChange = (event) => {
        event.persist()
        this.setState(()=> ({
            [event.target.name]: event.target.value
        }))
    }

    //result from auto search
    possibleHospitalHandler = possibleHospital => {
        this.setState(() => ({ possibleHospital }),() => (this.hospitalState(possibleHospital)));
    };

    //split to get only hospital
    hospitalState = possibleHospital => {
        let hospital = possibleHospital.split(", ")[0]
        this.setState(() => ({ hospital: hospital }))
    }


    // logout(){
    //     localStorage.clear()
    // localStorage.removeItem("token")
    // localStorage.removeItem("userId")
    // }



 
    render() {

        const {name} = this.state.name
        const {password} = this.state.password
        const {dob} =this.state.dob


        return (

        <>
            {/* Login page Image */}
            <div className="top-login">
                <img 
                    src={avo2}
                    style={{ height: "100%" }}
                    alt="DineRx"
                />
            </div>

            {/* Welcome prompt */}
            <div className={this.state.hospitalClicked ? "top-center-active" : "top-center" } >
                Welcome to DineRx
            </div>


            {/* login form */}

            <div className="bottom-login">

                <div className="bottom-login-form">

                    <Form layout="horizontal">

                {/* Auto Serach for hospital */}
                        <PlacesAutocomplete
                        value={this.state.possibleHospital}
                        onChange={this.possibleHospitalHandler}
                        onSelect={this.handleSelect}
                        >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div>
                                <div className={this.state.hospitalClicked ? "search-box-active" : "search-box" }>
                                    <input
                                        {...getInputProps({
                                        placeholder: 'Search for a Hospital ...',
                                        className: 'location-search-input',
                                        })}
                                    />
                                        <button className="search-icon" onClick={this.showNameForm}><i class="material-icons">search </i></button>
                                </div>
                                <div className="dropdown-container">
                                    {loading && <div>Loading...</div>}
                                    {suggestions.map(suggestion => {
                                    
                                    const style = suggestion.active
                                        ? { backgroundColor: '#42a5f5', cursor: 'pointer' }
                                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                        <div className="input-suggestion"
                                            {...getSuggestionItemProps(suggestion, {style,})}
                                        >
                                            <i className="material-icons">location_on  </i> <span>{suggestion.description}</span>
                                        </div>
                                    );
                                    })}
                                </div>
                            </div>
                        )}
                        </PlacesAutocomplete>
                    
                {/* name */}
                        <FormGroup>
                            <input 
                                name="name" 
                                className={this.state.hospitalClicked ? "login-form-active" : "login-form" } 
                                placeholder="Enter full name"
                                value={name}
                                onChange={this.handleChange}
                                onKeyPress={this.handleNameKeyPress}
                                />
                        </FormGroup>
                    
                {/* password(MRN) */}
                        <FormGroup>
                            <input 
                                name="password" 
                                type="number"
                                className={this.state.nameClicked ? "login-form-active" : "login-form"} 
                                placeholder="Medical Identification Number"
                                value={password}
                                onChange={this.handleChange}
                                onKeyPress={this.handlePassKeyPress}
                                />
                            <HelpBlock tooltip>What is MRN?</HelpBlock>
                        </FormGroup>
                    
                {/* DOB */}
                        <FormGroup>
                            <input 
                                name="dob" 
                                type="number" 
                                className={this.state.passClicked ? "login-form-active" : "login-form"}
                                placeholder="Date of Birth (DD/MM/YY)"
                                value={dob}
                                onChange={this.handleChange}
                                onKeyPress={this.handleDOBKeyPress}
                                />
                        </FormGroup>
                    
                {/* submit button */}
                        <div className={this.state.dobClicked ? "login-button-active" : "login-button" }>
                            <Button onClick={this.loginHandler} variant="contained">Submit</Button>
                        </div>

                    </Form>
                </div>


            </div>

        </>
        )
    }
}

export default withRouter(Login);