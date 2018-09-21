import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import data from '../data/books';

ReactDOM.render(
    <BrowserRouter>
        <App data={data} />
    </BrowserRouter>,

    document.querySelector('#root')
);