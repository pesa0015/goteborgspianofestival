const initialState = [];

const years = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_YEARS':
            return action.payload;
        case 'LIST_YEARS':
            return state;
        default:
            return state;
    }
}

export default years;