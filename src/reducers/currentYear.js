const initialState = {};

const currentYear = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CURRENT_YEAR':
            return {
                ...state,
                year: action.payload.year,
                from: action.payload.from,
                to: action.payload.to,
                month: action.payload.month,
                countdown: action.payload.countdown,
                locations: action.payload.locations.data
            };
        case 'LIST_CURRENT_YEAR':
            return state;
        default:
            return state;
    }
}

export default currentYear;