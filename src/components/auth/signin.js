import React, {Component} from 'react';
import { connect } from 'react-redux';
import SigninForm from './signin-form';

import * as actions from '../../actions'

const mapDispatchToProps = {
  signInUser: actions.signInUser,
}

const mapStateToProps = state => {
  return {
    errorMessage:state.userInfo.error
  }
}

class Signin extends Component {

  submit = (values) => {
    this.props.signInUser(values, () => {
      this.props.history.push('/');      
    })    
  }

  renderAlert(){
    if(this.props.errorMessage){
      return(
        <div className="notification is-danger fade-in-animation" style={{position:'absolute',width:"300px",margin:"0 auto",left:0,right:0,zIndex:999}}>
          <strong>Oops!</strong> {this.props.errorMessage}         
        </div>
      )
    }
  }

  render(){
    console.log(this.props);
    console.log("hello");
        
    const landingBackground = {
      width: "100vw",
    }

    return (
      <div className='container-fluid' style={landingBackground}>
        <div className='container'>
          <SigninForm onSubmit={this.submit}/>
          {this.renderAlert()}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
