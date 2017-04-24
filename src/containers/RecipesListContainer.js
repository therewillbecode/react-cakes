import React from 'react'
import { connect } from 'react-redux'

import RecipesList from '../components/RecipesList'

const RecipeListContainer = props => {
   const { isFetching, items } = props

   if (isFetching) {
     return (<div>Fetching Recipes</div>)
   } else {
     return <RecipesList items={items} />
   }
}

const mapStateToProps = state => {
  const { isFetching, items } = state
  return {
    items,
    isFetching,
  }
}

export default connect(mapStateToProps)(RecipeListContainer)