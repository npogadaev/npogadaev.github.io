import React from 'react';
import { createStore, applyMiddleware } from 'redux';

import { ping } from './enhuncers/ping';

import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(ping));

export default store;