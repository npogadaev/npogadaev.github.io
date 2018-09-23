export const opener = () => ({ type: 'OPEN' });
export const closer = () => ({ type: 'CLOSE' });
export const addArticle = (writer, text) => ({
    type: 'ADD_ARTICLE',
    writer,
    text,
    id: Date.now()
});
export const deleteArticle = (id) => ({
    type: 'DELETE_ARTICLE',
    id
});
