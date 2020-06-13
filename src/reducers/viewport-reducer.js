const device = (width) => {
    switch (true) {
        case (width < 750):
            return 'mobile'
        case (width >= 750 && width < 1024):
            return 'tablet'
        default:
            return 'web';
    }
}

const viewportReducer = (state = null, action) => {
    switch (action.type) {
        case 'UPDATE_VIEWPORT':
            return action.target
        default:
            return state;
    }
}


export default viewportReducer;
