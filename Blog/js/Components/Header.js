import React from 'react';
import { connect } from 'react-redux';

import Form from './Form';
import { opener } from '../actions';

class Header extends React.Component {
    render() {
        return (
            <section className={'header'}>
                <div className="container">
                    <div className="header-menu">
                        <button className="header-menu__btn" onClick={this.props.opener}>Создать статью</button>
                    </div>
                </div>
                { this.props.isOpen ? <Form/> : null }
            </section>
        );
    }
}

const mapStateToProps = (state) => ({ isOpen: state.showForm.isOpen });
// const mapDispatchToProps = (dispatch) => ({ opener: () => dispatch({ type: 'OPEN' }) });

export default connect(mapStateToProps, { opener })(Header);

