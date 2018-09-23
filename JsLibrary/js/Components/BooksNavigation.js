import React from 'react';
import { NavLink } from 'react-router-dom';

const BooksNavigation = () => {
    return(
        <div className="books-navigation">
            <div className="books-navigation-item">
                <img src="../../img/icons/javascript.svg" alt="JavaScript"/>
                <NavLink to="/books/javascript" className="books-navigation-item__link">JavaScript</NavLink>
            </div>
            <div className="books-navigation-item">
                <img src="../../img/icons/react.svg" alt="React"/>
                <NavLink to="/books/react" className="books-navigation-item__link">React</NavLink>
            </div>
            <div className="books-navigation-item">
                <img src="../../img/icons/angular.svg" alt="Angular"/>
                <NavLink to="/books/angular" className="books-navigation-item__link">Angular</NavLink>
            </div>
        </div>
    )
};

export default BooksNavigation;