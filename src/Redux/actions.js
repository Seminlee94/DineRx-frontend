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

export const getUser = () => {
    return function(dispatch){
        fetch("http://localhost:3000/api/v1/user_foods")
            .then(resp => resp.json())
            .then(data => dispatch({ type: "fetched_userFood", payload: data }))
    }
} 

export const addUserFood = (userFoodObj) => {
    return function(dispatch){
        dispatch({ type: 'START_ADDING_USERFOOD_REQUEST' })
        fetch("http://localhost:3000/api/v1/user_foods", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(userFoodObj)
        })
            .then(resp => resp.json())
            .then(dispatch({ type: "add_userFood", userFoodObj }))
    }
}

export const deleteUserFood = (id) => {
    console.log(id, typeof id)
    let id_string = id.toString()
    return function(dispatch){
        // dispatch({ type: 'START_DELETING_USERFOOD_REQUEST' })
        fetch(`http://localhost:3000/api/v1/user_foods/${id_string}`, {
            method: "DELETE"
        })
            .then(dispatch({ type: "delete_userFood", id }))
    }
}
