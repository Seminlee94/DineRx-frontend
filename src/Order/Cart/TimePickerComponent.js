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

        return (
    
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
    
        )
    }
}

export default TimePickerComponent
