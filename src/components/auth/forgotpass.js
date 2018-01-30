import React, {Component} from 'react';
import { connect } from 'react-redux';
import ForgotPassForm from './forgotpass-form.js';

import * as actions from '../../actions'

const mapDispatchToProps = {
  signInUser: actions.signInUser,
}

const mapStateToProps = state => {
  return {
    errorMessage:state.userInfo.error
  }
}

class ForgotPass extends Component {

    submit = (values) => {
        console.log(values)
        // this.props.signInUser(values, () => {
        //   // this.props.history.push('/profile');      
        //   this.props.history.goBack();      
        // })    
      }
        
      render(){
            
        const landingBackground = {
          width: "100vw",
        }
    
        return (
          <div className='container-fluid'>
            <div className='container'>
                <br/>
                <br/>
                <ForgotPassForm onSubmit={this.submit}/>
            </div>
          </div>
        )
      }
    }
    
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPass);
    
