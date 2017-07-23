import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Header from './layout/header';
import HomeSection from './sections/homeSection';

class AppHandler extends Component {

  render() {
    return (<div>
      <Header />
      <HomeSection />
    </div>);
  }
}

export default AppHandler;
