import React from 'react'

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
            <Recipe {...props} />
        })}
      </div>
    )
  }
}

const RecipesList = props => {
   
}


export default RecipesList