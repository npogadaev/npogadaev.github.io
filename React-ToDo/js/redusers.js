import React from 'react';

function reducer(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO': {
            return[
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    active: true
                }
            ]
        }

        case 'TOGGLE_TODO': {
            return state.map((todos) =>
                todos.id === action.id ?
                    Object.assign({}, todos, {
                        active: !todos.active
                    }) : todos
            )
        }

        case 'DELETE_TODO': {
            return state.filter(todos => todos.id !== action.id)
        }

        default: {
            return state
        }
    }
}

export default reducer;