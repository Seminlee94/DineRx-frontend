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

// export const TimePickerComponent = () => {
// function TimePickerComponent(){
class TimePickerComponent extends React.Component {

    state = {
        date: new Date()
    }

    // const [selectedDate, setSelectedDate] = React.useState(
    //     new Date()
    // )

    handleDateChange = (selectedDate) => {
        this.setState({ date: selectedDate })
        this.props.onChange(selectedDate)
        // setSelectedDate(date)
    }

    render() {
        // console.log(this.props.onChange(time))
        return (
    
    
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify='space-around'>
                
                <KeyboardTimePicker 
                    ampm={false}
                    variant="inline"
                    label="Choose Time"
                    value={this.state.date}
                    // value={selectedDate}
                    onChange={this.handleDateChange}
                />
                
                </Grid>
            </MuiPickersUtilsProvider>
    
    
    
        )
    }
}

export default TimePickerComponent
