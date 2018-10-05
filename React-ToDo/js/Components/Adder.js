import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from "../actions";

class Adder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleTextChange(event) {
        this.setState({
            text: event.target.value
        })
    }

    handleAddTodo() {
        if (this.state.text === "") {
            alert("Заполните поле")
        } else {
            this.props.addTodo(this.state.text)
        }
        this.setState({
            text: ""
        })
    }

    render() {
        return(
            <section className="adder-section container">
                <div className="adder">
                    <input
                        name="text"
                        maxLength="100"
                        className="adder__input"
                        placeholder={"Текст..."}
                        value={this.state.text}
                        onChange={this.handleTextChange}
                    />
                    <button className="adder__btn" onClick={this.handleAddTodo}>Добавить</button>
                </div>
            </section>
        )
    }
}


export default connect(undefined, { addTodo })(Adder);