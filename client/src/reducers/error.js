export const error = (state = null, action) => {
    switch (action.type) {
        case 'SET_ERROR':
            return {
                title: action.title,
                body: action.body
            };
        case 'REMOVE_ERROR':
            return null;
        default:
            return state;
    }
};