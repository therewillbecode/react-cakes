import * as actions from '../../actions/index'

import reducer from '../reducer'

const recipeItem = { title: 'cake', dec: 'a cake', img: 'imglink' }

describe('recipes reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      isFetching: false,
      err: null,
      items: []
    })
  })

  it('should handle REQUEST_RECIPES', () => {
    expect(
      reducer([], {
        type: actions.REQUEST_RECIPES,
        err: null
      })
    ).toEqual({
      isFetching: true,
      err: null,
      items: []
    }
    )
  })

  it('should handle RECEIVE_RECIPES', () => {
    expect(
      reducer([], {
        type: actions.RECEIVE_RECIPES,
        recipes: [ recipeItem ]
      })
    ).toEqual({
      isFetching: false,
      err: null,
      items: [ recipeItem ]
    }
    )
  })

  it('should handle REQUEST_RECIPES_ERR', () => {
    expect(
      reducer([], {
        type: actions.REQUEST_RECIPES_ERR,
        err: 404
      })
    ).toEqual({
      isFetching: false,
      err: 404,
      items: []
    }
    )
  })
})
