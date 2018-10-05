import React from 'react';

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.props.onToggle(this.props.id)
    }

    handleDelete() {
        this.props.onDelete(this.props.id)
    }

    render() {
        return(
            <div onClick={this.handleToggle} className={this.props.active ? "todos todos-active" : "todos todos-complite"}>
                <p className="todos__text">{this.props.text}</p>
                <span className="todos__closer" onClick={this.handleDelete}><i className="fas fa-trash-alt fa-lg todos__closer-hover"  /></span>
            </div>
        )
    }
}

export default Todos;