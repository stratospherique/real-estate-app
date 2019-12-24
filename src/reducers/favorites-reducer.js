const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIKED':
      return action.liked;
    case 'CLEAR_LIKED':
      return [];
    case 'ADD_LIKED':
      return [...state, action.id];
    default:
      return state;
  }
}

export default favoritesReducer;