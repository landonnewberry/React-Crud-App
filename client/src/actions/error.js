export const addError = (ERROR) => ({
    type: 'SET_ERROR',
    title: ERROR.title,
    body: ERROR.body
});


export const errorTypes = {
    NO_CONNECTION: {
        title: 'NO INTERNET CONNECTION',
        body: 'Check your internet connection and refresh your page to try again.'
    }
};