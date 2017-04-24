import React, { Component }from 'react'

import Recipe from './Recipe'


class RecipesList extends Component {
  componentDidMount () {
    this.props.fetchRecipes()
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