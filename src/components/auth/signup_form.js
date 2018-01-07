import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import { ALLCOUNTRIES, CITIES, SCHOOLS, FAMILIARITY } from '../UI/formOptions'
import '../../styles/animations.css'
import { connect } from 'react-redux'
import FlagIcon from '../UI/FlagIcon.js'

const mapStateToProps = state => {
  return {
  formState: state.form.signup
  }
};

class SignupForm extends Component{

  handleInitialize(user) {
    if(this.props.edit){     
      const email = localStorage.getItem('email')
      const initData = {
        ...user,
        email
      }; 
      console.log(initData)
      this.props.initialize(initData);
    }
  }

  componentDidMount(){
    if(this.props.edit){
    console.log("happenin")
    const user = this.props.userProfile;

    console.log(this.handleInitialize(user));
    }
  }

  render(){
    const { handleSubmit, pristine, reset, submitting } = this.props

    const radioButtonMargins = {
      marginRight: '10px',
    }
  
    const DIAL_CODES = [...ALLCOUNTRIES].sort((a,b) => {
      return (a.dial_code > b.dial_code) ? 1 : ((b.dial_code > a.dial_code) ? -1 : 0)
    }) 

    let dialCodeClass = null;
    let dialCode = null;
    let phonePlaceholder = "Select area code"
    let mobileNumberDisabled = true

    if(this.props.formState && this.props.formState.values && this.props.formState.values.code){
      const code = this.props.formState.values.code.toLowerCase()
      dialCodeClass=  ["form-control","flag-icon-select",`flag-icon-${code}`].join(" ")
      let dc = DIAL_CODES.filter((country)=>{
        return country.code==this.props.formState.values.code
      }).map((country)=>{return country.dial_code})[0]
      dialCode = <span className="input">{dc}</span>
      phonePlaceholder = "Enter phone no";
      mobileNumberDisabled = false;
    }

    let formAnimation = null;
    if(this.props.edit){
      formAnimation = "container pullDown"
    } else {
      formAnimation = "container pullUp"
    }
  
    return (
            <div className={formAnimation}> 
              <form onSubmit={handleSubmit} >
                <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">First Name *</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <p className="control has-icons-left">
                      <Field name="firstName" component="input" type="text" placeholder="First Name" className='input'/>
                      <span className="icon is-small is-left">
                        <i className="fa fa-user"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
      
              <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Last Name *</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <p className="control has-icons-left">
                    <Field name="lastName" component="input" type="text" placeholder="Last Name" className='input'/>
                    <span className="icon is-small is-left">
                      <i className="fa fa-user"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
  
            {this.props.formType==="mentor"? null :
            <div style={{marginBottom:'5px'}}>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Date of Birth *</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                      <Field name="dob" component="input" type="date" placeholder="Date of Birth" className="input" />
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label">
                  <label className="label">Gender</label>
                </div>
                <div className='field-body'>
                  <div className="radio">
                    <label><Field name="gender" component="input" type="radio" value="Male"/> Male</label>
                  </div>
                  <div className="radio">
                    <label><Field name="gender" component="input" type="radio" value="Female"/> Female</label>
                  </div>
                </div>
                <br/>
              </div>
            </div>
            }
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Email *</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <p className="control is-expanded has-icons-left has-icons-right">
                      <Field name="email" component="input" type="email" placeholder="Email" className="input is-success" />
                      <span className="icon is-small is-left">
                        <i className="fa fa-envelope"></i>
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fa fa-check"></i>
                      </span>
                    </p>
                </div>
              </div>
            </div>
      
            { this.props.edit?
              <div className="field is-horizontal">
                <div className="field-label">
                  <label className="label">Mobile Number *</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="field has-addons">
                      <Field name="mobileNumber" component="input" type="text" placeholder="Enter mobile no" className="input" />
                    </div>
                  </div>
                </div>
              </div>
              :
              <div className="field is-horizontal">
                <div className="field-label">
                  <label className="label">Mobile Number *</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="field has-addons">
                        <div className="select">
                          <Field name="code" component="select" className={dialCodeClass} style={{paddingLeft:'50px',width:'50px'}} >
                            <option value="">Select </option>
                            {DIAL_CODES.map(country => 
                              <option key={country.name} value={country.code}>{country.dial_code} ({country.code}) </option>
                            )}
                          </Field>
                        </div>
                        <p className="control is-normal">
                          {dialCode}
                          <Field name="mobileNumber" component="input" type="tel" disabled={mobileNumberDisabled} placeholder={phonePlaceholder} className="input" />
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            }

  
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Country of residence *</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <Field name="country.name" component="select" className="form-control" >
                        {ALLCOUNTRIES.map(country =>
                          <option value={country.name} key={country.name}>{country.name}</option>)}
                      </Field>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {this.props.formType==="student"? null :
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">In which city would you like to participate with YFS?</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <Field name="cityName" component="select" className="form-control" >
                      <option value="">Select a city... </option>
                        {CITIES.map(city =>
                          <option value={city} key={city}>{city}</option>)}
                      </Field>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            }
            
            {this.props.formType==="mentor"? null :
            <div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">School *</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <div className="control">
                      <Field name="schoolName" component="input" type="text" placeholder="Your current school" className='input'/>
                    <p style={{paddingLeft:'0.25rem'}} className="help">Full school name please, no abbreviations!</p>
                    </div>
                  </div>
                </div>
              </div>
              
        
              <br />
              <i className="fas fa-star favicon-title" style={{color:'hsl(48,100%,67%)'
  }}></i><p className="subtitle is-4 title-left-favicon">Skills</p>
              <hr />
        
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Google Slides? *</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <div className="control">
                      <div className="select is-fullwidth">
                        <Field name="googleSlides" component="select" className="form-control" >
                        <option value="">Please choose an option</option>
                          {FAMILIARITY.map(op =>
                            <option value={op} key={op}>{op}</option>)}
                        </Field>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Google Docs? *</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <div className="control">
                      <div className="select is-fullwidth">
                        <Field name="googleDocs" component="select" className="form-control" >
                        <option value="">Please choose an option</option>
                          {FAMILIARITY.map(op =>
                            <option value={op} key={op}>{op}</option>)}
                        </Field>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Microsoft Office? *</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <div className="control">
                      <div className="select is-fullwidth">
                        <Field name="microsoftOffice" component="select" className="form-control" >
                        <option value="">Please choose an option</option>
                          {FAMILIARITY.map(op =>
                            <option value={op} key={op}>{op}</option>)}
                        </Field>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <br />
              <i className="fas fa-graduation-cap favicon-title" style={{color:'hsl(83,73%,59%)'}}></i>
              <p className="subtitle is-4 title-left-favicon">Plans</p>
              <hr />
        
              <div className="field is-horizontal">
                <div className="field-label">
                  <label className="label">Do you plan to go to university?</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <div className="select is-normal">
                        <Field name="willGoUni" component="select" className="form-control" >
                          <option>Yes</option>
                          <option>No</option>
                        </Field>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">What university do you plan to go to?</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <p className="control is-normal">
                      <Field name="desiredUniversity" component="input" type="text" placeholder="Your first choice" className='input'/>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            }
  
            {this.props.formType==="student"? null :
            <div>
              <br/>
              <p className="subtitle is-4">Experience</p>
              <hr />
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">What industry are you currently in?</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <p className="control is-normal">
                      <Field name="industry" component="input" type="text" placeholder="Select from the dropdown (placeholder)" className='input'/>
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">What company do you work at?</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <p className="control is-normal">
                      <Field name="companyName" component="input" type="text" className='input'/>
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">What's your role in the company?</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <p className="control is-normal">
                      <Field name="title" component="input" type="text" placeholder="Please provide your position/title" className='input'/>
                    </p>
                  </div>
                </div>
              </div>
              
              <br/>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label subtitle is-4">Tell us more about yourself</label>
                </div>
                <hr/>
                <div className="field-body">
                  <div className="field">
                      <Field name="about" className="textarea" rows="5" component="textarea" placeholder="We'd love to hear a brief introduction about yourself and why would like to take part!" />
                  </div>
                </div>
              </div>
  
              <br/>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label subtitle is-4">How would you like to be involved with YFS?</label>
                </div>
                <hr/>
                <p>CHECK BOXES - ALLOW MULTIPLE</p>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <div className="select is-normal">
                        <Field name="participation" component="select" className="form-control" >
                          <option>Speaker</option>
                          <option>Floating Mentor</option>
                          <option>Fixed Mentor</option>
                          <option>VC Panelist</option>
                        </Field>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="box" onClick={()=> this.formActiveHandler("mentor")} style={{border:'1px solid hsl(348, 100%, 61%)',padding:'0.75rem'}}>
                  <span><i className="fa fa-exclamation-circle" style={{color:"hsl(348, 100%, 61%)"}} aria-hidden="true"></i><p className="title is-5" style={{display:"inline"}}> &nbsp;Helpful Notes:</p></span>
                  <ul>
                    <hr style={{margin:'0.5rem 0'}}/>
                    <li><b>Speaker:</b> Required on either Sat or Sun morning</li>
                    <li><b>Fixed Mentor:</b> Required for the duration of the bootcamp</li>
                    <li><b>Floating Mentor:</b> Required at the bootcamp for at least half a day on either Sat or Sun</li>
                    <li><b>VC Panelist:</b> Required at 4:30pm on Sun</li>
                  </ul>
              </div>
  
            </div>
            }
  
            { this.props.edit?null:
              <div>
              <hr />
              <p className="subtitle is-4">Create a password</p>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Password *</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <p className="control has-icons-left">
                      <Field name="password" component="input" type="password" placeholder="Password" className='input'/>
                      <span className="icon is-small is-left">
                        <i className="fa fa-unlock"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
        
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Password Confirmation*</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <p className="control has-icons-left">
                      <Field name="password1" component="input" type="password" placeholder="Password confirmation" className='input'/>
                      <span className="icon is-small is-left">
                        <i className="fa fa-unlock"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            }
            <br/>
  
            <div className="field is-horizontal">
              <div className="field-label">
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <button type="submit" className='button is-primary' style={radioButtonMargins}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset} className='btn button is-danger'>Reset Form</button>
                  </div>
                </div>
              </div>
            </div>

          </form>
        </div>
      //         <label>Do you plan to go to university?</label>
      //         <div className="radio">
      //           <label style={radioLabelMargins}><Field name="true" component="input" type="radio" value="true"  style={radioButtonMargins}/>Yes</label>
      //           <label style={radioLabelMargins}><Field name="false" component="input" type="radio" value="false"  style={radioButtonMargins}/>No</label>
      //         </div>
      //       </div>
      //       <div className='form-group'>
      //         <label>Which university do you plan to attend?</label>
      //         <div>
      //           <Field name="university" component="input" type="text" placeholder="University Name" className='form-control'/>
      //         </div>
      //       </div>
      //       <div className='form-group'>
      //         <label>What do you plan to do after high school graduation?</label>
      //         <div>
      //           <Field name="plans" component="input" type="text" placeholder="Plans" className='form-control'/>
      //         </div>
      //       </div>
      //       <div className='form-group'>
      //         <label>How did you hear about Young Founders School?</label>
      //         <div>
      //           <Field name="hear" component="select" className="form-control" >
      //             <option value="">Select an option...</option>
      //               {hears.map(countryOption =>
      //                 <option value={countryOption} key={countryOption}>{countryOption}</option>)}
      //           </Field>
      //         </div>
      //       </div>
      //       <div>
      //         <label>Terms and Conditions</label>
      //         <div>
      //           <Field name="terms" id="terms" component="input" type="checkbox" style={radioButtonMargins}/><span>I have read the terms and conditions</span>
      //         </div>
      //       </div>
      //       <hr />
      //       <div>
      //         <button type="submit" disabled={pristine || submitting} className='btn btn-primary' style={radioButtonMargins}>Submit</button>
      //         <button type="button" disabled={pristine || submitting} onClick={reset} className='btn btn-danger'>Reset Form</button>
      //       </div>
      //     </div>
      //   </div>
      // </form>
    )
  }
} 



SignupForm = reduxForm({
  // a unique name for the form
  form: 'signup',
  // initialValues: {
  //   tier: "Student"
  // }
})(SignupForm)

export default connect(mapStateToProps)(SignupForm);
