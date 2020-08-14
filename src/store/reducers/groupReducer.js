const initState = {
  groups: [
  ]
}

const groupReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_GROUP':
      console.log('created group', action.group);
      return state;
    case 'CREATE_GROUP_ERROR':
      console.log('create group error', action.error);
      return state;
    default:
      return state;
  }
}

export default groupReducer
