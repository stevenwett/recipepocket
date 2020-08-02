export const createRecipe = (recipe) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('recipes').add({
      ...recipe,
      ownerFirstName: 'Steven',
      ownerLastName: 'Wett',
      ownerId: 123,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_RECIPE', recipe });
    }).catch((error) => {
      dispatch({ type: 'CREATE_RECIPE_ERROR', error });
    })
  }
};

