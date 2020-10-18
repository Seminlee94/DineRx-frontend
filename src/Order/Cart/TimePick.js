import React from 'react'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    TimePickerView,
    TimePicker 
} from '@material-ui/pickers'
import './Cart.css'
import { Field, Form } from 'react-final-form'


function TimePick() {
    const [selectedDate, setSelectedDate] = React.useState(
        new Date()
    )

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(e.target)
    // }


    return (
        <>
        
            <div className="incart-place-order">
                <button>Place Order!</button>
            </div>
            
            <Form onSubmit={(formObj) => {
                console.log(formObj)
            }}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>


                    <Field name="time">

                    {({ input }) => (

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify='space-around'>

                            <KeyboardTimePicker 
                                ampm={false}
                                variant="inline"
                                label="With keyboard"
                                value={selectedDate}
                                onChange={handleDateChange}
                                // input = {selectedDate}
                                {...input}
                            />
                            </Grid>
                        </MuiPickersUtilsProvider>
                    )} 
                    </Field>


                        <div className="time-pick">
                        </div>
                        <button>Submit</button>


                    </form>
                )}


            </Form>

        </> 
    )
}

export default TimePick