const initialState = [];

const news = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEWS':
            return action.payload;
        default:
            return state;
    }
}

export default news;