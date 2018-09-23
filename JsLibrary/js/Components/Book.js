import React from 'react';

class Book extends React.Component {
    render() {
        return(
            <div className="book">
                <img src={`../../img/books/${this.props.book.cover}`} alt="cover" className="book-cover"/>
                <div className="book-description">
                    <h2 className="book-description__title">{this.props.book.title}</h2>
                    <p className="book-description__author">Автор: {this.props.book.author}</p>
                    <p className="book-description__year">Год: {this.props.book.year}</p>
                </div>
            </div>
        )
    }
}

export default Book;