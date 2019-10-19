import { combineReducers } from 'redux'
import baseReduces from './baseReduces'
export default combineReducers({
    base: baseReduces
})