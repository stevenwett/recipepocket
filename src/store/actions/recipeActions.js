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
      groupId: false,
      createdAt: new Date(),
      lastViewed: new Date(),
      disabled: false
    }).then(() => {
      dispatch({ type: 'CREATE_RECIPE', recipe });
    }).catch((error) => {
      dispatch({ type: 'CREATE_RECIPE_ERROR', error });
    })
  }
};

