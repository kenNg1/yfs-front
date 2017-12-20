import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import SigninForm from './signin-form';

import * as actions from '../../actions'

const mapDispatchToProps = {
  signInUser: actions.signInUser,
}

class Signin extends Component {
  submit = (values) => {
    this.props.signInUser(values, () => {
      this.props.history.push('/')
    })
  }
  render(){
    const landingBackground = {
      width: "100vw",
      height: "100%",
      minHeight: '100vh',
      backgroundColor: "#f0ad4e"
    }
    const centerText = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      WebkitTransform: 'translate(-50%, -50%)',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      fontSize: '40px'
    }
    return (
      <div className='container-fluid' style={landingBackground}>
        <div className='contanier' style={centerText}>
          <SigninForm onSubmit={this.submit}/>
        </div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Signin);
