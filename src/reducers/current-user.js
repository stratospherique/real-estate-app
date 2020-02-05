const currentUserReducer = (state = {
  logged_in: false,
  user: 'anonymous',
}, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return {
        logged_in: true,
        user: action.user,
      };
    case 'LOGGED_OUT':
      return {
        logged_in: false,
        user: {},
      };
    default:
      return state;
  }
};

export default currentUserReducer;
