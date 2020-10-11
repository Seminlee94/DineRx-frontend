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
    
const rootReducer = combineReducers({
    meals: mealsReducer,
    // notes:
})


export default rootReducer