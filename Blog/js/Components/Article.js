import React from 'react';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.onDelete(this.props.id)
    }

    render() {
        return(
            <div className="article">
                <span className="article-delete" onClick={this.handleDelete}>&#215;</span>
                <h2 className="article-autor">{this.props.writer}</h2>
                <p className="article-text">{this.props.text}</p>
            </div>

        )
    }
}

export default Article;