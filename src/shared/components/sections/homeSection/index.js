import React, { Component } from 'react';
import { isArray } from 'lodash';

import NewsContainer from '../../../containers/newsContainer';
import NewsElement from '../../elements/newsElement';

class HomeSection extends Component {

  static renderNews(news) {
    if (isArray(news) && news.length) {
      return news.map(item => <NewsElement {...item} key={item.id} />);
    }
  }

  render() {
    const { news } = this.props;
    console.log('news', news);
    return (<div>
      {HomeSection.renderNews(news)}
    </div>);
  }
}

export default NewsContainer(HomeSection);
