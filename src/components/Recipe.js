import React from 'react'
import { List } from 'semantic-ui-react'

import './Recipe.css'

const Recipe = props => (
  <List.Item>
    <List.Header as='a'>{props.recipe.title}</List.Header>
    <img className='image' src={props.recipe.image} />
    <List.Content>
      {`Description: ${props.recipe.desc}`}
    </List.Content>
  </List.Item>
)

export default Recipe
