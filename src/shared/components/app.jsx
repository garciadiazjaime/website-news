import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './layout/header';
import HomeSection from './sections/homeSection';
import ArticleSection from './sections/articleSection';

class AppHandler extends Component {

  render() {
    return (<div>
      <Header />
      <Route exact path="/" component={HomeSection} />
      <Route path="/articulo/:id" component={ArticleSection} />
    </div>);
  }
}

export default AppHandler;
