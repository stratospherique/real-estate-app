const listReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return action.items;
    case 'ADD_ITEM':
      return [
        ...state,
        action.article,
      ];
    default:
      return state;
  }
};

export default listReducer;
