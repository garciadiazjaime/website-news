import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

import style from './style.scss';

class NewsElement extends Component {

  render() {
    const { title, image, link, source } = this.props;
    return (<div className={style.item}>
      <LazyLoad offsetVertical={500}>
        <Link to={`/articulo/${this.props._id}`} rel="nofollow" title={title}>
          <img src={image} className={style.image} alt={title} />
        </Link>
      </LazyLoad>
      <div className={style.title}>
        <Link to={`/articulo/${this.props._id}`} rel="nofollow" title={title}>{title}</Link>
        <span>Fuente: {source}</span>
      </div>
    </div>);
  }
}

export default NewsElement;
