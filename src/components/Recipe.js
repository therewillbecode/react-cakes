import React from 'React'

const Recipe = props => (
    <div>
      {props.title}
      <img src={props.img}/>
      {props.desc}
    </div>
)

export default Recipe