export const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [ ...state, {
                value: action.value,
                id: action.id
            }];
        case 'REMOVE_ITEM':
            return state.filter(
                (item) => item.id !== action.id
            );
        default:
            return state;
    }
};