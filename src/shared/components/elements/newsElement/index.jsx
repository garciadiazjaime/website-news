import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';

import style from './style.scss';

class NewsElement extends Component {

  render() {
    const { id, title, image, link, source } = this.props;
    return (<div className={`list-group-item ${style.item}`}>
      <p>
        <b><a href={link} target="_blank">{title}</a></b>
      </p>
      <LazyLoad offsetVertical={500}>
        <img src={image} className="img-responsive" />
      </LazyLoad>
      Fuente: {source}
    </div>);
  }
}

export default NewsElement;
