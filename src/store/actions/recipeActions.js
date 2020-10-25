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
      createdAt: new Date(),
      lastModified: new Date(),
      lastViewed: new Date(),
      timesViewed: 0,
      disabled: false
    }).then(() => {
      dispatch({ type: 'CREATE_RECIPE', recipe });
    }).catch((error) => {
      dispatch({ type: 'CREATE_RECIPE_ERROR', error });
    })
  }
};

export const updateRecipe = (recipeId, recipe = null) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    if (recipeId ) {
      firestore.collection('recipes').doc(recipeId).update({
        ...recipe,
        lastViewed: new Date()
      }).then(() => {
        dispatch({ type: 'UDPATE_RECIPE', recipeId });
      }).catch((error) => {
        dispatch({ type: 'UPDATE_RECIPE_ERROR', error });
      })
    }
  }
};

export const deleteRecipe = (recipeId, recipe = null) => {
  return (dispatch, getState, { getFirestore }) => {
    console.log('delete ' + recipeId);
    // make async call to database
    const firestore = getFirestore();
    if (recipeId ) {
      firestore.collection('recipes').doc(recipeId).delete()
      .then(() => {
        dispatch({ type: 'DELETE_RECIPE', recipeId })
      })
      .catch((error) => {
        dispatch({ type: 'DELETE_RECIPE_ERROR', error })
      })
    }
  }
}
