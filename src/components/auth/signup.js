import React, {Component} from 'react';
import { connect } from 'react-redux';
import SignupForm from './signup_form'
import * as actions from '../../actions';
import { ALLCOUNTRIES } from '../UI/formOptions'


const mapDispatchToProps = {
  signUpUser: actions.signUpUser,
}

class Signup extends Component {

  state = {
    formType:''
  }

  submit = (values,error) => {
   
    values.tier = this.state.formType;

    if(values.country){
      values.countryName = values.country.name;
    }

    if(values.city){
      values.cityName = values.city.name;
    }
    
    const dialCode = ALLCOUNTRIES.filter((country)=>{
      return country.code===values.code
    }).map((country)=>{return country.dial_code})[0]

    if(dialCode){
      values.mobileNumber = `${dialCode}-${values.mobileNumber}`
    }

    this.props.signUpUser(values, () => {
      this.props.history.push('/profile')
    })
  }

  formActiveHandler = (type) => {
    this.setState({formType:type});
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
      minHeight: '100vh'
      }
    const centerText = {
      position: 'relative',
      width: '100%',
      color: 'black'
    }
    return (
      <div className='container-fluid' style={landingBackground}>
        <div style={centerText}>
          {this.state.formType==='mentor'? null :
          <div className="box" onClick={()=> this.formActiveHandler("student")} style={{border:'1px solid hsl(171, 100%, 41%)',cursor:'pointer'}}>
            <p className="title is-5 is-spaced">SIGN UP AS A STUDENT</p>
            <span><i className="fas fa-child" aria-hidden="true" style={{color:"hsl(171, 100%, 41%)"}}></i><p className="title is-6" style={{display:"inline"}}> &nbsp;Requirements:</p></span>
            <ul>
              <li>You must be 12 or older</li>
            </ul>
          </div>
          }
          {this.state.formType!==''? null :<hr />}
          {this.state.formType==='student'? null :
          <div className="box" onClick={()=> this.formActiveHandler("mentor")} style={{border:'1px solid hsl(217, 71%, 53%)',cursor:'pointer'}}>
            <p className="title is-5 is-spaced">SIGN UP AS A MENTOR</p>
            <span><i className="fas fa-child" aria-hidden="true" style={{color:"hsl(217, 71%, 53%)"}}></i><p className="title is-6" style={{display:"inline"}}> &nbsp;Requirements:</p></span>
            <ul>
              <li>You must be 18 or older</li>
              <li>3+ years working experience</li>
              <li>Have a passion to coach young founders</li>
            </ul>
          </div>
          }
          {this.state.formType===''? null : <SignupForm formType={this.state.formType} onSubmit={this.submit}/>}
        </div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Signup);
