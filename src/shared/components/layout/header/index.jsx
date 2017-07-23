import React, { Component } from 'react';
import style from './style.scss';

class Header extends Component {

  render() {
    return (<div className={style.header}>
      Mexico Noticas | <smal>Los Titulares más recientes</smal>
    </div>);
  }
}

export default Header;
