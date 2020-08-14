export const createGroup = (group) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const ownerId = getState().firebase.auth.uid;
    firestore.collection('groups').add({
      ...group,
      ownerId: ownerId,
      ownerFirstName: profile.firstName,
      ownerLastName: profile.lastName,
      users: [
        ownerId
      ],
      recipes: [],
      createdAt: new Date(),
      lastViewed: new Date(),
      disabled: false
    }).then(() => {
      dispatch({ type: 'CREATE_GROUP', group });
    }).catch((error) => {
      dispatch({ type: 'CREATE_GROUP_ERROR', error });
    })
  }
};

