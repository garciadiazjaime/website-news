import React, { Component } from 'react';

import style from './style.scss';

class NewsElement extends Component {

  render() {
    const { id, title, image, source } = this.props;
    return (<div className={`list-group-item ${style.item}`}>
      <p>
        <b>{title}</b>
      </p>
      <p>
        <img src={image} className="img-responsive" />
      </p>
      Fuente: {source}
    </div>);
  }
}

export default NewsElement;
