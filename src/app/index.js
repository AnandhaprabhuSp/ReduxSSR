import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ReduxToastr from 'react-redux-toastr';

class App extends Component {
  render() {
    console.log(this.props, 'this.props')
    const { device } = this.props;

    return (
      <div>
        <h1>hello world {device.isMobile ? 'mobile' : 'desktop'}</h1>
      </div>
    );
  }
}

App.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  // getData: React.PropTypes.func.isRequired,
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getData:bindActionCreators(getData,dispatch)
//   };
// };
const mapStateToProps =(state) => {
  return {
    device: state.device
  };
};

export default connect(mapStateToProps, null)(App);