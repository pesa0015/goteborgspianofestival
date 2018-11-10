const initialState = [];

const sponsors = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SPONSORS':
            return action.payload;
        case 'LIST_SPONSORS':
            return state;
        default:
            return state;
    }
}

export default sponsors;