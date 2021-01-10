import React from 'react'
import './Cart.css'
import { Field, Form } from 'react-final-form'
import TimePickerComponent from './TimePickerComponent'
import Button from '@material-ui/core/Button';


function TimePick(props) {    

    let user_id = props.meal.map(obj => obj.user_id)[0]
    let meal_type = props.type
    let meal_schedule = props.schedule
    const options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };


    const addUserOrder = (time, user_id, order_id) => {
        fetch("http://localhost:3000/api/v1/user_orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json"
        },
            body: JSON.stringify({
                time: time,
                food_id: props.meal.map(obj => obj.food_id),
                user_id: user_id,
                order_id: order_id
        })
    })
        .then(res => res.json())
        .then(window.alert("Order has been successful!"))
    }
    
    return (
        <>
            
            <Form onSubmit={(time) => {
                let time_field = time.timePickerField.toLocaleTimeString('en-us', options)
                let time_hour = time_field.split(", ")[3].split(":")[0]

                const breakfast_time = time_hour >= 7 && time_hour < 11
                const lunch_time = time_hour >= 12 && time_hour < 16
                const dinner_time = time_hour >= 17 && time_hour < 21


                if(meal_type === "breakfast" && meal_schedule === "order_ahead" && breakfast_time){
                   addUserOrder(time_field, user_id, 1)
                } 
                else if(meal_type === "breakfast" && meal_schedule === "order_ahead" && (breakfast_time===false)){
                    window.alert("The cafeteria is open 7 AM to 11 AM for breakfast")
                } 
                else if(meal_type === "lunch" && meal_schedule === "order_ahead" && lunch_time){
                    addUserOrder(time_field, user_id, 2)
                } 
                else if(meal_type === "lunch" && meal_schedule === "order_ahead" && (lunch_time===false)){
                    window.alert("The cafeteria is open 12 PM to 4 PM for lunch")
                } 
                else if(meal_type === "dinner" && meal_schedule === "order_ahead" && dinner_time){
                    addUserOrder(time_field, user_id, 3)
                }
                else if(meal_type === "dinner" && meal_schedule === "order_ahead" && (dinner_time===false)){
                    window.alert("The cafeteria is open 5 PM to 9 PM for dinner")
                } 
                else if(meal_schedule === "order_now"){
                    addUserOrder(time_field, user_id, 4)
                }

            }}>

                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>

                        <Field name="timePickerField" className="time-picker-field">
                            {({ input }) => (
                                <TimePickerComponent schedule={props.schedule} onChange={time => input.onChange(time)} />
                            )}

                        </Field>

                        <Button
                            type="submit"
                            className="form-submit"
                            variant="contained" 
                            color="primary" 
                            style={{ marginLeft: "20" }}>
                            Submit
                        </Button>


                    </form>
                )}


            </Form>

        </> 
    )
}


export default TimePick
