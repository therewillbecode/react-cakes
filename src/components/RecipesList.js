import React from 'react'

import Recipe from './Recipe'


const RecipesList = props => {
    return (
      <div>
          Recipes List
        {items.map(recipe => {
            <Recipe {...props} />
        })}
      </div>
    )
}


export default RecipesList