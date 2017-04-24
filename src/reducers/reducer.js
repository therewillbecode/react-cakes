import { combineReducers } from 'redux'
import {
  REQUEST_RECIPES, RECEIVE_RECIPES, REQUEST_RECIPES_ERR
} from '../actions/index'

const reducer = (state, action) => state

const initialState = {
  isFetching: false,
  items: []
}

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RECIPES:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_RECIPES:
      return {
        ...state,
        isFetching: false,
        items: action.posts,
      }
    case REQUEST_RECIPES_ERR:
      return {
        ...state,
        isFetching: false,
        items: action.posts,
      }
    default:
      return state
  }
}

export default recipes