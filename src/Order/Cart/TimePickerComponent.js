import React from 'react'
import './Cart.css'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardDateTimePicker

} from '@material-ui/pickers'

class TimePickerComponent extends React.Component {

    state = {
        date: new Date(),
        maxDate: new Date(Date.now() + (3600 * 1000 * 24))
    }


    handleDateChange = (selectedDate) => {
        this.setState({ date: selectedDate })
        this.props.onChange(selectedDate)
    }

    render() {
        const options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

        return (
            <>

            {this.props.schedule==="order_ahead" 
            
            ?
    
                <div className="date-picker">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify='space-around'>
                        
                        <KeyboardDateTimePicker 
                            ampm={false}
                            value={this.state.date}
                            onChange={this.handleDateChange}
                            label="Choose Date and Time"
                            disablePast={true}
                            maxDate={this.state.maxDate}
                        />
                        
                        </Grid>
                    </MuiPickersUtilsProvider>
                </div>

            :

                <div>
                    {this.state.date.toLocaleDateString('en-us', options)}
                </div>

            }
            </>
        )
    }
}

export default TimePickerComponent
