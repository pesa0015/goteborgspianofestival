const initialState = [];

const boardMembers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MEMBERS':
            return action.payload;
        default:
            return state;
    }
}

export default boardMembers;