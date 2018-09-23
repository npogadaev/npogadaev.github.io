import React from 'react';
import { connect } from 'react-redux';

import Article from './Article';
import { deleteArticle } from '../actions'

class ArticleContainer extends React.Component {

    render() {
        return(
            <section className="article-container-section">
                <div className="container">
                    <div className="article-container">
                        {
                           this.props.addArticle.map((article) =>
                                <Article
                                    key={article.id}
                                    id={article.id}
                                    writer={article.writer}
                                    text={article.text}
                                    onDelete={this.props.deleteArticle}
                                />
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToprops = (state) => ({ addArticle: state.addArticle });

export default connect(mapStateToprops, { deleteArticle })(ArticleContainer);