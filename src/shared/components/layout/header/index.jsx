import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import style from './style.scss';

class Header extends Component {

  render() {
    return (<div className={style.header}>
      <Link to="/" title="Las Noticias más recientes de México">
        <h1>Los Titulares más recientes México</h1>
      </Link>
    </div>);
  }
}

export default Header;
