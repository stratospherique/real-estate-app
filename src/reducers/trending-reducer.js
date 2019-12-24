const trendingReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_TRENDING':
      return action.ids;
    default:
      return state;
  }
}

export default trendingReducer;