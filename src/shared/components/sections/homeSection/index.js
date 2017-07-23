import React, { Component } from 'react';
import { isArray } from 'lodash';

import HomeSectionContainer from '../../../containers/homeSectionContainer';
import { getNews } from '../../../actions/newsActions';
import NewsElement from '../../elements/newsElement';

class HomeSection extends Component {

  static renderNews(news) {
    if (isArray(news) && news.length) {
      return news.map(item => <NewsElement {...item} key={item._id} />);
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getNews());
  }

  render() {
    const { news } = this.props;
    console.log('news', news);
    return (<div>
      {HomeSection.renderNews(news)}
    </div>);
  }
}

export default HomeSectionContainer(HomeSection);
