import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import  slidePageReducer from './slidePageReducer'
import  NavVrtReducer from './NavVrtReducer'

export default combineReducers({
  routing: routerReducer,
  slidePage : slidePageReducer,
  currentPage : NavVrtReducer
})
