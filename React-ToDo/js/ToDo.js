import React, { Fragment } from 'react';

import Header from './Components/Header';
import Adder from './Components/Adder';
import Grid from './Components/Grid';

const ToDo = () => {
    return (
        <Fragment>
            <Header/>
            <Adder/>
            <Grid/>
        </Fragment>
    );
};

export default ToDo;