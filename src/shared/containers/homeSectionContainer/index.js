import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { newsHelper } = state;
  const {
    isProcessing,
    lastUpdated,
    data: news,
  } = newsHelper || {
    isProcessing: true,
    data: [],
  };

  return {
    isProcessing,
    lastUpdated,
    news,
  };
};

export default connect(mapStateToProps);
