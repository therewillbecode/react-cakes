import React from 'react'
import { connect } from 'react-redux'

const RecipeListContainer = props => {
   const { isFetching, recipes } = props

   if (isFetching) {
     return (<div>Fetching Recipes</div>)
   } else {
     return <RecipesList recipes={recipes} />
   }
}

const mapStateToProps = state => {
  const { isFetching } = state
  return {
    recipes,
    isFetching,
  }
}

export default connect(mapStateToProps)(RecipeListContainer)