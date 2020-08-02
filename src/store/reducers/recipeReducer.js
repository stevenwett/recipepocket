const initState = {
  recipes: [
  ]
}

const recipeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_RECIPE':
      console.log('created project', action.recipe);
      return state;
    case 'CREATE_RECIPE_ERROR':
      console.log('create recipe error', action.error);
      return state;
    default:
      return state;
  }
}

export default recipeReducer
