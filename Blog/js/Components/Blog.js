import React, {Fragment} from 'react';

import Header from './Header';
import ArticleContainer from './ArticleContainer';

class Blog extends React.Component {

    render() {
        return(
            <Fragment>
                <Header/>
                <ArticleContainer/>
            </Fragment>
        );
    }
}

export default Blog;