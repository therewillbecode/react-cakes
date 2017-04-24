import React from 'React'

import Recipe from './Recipe'


const RecipesList = props => {
    const { recipes }  = props
    return (
      <div>
        {recipes.map(recipe => {
            <Recipe recipe={recipe} />
        })}
      </div>
    )
}


export default RecipesList