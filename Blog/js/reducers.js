import React from 'react';
import { combineReducers } from 'redux';

function showForm(state = { isOpen: false }, action) {
    switch (action.type) {
        case 'OPEN': {
            return (
                Object.assign({}, state, {
                    isOpen: true
                })
            )
        }

        case 'CLOSE': {
            return(
                Object.assign({}, state, {
                    isOpen: false
                })
            )
        }

        default: {
            return state
        }
    }
}

function addArticle(state = [], action) {
    switch (action.type) {
        case 'ADD_ARTICLE': {
            return[
                ...state,
                {
                    id: action.id,
                    writer: action.writer,
                    text: action.text
                }
            ]
        }

        case 'DELETE_ARTICLE': {
            return state.filter(article => article.id !== action.id)
        }

        default: {
            return state
        }
    }
}

const reducer = combineReducers({
    showForm,
    addArticle
});

export default reducer;