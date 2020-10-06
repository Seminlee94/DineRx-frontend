import React, { Component } from 'react'
import './login.css'
import PlacesAutocomplete from 'react-places-autocomplete';
import { withRouter } from "react-router-dom"
import avo2 from '../asset/images/avo2.png'
import { Form, FormGroup, HelpBlock } from 'rsuite';
import Button from '@material-ui/core/Button';
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
        user: {}

    }

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
                // hospital: this.state.hospital,
                dob: this.state.dob
            })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                localStorage.setItem("token", data.jwt)
                localStorage.setItem("userId", data.user.id)
                localStorage.setItem("name", data.user.name)
                localStorage.setItem("diet", data.user.diet)
                localStorage.setItem("allergy", data.user.allergy)
                localStorage.setItem("room", data.user.room)
                localStorage.setItem("hospital", data.user.hospital.name)
                this.setState( () => ({ user: data.user }), () => this.props.history.push('/'))
            })
    }

    handleChange = (event) => {
        event.persist()
        this.setState(()=> ({
            [event.target.name]: event.target.value
        }))
    }


    possibleHospitalHandler = possibleHospital => {
        this.setState(() => ({ possibleHospital }),() => (this.hospitalState(possibleHospital)));
    };

    hospitalState = possibleHospital => {
        let hospital = possibleHospital.split(", ")[0]
        this.setState(() => ({ hospital: hospital }))
    }


 
    render() {
        console.log(this.state)

        const {name} = this.state.name
        const {password} = this.state.password
        const {dob} =this.state.dob
        return (

        <>

            <div className="top-login">
                <img 
                    src={avo2}
                    style={{ height: "100%" }}
                    alt="DineRx"
                />
            </div>


            {/* login form */}

            <div className="bottom-login">

                <div className="bottom-login-form">

                    <Form layout="horizontal">

                {/* Serach for hospital */}

                    <PlacesAutocomplete
                    value={this.state.possibleHospital}
                    onChange={this.possibleHospitalHandler}
                    onSelect={this.handleSelect}
                    >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <div className="search-box" >
                                <input
                                    {...getInputProps({
                                    placeholder: 'Search for a Hospital ...',
                                    className: 'location-search-input',
                                    })}
                                />
                                    <button className="search-icon"><i class="material-icons">search </i></button>

                            </div>
                            <div className="dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map(suggestion => {
                                
                                const style = suggestion.active
                                    ? { backgroundColor: '#42a5f5', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div className="input-suggestion"
                                        {...getSuggestionItemProps(suggestion, {
                                            
                                            style,
                                        })}
                                        >
                                        <i class="material-icons">location_on  </i> <span>{suggestion.description}</span>
                                    </div>
                                );
                                })}
                            </div>
                        </div>
                    )}
                    </PlacesAutocomplete>
                
                    <FormGroup>
                        <input 
                            name="name" 
                            className="login-form" 
                            placeholder="Enter full name"
                            value={name}
                            onChange={this.handleChange}
                            />
                    </FormGroup>

                    <FormGroup>
                        <input 
                            name="password" 
                            // type="number" 
                            className="login-form" 
                            placeholder="Medical Identification Number"
                            value={password}
                            onChange={this.handleChange}
                            />
                        <HelpBlock tooltip>What is MRN?</HelpBlock>
                    </FormGroup>

                    <FormGroup>
                        <input 
                            name="dob" 
                            type="number" 
                            className="login-form" 
                            placeholder="Date of Birth (DD/MM/YY)"
                            value={dob}
                            onChange={this.handleChange}
                            />
                    </FormGroup>

                    <div className="login-button">
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