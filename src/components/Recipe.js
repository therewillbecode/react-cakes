import React from 'react'

const Recipe = props => (
    <div>
      {props.title}
      <img src={props.img}/>
      {props.desc}
    </div>
)

export default Recipe