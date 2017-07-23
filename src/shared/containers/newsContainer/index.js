import { connect } from 'react-redux';

const mapStateToProps = (state) => {

  return {
    news: [{title: 'title', image: 'image', source: 'source', id: 1}],
  };
};

export default connect(mapStateToProps);
