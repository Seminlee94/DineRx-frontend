import { $CombinedState } from "redux"

export const addMeal = (mealObj) => ({ type: "add_meal", payload: mealObj })

export const getMeal = (diet) => {
    // console.log(diet.toLowerCase())
    // let diet_lowercase = diet.toLowerCase()
    return function(dispatch){
        fetch("http://localhost:3000/api/v1/foods")
            .then(resp => resp.json())
            .then(data => dispatch({ type: "fetched_meals", payload: data })) 
                //  data.filter(obj => `${obj.diet_lowercase}` ===true))   
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

export const getUserFood = () => {
    return function(dispatch){
        fetch("http://localhost:3000/api/v1/user_foods")
            .then(resp => resp.json())
            .then(data => dispatch({ type: "fetched_userFood", payload: data }))
    }
} 

export const getUserOrder = () => {
    return function(dispatch){
        fetch("http://localhost:3000/api/v1/user_orders")
            .then(resp => resp.json())
            .then(data => dispatch({ type: "fetched_userOrder", payload: data }))
    }
}

export const addUserFood = (userFoodObj) => {
    return function(dispatch){
        fetch("http://localhost:3000/api/v1/user_foods", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(userFoodObj)
        })
            .then(resp => resp.json())
            .then(data => dispatch({ type: "add_userFood", payload: data }))
    }
}

export const deleteUserFood = (id) => {
    let id_string = id.toString()
    return function(dispatch){
        fetch(`http://localhost:3000/api/v1/user_foods/${id_string}`, {
            method: "DELETE"
        })
            .then(resp => resp.json())
            .then(data => dispatch({ type: "delete_userFood", payload: {data, id} }))
            
    }
}

export const deleteUserOrder = (id) => {
    let id_string = id.toString()
    return function(dispatch){
        fetch(`http://localhost:3000/api/v1/user_orders/${id_string}`, {
            method: "DELETE"
        })
            .then(resp => resp.json())
            .then(data => dispatch({ type: "delete_userOrder", payload: {data, id} }))
    }
}
