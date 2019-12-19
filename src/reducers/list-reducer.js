const listReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return action.items;
    default:
      return state;
  }
};

export default listReducer;
