import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
    render() {
        return(
            <header className="header">
                <p className="header-logo">JS library</p>
                <div className="header-links">
                    <NavLink exact to="/" className="header-links__item">Главная</NavLink>
                    <NavLink to="/about" className="header-links__item">О проекте</NavLink>
                    <NavLink exact to="/books" className="header-links__item">Книги</NavLink>
                </div>
            </header>
        )
    }
}

export default Header;