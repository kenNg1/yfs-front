import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import { STANDARD_SELECT, ALLCOUNTRIES, INDUSTRIES, CITIES, FAMILIARITY } from '../UI/formOptions'
import '../../styles/animations.css'
import { connect } from 'react-redux'
import FlagIcon from '../UI/FlagIcon.js'


const Fragment = React.Fragment;

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
      this.props.initialize(initData);
    }
  }

  // componentDidMount(){
  //   if(this.props.edit){
  //   const user = this.props.userProfile;
  //   }
  // }

  renderField = ({ input, className, disabled, placeholder, type, meta: { touched, error, warning } }) => {

    if(touched && !error) {
      className = className + " is-success"
    }

    return <Fragment>
          <input {...input} className={className} placeholder={placeholder} type={type} disabled={disabled}/>
          {touched && (
            (error && <span className="help is-danger">{error}</span>) || 
            (warning && <Fragment><span className="help is-danger">{warning}</span><br/></Fragment>) ||
            (!error && <span className="icon is-small is-right"><i className="fa fa-check"></i></span>)
          )
          }
      </Fragment>
  }

  renderTextArea = ({ input, className, disabled, placeholder, type, meta: { touched, error, warning } }) => {

    if(touched && !error) {
      className = className + " is-success"
    }

    return <Fragment>
          <textarea {...input} className={className} placeholder={placeholder} type={type} disabled={disabled}/>
          {touched && (
            (error && <span className="help is-danger">{error}</span>) || 
            (warning && <Fragment><span className="help is-danger">{warning}</span><br/></Fragment>) ||
            (!error && <span className="icon is-small is-right"><i className="fa fa-check"></i></span>)
          )
          }
      </Fragment>
  }
  
  renderSelectField = ({ input, className, style, label, type, meta: { touched, error }, children }) => {
    if(input.value===""){
      style = {color:'#dbdbdb'}
    }
    return (
        <div>
          <div>
            <select {...input} className={className} style={style}>
              {children}
            </select>
            {touched && error && <Fragment><span className="help is-danger">{error}</span></Fragment>}
          </div>
        </div>
    )}

    renderRadioField = ({ input, options, className, style, label, type, meta: { touched, error }, children }) => {  
        const renderRadioButtons = (key, index) => {
          return (
            <label key={`${index}`} htmlFor={`${input.name}-${index}`} style={{marginRight:'20px'}}>
              <Field
                component="input"
                name={input.name}
                type="radio"
                validate={[this.required]}
                value={key}
                style={{marginRight:'5px'}}
              />
              {options[key]}
            </label>
          )
        };
        return (
          <div>
            <div>
              {label}
            </div>
            <div>
              {options &&
                Object.keys(options).map(renderRadioButtons)}
            </div>
            {touched && error && <Fragment><span className="help is-danger">{error}</span></Fragment>}
          </div>
        );
    }

    renderCheckBoxesField = ({label, options, input, meta: { touched, error }}) => {  
      return options.map((option, index) => {
        return (
        <div className="checkbox" key={index} >
            <label style={{marginRight:'15px'}}>
                <input type="checkbox"
                       name={`${input.name}[${index}]`}
                       value={option.name}
                       style={{marginRight:'10px'}}
                       checked={input.value.indexOf(option.name) !== -1}
                       onChange={(event) => {
                           const newValue = [...input.value];
                           if (event.target.checked) {
                               newValue.push(option.name);
                           } else {
                               newValue.splice(newValue.indexOf(option.name), 1);
                           }
                           return input.onChange(newValue);
                       }}/>
                {option.name}
            </label>
        </div>)
    });
  }


  email = value => {
    if(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
      return 'Invalid email address'
    } else {
      return undefined
    }
  }

  minLength = min => value => 
    value && value.length < min ? `Must be at least ${min} characters long, no abbreviations please!` : undefined
  

  dob = value => {

    var today = new Date();
    var birthDate = new Date(value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    if(age<12){
      return 'You need to be over 12 to participate!'
    } else if(age>17){
      return 'You need to be 17 or below to participate!'
    } else {
      return undefined
    }
  }

  required = value => value ? undefined : 'Required field'

  validatePassword = value => {
    const errors = []
    if (value.length < 8) {
      errors.push("be at least 8 characters long"); 
    }
    if (value.search(/[0-9]/) < 0) {
      errors.push("contain at least 1 digit"); 
    }
    if (value.search(/[A-Z]/) < 0) {
      errors.push("contain at least 1 upper case letter"); 
    }
    if (value.search(/[a-z]/i) < 0) {
      errors.push("contain at least 1 lower case letter"); 
    }
    if (errors.length > 1) {
      const start = errors.splice(0,errors.length-1) ;
      const end = errors[errors.length-1] ;
      return `Your password must ${start.join(", ")} and ${end}`;
    } else if(errors.length===1){
      return `Your password must ${errors.join("")}`;
    }
    return undefined
  }


  checkPasswordsMatch = (value) => {
    if(this.props.formState && this.props.formState.values && this.props.formState.values.password !== value){
      return "Passwords do not match"
    } else {
      return undefined
    }
  }

  render(){

    const { handleSubmit, pristine, reset, submitting } = this.props

    const radioButtonMargins = {
      marginRight: '10px',
    }
  
    // const DIAL_CODES = [...ALLCOUNTRIES].sort((a,b) => {
    //   return (a.dial_code > b.dial_code) ? 1 : ((b.dial_code > a.dial_code) ? -1 : 0)
    // }) 

    const MAIN_DIAL_CODES = [...ALLCOUNTRIES].splice(0,5)
    
    const OTHER_DIAL_CODES = [...ALLCOUNTRIES].slice(6).sort((a,b) => {
      return (a.dial_code > b.dial_code) ? 1 : ((b.dial_code > a.dial_code) ? -1 : 0)
    }) 

    const DIAL_CODES = MAIN_DIAL_CODES.concat(OTHER_DIAL_CODES)


    let dialCodeClass = null;
    let dialCode = null;
    let phonePlaceholder = ""
    let mobileNumberDisabled = true

    if(this.props.formState && this.props.formState.values && this.props.formState.values.code){
      const code = this.props.formState.values.code.toLowerCase()
      dialCodeClass=  ["form-control","flag-icon-select",`flag-icon-${code}`].join(" ")
      let dc = DIAL_CODES.filter((country)=>{
        return country.code===this.props.formState.values.code
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
                    <p className="control has-icons-left has-icons-right">
                      <Field name="firstName" component={this.renderField} validate={[this.required]} type="text" placeholder="First Name" className='input'/>
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
                  <p className="control has-icons-left has-icons-right">
                    <Field name="lastName" component={this.renderField} validate={[this.required]} type="text" placeholder="Last Name" className='input'/>
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
                    <p className="control has-icons-right">
                      <Field name="dob" component={this.renderField} validate={[this.required,this.dob]} type="date" placeholder="Date of Birth" className="input"  />
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label">
                  <label className="label">Gender</label>
                </div>
                <div className='field-body'>
                  <div className="radio">
                    <Field name="gender" component={this.renderRadioField} options={{male:"Male",female:"Female"}} />
                  </div>
                </div>
              </div>
            </div>
            }

            {/* <div className="radio">
              <label><Field name="gender" component="input" type="radio" value="Male"/> Male</label>
            </div>
            <div className="radio">
              <label><Field name="gender" component="input" type="radio" value="Female"/> Female</label>
            </div> */}

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Email *</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <p className="control is-expanded has-icons-left has-icons-right">
                      <Field name="email" component={this.renderField} type="email" placeholder="Email" className="input" validate={[this.required,this.email]}/>
                      <span className="icon is-small is-left">
                        <i className="fa fa-envelope"></i>
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
              <Fragment>
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">Mobile Number *</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-expanded">
                      <div className="field has-addons">
                        <div className="select">
                            <Field name="code" component={this.renderSelectField} validate={[this.required]} className={dialCodeClass} style={{paddingLeft:'50px',width:'50px'}} >
                              <option value="">Select area code</option>
                              {DIAL_CODES.map(country => 
                                <option key={country.name} value={country.code}>{country.dial_code} ({country.code}) </option>
                              )}
                            </Field>
                          </div>
                          <p className="control is-normal has-icons-right">
                            {dialCode}
                            { this.props.formState && this.props.formState.values && this.props.formState.values.code ? <Field name="mobileNumber" component={this.renderField} validate={[this.required]} type="tel" disabled={mobileNumberDisabled} placeholder={phonePlaceholder} className="input" /> : null } 

                            
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            }
            { this.props.formState && this.props.formState.syncErrors ? <br/> : null } 
  
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Country of residence *</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <Field name="country.name" component={this.renderSelectField} validate={[this.required]}  className="form-control" >
                        <option value="">Select a country </option>
                        {ALLCOUNTRIES.map(country =>
                          <option value={country.name} key={country.name}>{country.name}</option>)}
                      </Field>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            { this.props.formState && this.props.formState.syncErrors ? <br/> : null } 

            {this.props.formType==="student"? null :
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">In which city would you like to participate with YFS?</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <Field name="city.name" component={this.renderSelectField} validate={[this.required]} className="form-control" >
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
                  <p style={{paddingLeft:'0.25rem'}} className="help">Full school name please</p>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <div className="control has-icons-right">
                      <Field name="schoolName" component={this.renderField} validate={[this.required,this.minLength(6)]}  type="text" placeholder="Your current school" className='input'/>
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
                        <Field name="googleSlides" component={this.renderSelectField} validate={[this.required]}  className="form-control" >
                        <option value="">Please choose an option</option>
                          {FAMILIARITY.map(op =>
                            <option value={op} key={op}>{op}</option>)}
                        </Field>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              { this.props.formState && this.props.formState.submitFailed && this.props.formState.syncErrors ? <br/> : null } 
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Google Docs? *</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <div className="control">
                      <div className="select is-fullwidth">
                        <Field name="googleDocs" component={this.renderSelectField} validate={[this.required]} className="form-control" >
                        <option value="">Please choose an option</option>
                          {FAMILIARITY.map(op =>
                            <option value={op} key={op}>{op}</option>)}
                        </Field>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              { this.props.formState && this.props.formState.submitFailed && this.props.formState.syncErrors ? <br/> : null } 
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Microsoft Office? *</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <div className="control">
                      <div className="select is-fullwidth">
                        <Field name="microsoftOffice" component={this.renderSelectField} validate={[this.required]} className="form-control" >
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
                        <Field name="willGoUni" component={this.renderSelectField} validate={[this.required]} className="form-control" >
                          { STANDARD_SELECT.map(option => <option key={option.text} value={option.value}>{option.text}</option>) }
                        </Field>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              { this.props.formState && this.props.formState.syncErrors ? <br/> : null } 

              {this.props.formState && this.props.formState.values && this.props.formState.values.willGoUni === "true" ?
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">What university do you plan to go to?</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <p className="control is-normal has-icons-right">
                      <Field name="desiredUniversity" component={this.renderField} validate={[this.required]} type="text" placeholder="Your first choice" className='input'/>
                    </p>
                  </div>
                </div>
              </div>:null
              }
              {this.props.formState && this.props.formState.values && this.props.formState.values.willGoUni === "false" ?
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">What do you plan to do after high school?</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control is-normal has-icons-right">
                      <Field name="graduationPlans" component={this.renderTextArea} type="text" validate={[this.required]} className="textarea" rows="2"/>
                    </p>
                  </div>
                </div>
              </div>:null
              }
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
                  <div className="control">
                      <div className="select is-normal">
                        <Field name="industry" component={this.renderSelectField} validate={[this.required]} className="form-control" >
                          <option value="">Please choose an option</option>
                          { INDUSTRIES.map(option => <option key={option} value={option}>{option}</option>) }
                        </Field>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              { this.props.formState && this.props.formState.syncErrors ? <br/> : null } 

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">What company do you work at?</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <p className="control is-normal has-icons-right">
                      <Field name="companyName" component={this.renderField} validate={[this.required]} type="text" className='input'/>
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
                    <p className="control is-normal has-icons-right">
                      <Field name="title" component={this.renderField} validate={[this.required]} type="text" placeholder="Role, position or title" className='input'/>
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
                    <p className="control has-icons-left has-icons-right">
                      <Field name="about" className="textarea" rows="5" component={this.renderTextArea} validate={[this.required]} type="text" placeholder="We'd love to hear a brief introduction about yourself and why would like to take part!" />
                    </p>
                  </div>
                </div>
              </div>
  
              <br/>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label subtitle is-4">How would you like to be involved with YFS?</label>
                </div>
                <hr/>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <p className="help" style={{paddingLeft:'0.25rem',fontSize:'15px'}}>Tick one or more:</p>

                        <Field name="participation" component={this.renderCheckBoxesField} validate={[this.required]} className="form-control" options={[
                          {id:"speaker",name:"Speaker"},
                          {id:"floatingMentor",name:"Floating Mentor"},
                          {id:"fixedMentor",name:"Fixed Mentor"},
                          {id:"vcPanelist",name:"VC Panelist"}
                        ]} />
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
              <div className="box" style={{padding:'0.5rem',fontSize:'16px',border:'1px solid hsl(348, 100%, 61%)'}}>
              <span><i className="fa fa-exclamation-circle" style={{color:"hsl(348, 100%, 61%)"}} aria-hidden="true"></i><p className="title is-5" style={{display:"inline"}}> &nbsp;Password must:</p></span>
                <ul>
                  <li>be at least 8 characters long</li>
                  <li>contain at least 1 upper case</li>
                  <li>contain at least 1 lower case</li>
                  <li>contain at least 1 digit</li>
                </ul>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Password *</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <p className="control has-icons-left">
                      <Field name="password" component={this.renderField} validate={[this.required,this.validatePassword]} type="password" placeholder="Password" className='input'/>
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
                      <Field name="password1" component={this.renderField} validate={[this.required,this.checkPasswordsMatch]} type="password" placeholder="Password confirmation" className='input'/>
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
              { this.props.formState && this.props.formState.submitFailed && this.props.formState.syncErrors ? 
                <div className="expandUp notification is-danger">
                  One or more errors in the form!
                </div>:
                null }
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
