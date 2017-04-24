export const REQUEST_RECIPES = 'REQUEST_RECIPES'
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES'
export const REQUEST_RECIPES_ERR = 'REQUEST_RECIPES_ERR'


export const requestRecipes = () => ({
  type: REQUEST_RECIPES
})

export const receiveRecipes = json => ({
  type: RECEIVE_RECIPES,
  recipes: json
})

export const requestRecipesErr = (err) => ({
  type: REQUEST_RECIPES_ERR,
  err
})


export const fetchRecipes = () => dispatch => {
  dispatch(requestRecipes())
  return fetch(`https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json`)
    .then(response => response.json())
    .then(json => dispatch(receiveRecipes(json)))
    .catch(err => dispatch(requestRecipesErr(err)))
}