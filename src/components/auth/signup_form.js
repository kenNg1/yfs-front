import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { ALLCOUNTRIES, CITIES, SCHOOLS, FAMILIARITY } from '../UI/formOptions'
import '../../styles/animations.css'

let SignupForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props

  const radioButtonMargins = {
    marginRight: '10px',
  }
  return (
    <div className="container pullUp"> 
            <p>PUT A FLIP TRANSITION HERE TO CHANGE FORM TYPE</p>
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

          {props.formType==="mentor"? null :
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
    
          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">Mobile Number</label>
            </div>
            <div className="field-body">
              <div className="field is-expanded">
                <div className="field has-addons">
                  <p className="control">
                    <a className="button is-static">
                      +852
                    </a>
                  </p>
                  <p className="control is-normal">
                    <Field name="mobileNumber" component="input" type="tel" placeholder="Your phone number" className="input" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Country of residence</label>
            </div>
            <div className="field-body">
              <div className="field is-narrow">
                <div className="control">
                  <div className="select is-fullwidth">
                    <Field name="countryName" component="select" className="form-control" >
                    <option value="">Select a country... </option>
                      {ALLCOUNTRIES.map(country =>
                        <option value={country} key={country}>{country}</option>)}
                    </Field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {props.formType==="student"? null :
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
          
          {props.formType==="mentor"? null :
          <div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">School</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <Field name="schoolName" component="select" className="form-control" >
                      <option value="">Please choose an option</option>
                        {SCHOOLS.map(school =>
                          <option value={school} key={school}>{school}</option>)}
                      </Field>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
      
            <br />
            <p className="subtitle is-4">Skills</p>
            <hr />
      
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">How familiar are you with Google Slides?</label>
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
                <label className="label">How familiar are you with Google Docs?</label>
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
                <label className="label">How familiar are you with Microsoft Office?</label>
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
            <p className="subtitle is-4">Plans</p>
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

          {props.formType==="student"? null :
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
    // <form onSubmit={handleSubmit}>
    //   <div name='account-info' className='card'>
    //     <h3 className="card-header">Account Information</h3>
    //     <div className="card-block">
    //       <div className='form-group'>
    //         <label>Email</label>
    //         <div>
    //           <Field name="email" component="input" type="email" placeholder="Email" className='form-control'/>
    //         </div>
    //       </div>
    //       <div className='form-group'>
    //         <label>Password</label>
    //         <div>
    //           <Field name="password" component="input" type="password" placeholder="password" className='form-control'/>
    //         </div>
    //       </div>
    //       <div className='form-group'>
    //         <label>Confirm Password</label>
    //         <div>
    //           <Field name="password1" component="input" type="password" placeholder="password confirmation" className='form-control'/>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div name='personal-info' className='card'>
    //     <h3 className='card-header'>Personal Information</h3>
    //     <div className='card-block'>
    //       <div className='form-group'>
    //         <label>First Name</label>
    //         <div>
    //           <Field name="firstName" component="input" type="text" placeholder="First Name" className='form-control'/>
    //         </div>
    //       </div>
    //       <div className='form-group'>
    //         <label>Last Name</label>
    //         <div>
    //           <Field name="lastName" component="input" type="text" placeholder="Last Name" className='form-control'/>
    //         </div>
    //       </div>
    //       <div className='form-group'>
    //         <label>Country of Residence</label>
    //         <div>
    //           <Field name="countryName" component="select" className="form-control" >
    //             <option value="">Select a country...</option>
    //               {countries.map(countryOption =>
    //                 <option value={countryOption} key={countryOption}>{countryOption}</option>)}
    //           </Field>
    //         </div>
    //       </div>
    //       <div className='form-group'>
    //         <label>District</label>
    //         <div>
    //           <Field name="District" component="input" type="text" placeholder="District" className='form-control'/>
    //         </div>
    //       </div>
    //       <div className='form-group'>
    //         <label>School Name</label>
    //         <div>
    //           <Field name="school" component="input" type="text" placeholder="School Name" className='form-control'/>
    //         </div>
    //       </div>
    //       <div className='form-group'>
    //         <label>Sex</label>
    //         <div className="radio">
    //           <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
    //         </div>
    //         <div className="radio">
    //           <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
    //         </div>
    //       </div>
    //       <div className='form-group'>
    //         <label>Date of Birth</label>
    //         <div>
    //           <Field name="birth" component="input" type="date" placeholder="Date of Birth" className='form-control'/>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div name='skills' className='card'>
    //     <h3 className='card-header'>Skills</h3>
    //     <div className='card-block'>
    //       <div className='form-group'>
    //         <label>How familiar are you with Google Slides?</label>
    //         <div className="radio">
    //           <label style={radioLabelMargins}><Field name="level1" component="input" type="radio" value="unfamiliar" style={radioButtonMargins}/>Not Familiar</label>
    //           <label style={radioLabelMargins}><Field name="level2" component="input" type="radio" value="familiar"  style={radioButtonMargins}/> Familiar</label>
    //           <label style={radioLabelMargins}><Field name="level3" component="input" type="radio" value="very familiar"  style={radioButtonMargins}/>Very Familiar</label>
    //         </div>
    //       </div>
    //       <div className='form-group'>
    //         <label>How familiar are you with Google Docs?</label>
    //         <div className="radio">
    //           <label style={radioLabelMargins}><Field name="level4" component="input" type="radio" value="unfamiliar"  style={radioButtonMargins}/>Not Familiar</label>
    //           <label style={radioLabelMargins}><Field name="level5" component="input" type="radio" value="familiar"  style={radioButtonMargins}/> Familiar</label>
    //           <label style={radioLabelMargins}><Field name="level6" component="input" type="radio" value="very familiar"  style={radioButtonMargins}/>Very Familiar</label>
    //         </div>
    //       </div>
    //       <div className='form-group'>
    //         <label>How familiar are you with Microsoft Office?</label>
    //         <div className="radio">
    //           <label style={radioLabelMargins}><Field name="level7" component="input" type="radio" value="unfamiliar"  style={radioButtonMargins}/>Not Familiar</label>
    //           <label style={radioLabelMargins}><Field name="level8" component="input" type="radio" value="familiar"  style={radioButtonMargins}/> Familiar</label>
    //           <label style={radioLabelMargins}><Field name="level9" component="input" type="radio" value="very familiar"  style={radioButtonMargins}/>Very Familiar</label>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div name='additional-info' className='card'>
    //     <h3 className='card-header'>A Bit More About You</h3>
    //     <div className='card-block'>
    //       <div className='form-group'>
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

SignupForm = reduxForm({
  // a unique name for the form
  form: 'signup',
  // initialValues: {
  //   tier: "Student"
  // }
})(SignupForm)

export default SignupForm;
