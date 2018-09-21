import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/Header';
import Content from './Components/Content';
import Home from './Components/Home';
import About from './Components/About';
import BooksNavigation from './Components/BooksNavigation';
import BooksGrid from './Components/BooksGrid';

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Content>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/about"} component={About}/>
                    <Route path={"/books"} component={BooksNavigation}/>
                    <Route exact path={"/books"} render={(props) => <BooksGrid data={this.props.data} {...props} />} />
                    <Route path={"/books/javascript"} render={(props) => <BooksGrid data={this.props.data} {...props} />} />
                    <Route path={"/books/react"} render={(props) => <BooksGrid data={this.props.data} {...props} />} />
                    <Route path={"/books/angular"} render={(props) => <BooksGrid data={this.props.data} {...props} />} />
                </Content>
            </Fragment>
        )
    }
}

export default App;