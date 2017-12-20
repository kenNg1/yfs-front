import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import SignupForm from './signup_form'
import * as actions from '../../actions';

const mapDispatchToProps = {
  signUpUser: actions.signUpUser,
}

class Signup extends Component {

  submit = (values) => {
    this.props.signUpUser(values, () => {
      this.props.history.push('/')
    })
  }
  render(){
    const landingBackground = {
      position: 'relative',
      paddingTop: '10vh',
      paddingLeft: '10%',
      paddingRight: '10%',
      paddingBottom: '3vh',
      width: "100vw",
      height: "100%",
      minHeight: '100vh',
      backgroundColor: "#5bc0de"
    }
    const centerText = {
      position: 'relative',
      width: '100%',
      height: '100%',
      color: 'black'
    }
    return (
      <div className='container-fluid' style={landingBackground}>
        <div style={centerText}>
          <SignupForm onSubmit={this.submit}/>
        </div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Signup);
