import React, { Component } from 'react'

import RecipeListContainer from '../containers/RecipesListContainer'
import logo from '../logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Cakes</h2>
        </div>
        <div className="App-intro">
           <RecipeListContainer />
        </div>
      </div>
    )
  }
}

export default App
