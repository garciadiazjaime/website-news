import React, { Component } from 'react';
import { isArray } from 'lodash';

import { getNews } from '../../../actions/newsActions';
import HomeSectionContainer from '../../../containers/homeSectionContainer';
import constants from '../../../../constants';
import style from './style.scss';

class ArticleSection extends Component {

  static getNews(news, newsId) {
    if (isArray(news) && news.length) {
      return news.filter(item => item._id === newsId).pop();
    }
    return null;
  }

  static renerDescription(description) {
    if (isArray(description) && description.length) {
      return description.slice(0, constants.paragraphsToShow).map((item, index) => <p key={index}>{item}</p>);
    }
    return null;
  }

  constructor(args) {
    super(args);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getNews());
  }

  render() {
    const { news, match } = this.props;
    const article = ArticleSection.getNews(news, match.params.id);

    return article ? (<div className={style.article}>
      <img src={article.image} alt={article.title} />
      <div className={style.info}>
        <h2>{article.title}</h2>
        {ArticleSection.renerDescription(article.description)}
        <span>Fuente: {article.source}</span>
        <a href={article.link} title={article.title} target="_blank" rel="nofollow">Ver nota original</a>
      </div>
    </div>) : null;
  }
}

export default HomeSectionContainer(ArticleSection);
