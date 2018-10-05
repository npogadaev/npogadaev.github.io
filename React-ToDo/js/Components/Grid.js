import React from 'react';
import { connect } from 'react-redux';

import Todos from './Todos';
import { deleteTodo, toggleTodo } from "../actions";

const Grid = (props) => {
    return(
        <section className="grid-section container">
            <div className="grid">
                {
                    props.addTodo.map((todos) =>
                        <Todos
                            key={todos.id}
                            id={todos.id}
                            text={todos.text}
                            active={todos.active}
                            onDelete={props.deleteTodo}
                            onToggle={props.toggleTodo}
                        />
                    )
                }
            </div>
        </section>
    )
};

const mapStateToProps = (state) => ({ addTodo: state });

export default connect(mapStateToProps, { deleteTodo, toggleTodo })(Grid);