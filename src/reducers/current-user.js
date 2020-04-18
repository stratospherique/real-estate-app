const currentUserReducer = (state = {
  logged_in: false,
  user: 'anonymous',
  avatarLink: 'https://www.w3schools.com/howto/img_avatar2.png'
}, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return {
        ...state,
        logged_in: true,
        user: action.user,
        avatarLink: action.link
      };
    case 'LOGGED_OUT':
      return {
        ...state,
        logged_in: false,
        user: 'anonymous',
        avatarLink: 'https://www.w3schools.com/howto/img_avatar2.png'
      };
    default:
      return state;
  }
};

export default currentUserReducer;
