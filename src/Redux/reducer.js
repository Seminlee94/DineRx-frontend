import { combineReducers } from 'redux'

const defaultState = {
    meals: [],
    ingredients: [],
    nutritions: [],
    userFoods: [],
    product: {},
    // addUserFood: {}
}

function mealsReducer(state = defaultState.meals, action){
    switch(action.type) {
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
        console.log(state, action.payload)
            return { 
                // ...state, 
                userFoods: [ ...state, action.payload ],
            }

        case "delete_userFood":
            const userFoods = state.filter(obj => obj.id !== action.id )
            
            return { 
                ...state, 
                userFoods: { userFoods },
            }
                
    default:
        return state

    }
}


// function addUserFoodReducer(state=defaultState.addUserFood, action){
// function addUserFoodReducer(state= defaultState.addUserFood , action){
//     switch(action.type) {
//         case "START_ADDING_USERFOOD_REQUEST":
//             return {
//                 ...state,
//                 addUserFood: {...state.addUserFood},
//                 requesting: true
//               }

//         case "add_userFood":
//             // console.log(state.userFoods)
//             return { 
//                 ...state, 
//                 addUserFood: { ...state.addUserFood, action },
//                 // userFoods: [...state.userFoods, action ],
//                 requesting: false,
//             }
//             // {
//             //     ...state, 
//             //     userFoods: {...state.userFoods, action}
//             // }
//         default:
//             return state
//     }
// }
    
const rootReducer = combineReducers({
    meals: mealsReducer,
    ingredients: ingredientsReducer,
    nutritions: nutritionsReducer,
    userFoods: userFoodsReducer,
    product: productReducer,
    // addUserFood: addUserFoodReducer
})




export default rootReducer