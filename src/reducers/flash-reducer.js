const flashReducer = (state = {
    active: false,
    type: 'welcome',
    message: '',
}, action) => {
    switch (action.type) {
        case 'ACTIVATE_FLASH':
            return {
                ...state,
                active: true,
                type: action.nature,
                message: action.msg
            }
        case 'DEACTIVATE_FLASH':
            return {
                ...state,
                active: false,
                message: ''
            }
        default:
            return state;
    }
}

export default flashReducer;
