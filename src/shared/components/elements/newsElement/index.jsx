import React, { Component } from 'react';

class NewsElement extends Component {

  render() {
    const { id, title, source } = this.props;
    return (<div>
      {title} <br />
      source: {source}
    </div>);
  }
}

export default NewsElement;
