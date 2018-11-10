const initialState = true;

const loading = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING_DONE':
            return false;
        case 'IS_LOADING':
            return state;
        default:
            return state;
    }
}

export default loading;