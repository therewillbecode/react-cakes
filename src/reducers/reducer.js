import { combineReducers } from 'redux'
import {
  REQUEST_RECIPES, RECEIVE_RECIPES, REQUEST_RECIPES_ERR
} from '../actions/index'

const reducer = (state, action) => state

const initialState = {
  isFetching: false,
  err: null,
  items: []
}

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RECIPES:
      return {
        ...state,
        err: null,
        isFetching: true,
        items: []
      }
    case RECEIVE_RECIPES:
      return {
        ...state,
        isFetching: false,
        err: null,
        items: action.recipes,
      }
    case REQUEST_RECIPES_ERR:
      return {
        ...state,
        isFetching: false,
        err: action.err,
        items: []
      }
    default:
      return state
  }
}

export default recipes