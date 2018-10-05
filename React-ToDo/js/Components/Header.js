import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: 0,
            complete: 0
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({headerWidth: window.innerWidth > 768});
    }

    render() {
        return(
            <section className="header-section container">
                {
                    this.state.headerWidth ?
                        <div className="header">
                            <div className="header-counters">
                                <p className="header-counters__item">Всего задач: {this.state.task}</p>
                                <p className="header-counters__item">Выполнено: {this.state.complete}</p>
                            </div>
                            <div className={"header-logo"}>
                                <i className="fab fa-react fa-6x header-logo__img" />
                                <p className={"header-logo__text"}>React</p>
                            </div>
                        </div>
                        :
                        <div className="header">
                            <div className={"header-logo"}>
                                <i className="fab fa-react fa-6x header-logo__img" />
                                <p className={"header-logo__text"}>React</p>
                            </div>
                        </div>
                }
            </section>
        )
    }
}

export default Header;