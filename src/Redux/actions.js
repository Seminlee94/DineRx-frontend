export const addMeal = (mealObj) => ({ type: "add_meal", payload: mealObj })

export const getMeal = () => {
    return function(dispatch){
        fetch("http://localhost:3000/api/v1/foods")

            .then(resp => resp.json())
            .then(data => dispatch({ type: "fetched_meals", payload: data }))    
    }
}

export const getProduct = (id) => {
    return function(dispatch){
        fetch(`http://localhost:3000/api/v1/foods/${id}`)
            .then(resp => resp.json())
            .then(data => dispatch({ type: "fetched_product", payload: data }))    
    }
}

export const getIngredient = (id) => {
    return function(dispatch){
        fetch(`http://localhost:3000/api/v1/foods/${id}`)
            .then(resp => resp.json())
            .then(data => dispatch({ type: "fetched_ingredient", payload: data.ingredients }))    
    }
}

export const getNutrition = (id) => {
    return function(dispatch){
        fetch(`http://localhost:3000/api/v1/foods/${id}`)
            .then(resp => resp.json())
            .then(data => dispatch({ type: "fetched_nutrition", payload: data.nutritions }))
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