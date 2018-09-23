export const ping = (store) => (next) => (action) => {
    console.log(`Action type: ${action.type}, additional date: ${action.payload}`);
    return next(action)
};