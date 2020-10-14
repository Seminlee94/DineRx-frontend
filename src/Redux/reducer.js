import { combineReducers } from 'redux'

// const rootReducer = (state = { meals: [] }, action) => {

//     switch(action.type) {
//         case "add meal":
//             return { ...state, meals: [...state.meals, action.payload] }
//         case "fetched_meals":
//             return { ...state, meals: action.payload }
//         default:
//             return state

//     }
// }


const defaultState = {
    meals: [],
    ingredients: [],
    nutritions: [],
    userFoods: [],
    product: {}
}

// function notesReducer(){}
function mealsReducer(state = defaultState.meals, action){
    switch(action.type) {
        case "add meal": // post
            return [...state, action.payload] 
        case "fetched_meals": // fetch ALL meals
            return action.payload  // same as defaultState/meals
        default:
            return state
        }
    }

function productReducer(state= defaultState.product, action){
    switch(action.type) {
        case "fetched_product":
            return action.payload
        default:
            return state
    }
}

function ingredientsReducer(state= defaultState.ingredients, action){
    switch(action.type) {
        case "fetched_ingredient":
            return action.payload
        default:
            return state
    }
}

function nutritionsReducer(state= defaultState.nutritions, action){
    switch(action.type) {
        case "fetched_nutrition":
            return action.payload
        default:
            return state
    }
}

function userFoodsReducer(state= defaultState.userFoods, action){
    switch(action.type) {
        case "fetched_userFood":
            return action.payload
        case "add_userFood":
            return { ...state, userFoods: action.userFoods }
        default:
            return state
    }
}
    
const rootReducer = combineReducers({
    meals: mealsReducer,
    ingredients: ingredientsReducer,
    nutritions: nutritionsReducer,
    userFoods: userFoodsReducer,
    product: productReducer
})




export default rootReducer