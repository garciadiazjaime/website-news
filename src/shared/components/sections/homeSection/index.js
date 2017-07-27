import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isArray } from 'lodash';

import HomeSectionContainer from '../../../containers/homeSectionContainer';
import { getNews } from '../../../actions/newsActions';
import NewsElement from '../../elements/newsElement';

class HomeSection extends Component {

  static renderNews(news) {
    if (isArray(news) && news.length) {
      return news.slice(0, 50).map(item => <NewsElement {...item} key={item._id} />);
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getNews());
  }

  render() {
    const { news } = this.props;
    return (<div>
      {HomeSection.renderNews(news)}
    </div>);
  }
}

HomeSection.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({})),
};

HomeSection.defaultProps = {
  selectedGroup: [],
};

export default HomeSectionContainer(HomeSection);
