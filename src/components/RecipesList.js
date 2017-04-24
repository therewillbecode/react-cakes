import React, { Component }from 'react'

import Recipe from './Recipe'


class RecipesList extends Component {
  componentDidMount () {
      if((this.props.isFetching === false) && (this.props.items.length === 0)){
         this.props.fetchRecipes()
      }
  }

  render() {
   const { items } = this.props
    return (
      <div>
        Recipes List
        {items.map(recipe => {
            <Recipe recipe={recipe} />
        })}
      </div>
    )
  }
}



export default RecipesList