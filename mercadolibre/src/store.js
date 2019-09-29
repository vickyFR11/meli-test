import { createStore, combineReducers } from 'redux'
import modules from './modules'

const initialState = { }

const store = createStore(
  combineReducers(modules.reducers),
  initialState
)

export default store