import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';

import style from './style.scss';

class NewsElement extends Component {

  render() {
    const { id, title, image, link, source } = this.props;
    return (<div className={style.item}>
      <LazyLoad offsetVertical={500}>
        <img src={image} className={`img-responsive ${style.image}`} />
      </LazyLoad>
      <div className={style.title}>
        <a href={link} target="_blank">{title}</a>
        <span>Fuente: {source}</span>
      </div>
    </div>);
  }
}

export default NewsElement;
