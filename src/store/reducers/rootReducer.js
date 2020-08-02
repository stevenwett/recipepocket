import authReducer from './authReducer'
import recipeReducer from './recipeReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  recipe: recipeReducer,
  firestore: firestoreReducer
})

export default rootReducer
