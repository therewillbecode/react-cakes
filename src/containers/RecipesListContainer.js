import React from 'react'
import { connect } from 'react-redux'

import { fetchRecipes } from '../actions/index'
import RecipesList from '../components/RecipesList'

const RecipeListContainer = props => {
  const { isFetching, items } = props

  if (isFetching) {
    return (<div>Fetching Recipes</div>)
  } else {
    return <RecipesList {...props} />
  }
}

const mapStateToProps = state => {
  const { isFetching, items } = state
  return {
    items,
    isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchRecipes: () => { dispatch(fetchRecipes()) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListContainer)
