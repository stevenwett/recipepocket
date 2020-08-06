export const createRecipe = (recipe) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const ownerId = getState().firebase.auth.uid;
    firestore.collection('recipes').add({
      ...recipe,
      ownerFirstName: profile.firstName,
      ownerLastName: profile.lastName,
      ownerId: ownerId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_RECIPE', recipe });
    }).catch((error) => {
      dispatch({ type: 'CREATE_RECIPE_ERROR', error });
    })
  }
};

