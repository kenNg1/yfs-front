import React, { Component } from 'react';
import { connect } from 'react-redux';
import SigninForm from './signin-form';

import * as actions from '../../actions';

class Signin extends Component {
  submit = values => {
    this.props.signInUser(values, () => {
      // this.props.history.push('/profile');
      this.props.history.goBack();
    });
  };

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div
          className="notification is-danger fade-in-animation"
          style={{ position: 'absolute', width: '300px', margin: '0 auto', left: 0, right: 0, zIndex: 999 }}
        >
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const landingBackground = {
      width: '100vw'
    };

    return (
      <div className="container-fluid" style={landingBackground}>
        <div className="container">
          <SigninForm onSubmit={this.submit} />
          {this.renderAlert()}
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = {
//   signInUser: actions.signInUser,
// }

const mapStateToProps = state => {
  return {
    errorMessage: state.userInfo.error
  };
};

export default connect(mapStateToProps, { signInUser: actions.signInUser })(Signin);
