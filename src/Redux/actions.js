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
            .then(data => 
                dispatch({ type: "fetched_product", payload: data }))    
    }
}

export const getIngredient = (id) => {
    return function(dispatch){
        fetch(`http://localhost:3000/api/v1/foods/${id}`)
            .then(resp => resp.json())
            .then(data => 
                dispatch({ type: "fetched_ingredient", payload: data.ingredients }))    
    }
}

export const getNutrition = (id) => {
    return function(dispatch){
        fetch(`http://localhost:3000/api/v1/foods/${id}`)
            .then(resp => resp.json())
            .then(data => dispatch({ type: "fetched_nutrition", payload: data.nutritions }))
    }
}

export const getUser = (id) => {
    return function(dispatch){
        fetch(`http://localhost:3000/api/v1/users/${id}`)
            .then(resp => resp.json())
            .then(data => dispatch({ type: "fetched_userFood", payload: data.foods }))
    }
} 

export const allUserFood = (userFoodObj) => {
    // return function(dispatch){
        console.log(userFoodObj.meal_id, userFoodObj.user_id)
        fetch("http://localhost:3000/api/v1/user_foods", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: {
                food_id: userFoodObj.meal_id,
                user_id: userFoodObj.user_id
            }
        })
            .then(resp => resp.json())
            // .then(data => console.log(data, userFoodObj))
            .then(data => console.log(data))
                // dispatch({ type:"add_userFood", data }))
    // }
}

// export function allUserFood(userFoodObj) {
//     return (dispatch) => {
//         dispatch({ type: 'START_ADDING_USERFOOD_REQUEST' })
//             fetch("http://localhost:3000/api/v1/user_foods")
//                 .then(resp => resp.json())
//                 .then(dispatch({type: "add_userFood", userFoodObj

//         }))
//     }
// }



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