import React from 'react'
import { List } from 'semantic-ui-react'

import './Recipe.css'

const Recipe = props => (
  <List.Item>
    <List.Header as='a'>{props.recipe.title}</List.Header>
    <List.Content>
     <img className='image' src={props.recipe.image} />
      <div className='desc'>{props.recipe.desc}</div>
    </List.Content>
  </List.Item>
)

export default Recipe
