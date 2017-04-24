// Ran out of time before I could implement this properly

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'  // You can use any http mocking library
import expect from 'expect' // You can use any testing library

import { fetchRecipes } from '../index.js'
import {
  REQUEST_RECIPES, RECEIVE_RECIPES, REQUEST_RECIPES_ERR
} from '../actions/index'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Test thunk action creator', () => {
  it('expected actions should be dispatched on successful request', () => {
    const store = mockStore({})
    const expectedActions = [
      REQUEST_RECIPES,
      RECEIVE_RECIPES
    ]

 // Mock the fetch() global to always return the same value for GET
 // requests to all URLs.
    fetchMock.get('*', { response: 200 })

    return store.dispatch(fetchSomething())
      .then(() => {
        const actualActions = store.getActions().map(action => action.type)
        expect(actualActions).toEqual(expectedActions)
      })

    fetchMock.restore()
  })

  it('expected actions should be dispatched on failed request', () => {
    const store = mockStore({})
    const expectedActions = [
      REQUEST_RECIPES,
      REQUEST_RECIPES_ERR
    ]
 // Mock the fetch() global to always return the same value for GET
 // requests to all URLs.
    fetchMock.get('*', { response: 404 })

    return store.dispatch(fetchSomething())
      .then(() => {
        const actualActions = store.getActions().map(action => action.type)
        expect(actualActions).toEqual(expectedActions)
      })

    fetchMock.restore()
  })
})
