import React from 'react'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboarddatePicker
} from '@material-ui/pickers'
import './Cart.css'


function TimePick() {
    const [selectedDate, setSelectedDate] = React.useState(
        new Date()
    )

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    console.log(selectedDate)
    return (
        
        <>
            <div className="incart-place-order">
                <button>Place Order!</button>
            </div>

            <div className="time-pick">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify='space-around'>

                        <KeyboardTimePicker 
                            ampm={false}
                            variant="inline"
                            label="With keyboard"
                            value={selectedDate}
                            onChange={handleDateChange}
                            
                        
                        />


                    </Grid>
                </MuiPickersUtilsProvider>
            </div>

            <button>Submit</button>
        </>
    )
}

export default TimePick