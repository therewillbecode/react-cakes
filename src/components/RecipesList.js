import React from 'react'

import Recipe from './Recipe'


const RecipesList = props => {
    const { items }  = props
    return (
      <div>
          Recipes List
        {items.map(recipe => {
            <Recipe recipe={recipe} />
        })}
      </div>
    )
}


export default RecipesList