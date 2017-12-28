import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import {SCHOOLS, FAMILIARITY} from '../UI/formOptions'


class EditStudentProfileForm extends Component {

  handleInitialize(user) {
    const email = localStorage.getItem('email')
    const initData = {
      ...user,
      email
    };   
    this.props.initialize(initData);
  }

  componentDidMount(){  
    const user = this.props.userProfile;
    console.log(user)
    this.handleInitialize(user);
  }

  render(){
    const { handleSubmit, pristine, reset, submitting } = this.props

    const radioButtonMargins = {
      marginRight: '10px',
    }   
    

    if (!this.props.userProfile ) {
      return (
        <div>loading...</div>
      )
    } else {
      console.log(this.props)
      return (
        <div className="container"> 

        <form onSubmit={handleSubmit} >
          <p className="title is-3 is-spaced">My account</p>
          <p className="subtitle is-4">General Info</p>
          <hr />
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
            <p className="help">Do not enter the first zero (example helpful note)</p>
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

      {/* <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Department</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <div className="select is-fullwidth">
                <select>
                  <option>Business development</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                </select>
              </div>
            </div>
            <p className="help">Do not enter the first zero (example helpful note)</p>
          </div>
        </div>
      </div>


      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Subject</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input className="input is-danger" type="text" placeholder="e.g. Partnership opportunity" />
            </div>
            <p className="help is-danger">
              This field is required
            </p>
          </div>
        </div>
      </div>
      
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Question</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea className="textarea" placeholder="Explain how we can help you"></textarea>
            </div>
          </div>
        </div>
      </div> */}
      
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

      )
    }
  }
}


// const selector = formValueSelector('editStudentProfile')

const form = reduxForm({  
  form: 'editStudentProfile'
});

export default form(EditStudentProfileForm);  

