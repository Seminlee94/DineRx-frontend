export const addMeal = (mealObj) => ({ type: "add meal", payload: mealObj })

export const getMeal = () => {
    // console.log("first dispatch invoked")
    return function(dispatch){
        console.log("nested function invoked")
        fetch("http://localhost:3000/api/v1/foods")

            .then(resp => resp.json())
            .then(data => dispatch({ type: "fetched_meals", payload: data }))
            // .then(data => console.log(data))
    
    }
}

//// Use getState for post request. getState gets current state
// export const getMeal = () => {
//     console.log("first dispatch invoked")
//     return function(dispatch, getState){
//         console.log("nested function invoked")
//         fetch("http://localhost:3000/api/v1/foods")

//             .then(resp => resp.json())
//             // .then(data => dispatch({ type: "fetched meals", payload: data }))
//             .then(data => console.log(data))
    
//     }
// }