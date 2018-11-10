const initialState = [];

const eventPages = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EVENT_PAGE':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default eventPages;