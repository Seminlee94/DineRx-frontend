import React from 'react'
import './Cart.css'
import { Field, Form } from 'react-final-form'
import TimePickerComponent from './TimePickerComponent'


function TimePick(props) {
    // console.log(props.schedule)

    return (
        <>
            
            <Form onSubmit={(formObj) => {
                console.log(formObj)
            }}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>


                    <Field name="timePickerField">
                        {({ input }) => (
                            <TimePickerComponent onChange={time => input.onChange(time)} />

                        )}

                    </Field>


                        <div className="time-pick">
                        </div>
                        <button type="submit">Submit</button>


                    </form>
                )}


            </Form>

        </> 
    )
}

export default TimePick