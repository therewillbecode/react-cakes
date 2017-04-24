import React, { Component } from 'react'
import { List } from 'semantic-ui-react'

import Recipe from './Recipe'

class RecipesList extends Component {
  componentDidMount () {
    if ((this.props.isFetching === false) && (this.props.items.length === 0)) {
      console.log(this.props)
      this.props.fetchRecipes()
    }
  }

  render () {
    const { items } = this.props
    return (
      <List>
        <h2>Cakes</h2>
        {items.map((recipe) => (
          <Recipe recipe={recipe} />
       ))}
      </List>
    )
  }
}

export default RecipesList
