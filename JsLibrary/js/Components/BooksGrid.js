import React from 'react';

import Book from './Book';

const BooksGrid = ({ match, data }) => {
    const books = match.url !== '/books' ? data.filter(book => book.topic === match.url) : data;

    return(
        <section className="books-grid">
            {
                books.map((book, index) =>
                    <Book key={index} book={book}/>
                )
            }
        </section>
    )
};

export default BooksGrid;