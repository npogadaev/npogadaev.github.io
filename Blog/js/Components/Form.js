import React from 'react';

import { connect } from 'react-redux';

import { addArticle, closer } from "../actions";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            writer: "",
            text: ""
        };
        this.handleWriterChange = this.handleWriterChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleAddArticle = this.handleAddArticle.bind(this);
    }

    handleWriterChange(event) {
        this.setState({
            writer: event.target.value
        })
    }

    handleTextChange(event) {
        this.setState({
            text: event.target.value
        })
    }

    handleAddArticle() {
        this.props.closer();
        this.props.addArticle(this.state.writer, this.state.text);
    }

    render() {
        return(
            <form className={'main-form'} action="#">
                <label htmlFor="input-1">Автор</label>
                <input
                    type="text"
                    className="main-form__input"
                    id={"input-1"}
                    value={this.state.writer}
                    onChange={this.handleWriterChange}
                />
                <label htmlFor="input-2">Текст</label>
                <textarea
                    cols="42"
                    rows="20"
                    className={"main-form__textarea"}
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <button className="header-menu__btn" onClick={this.handleAddArticle}>Опубликовать</button>
            </form>
        );
    }
}

export default connect(undefined, { addArticle, closer })(Form);