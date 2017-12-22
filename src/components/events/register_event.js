import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form'
import {COUNTRIES, HEARS, SCHOOLS, FAMILIARITY} from '../UI/formOptions'




class RegisterEventForm extends Component {

  componentWillMount(){
    const id = localStorage.getItem('id')    
    const initData = {
      eventId:this.props.eventId,
      userId:id
    };   
    this.props.initialize(initData);
  }

  render(){
    const { handleSubmit, fieldDisabled, load, pristine, reset, submitting } = this.props
    console.log(this.props)
    const radioLabelMargins = {
      marginRight: '10px',
    }
    const radioButtonMargins = {
      marginRight: '10px',
    }   
  
    let additionalQuestions = null;

    if(this.props.type === "Bootcamp"){
      additionalQuestions = (
        <section className="modal-card-body">
        <div className="field">
          <div className="field-label">
            <label className="label">Do you have a business idea?</label>
          </div>
          <div className='form-group'>
            <div className="radio">
              <label><Field name="businessIdea" component="input" type="radio" value="true"/> Yes</label>
            </div>
            <div className="radio">
              <label><Field name="businessIdea" component="input" type="radio" value="false"/> No</label>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Can you describe your business idea?</label>
          <div className="control">
            <Field name="businessIdeaDesc" className="textarea" component="textarea" placeholder="Please tell us more about your idea!" />
          </div>
        </div>
        <div className="field">
          <div className="field-label">
            <label className="label">Are you willing to work as part of a team on another business idea?</label>
          </div>
          <div className='form-group'>
            <div className="radio">
              <label><Field name="openToOtherIdeas" component="input" type="radio" value="true"/> Yes</label>
            </div>
            <div className="radio">
              <label><Field name="openToOtherIdeas" component="input" type="radio" value="false"/> No</label>
            </div>
          </div>
          <div className="field">
            <label className="label">Share a link to a video of you describing your idea</label>
            <div className="control">
              <Field name="videoLink" component="input" className="input" type="url" placeholder="Make sure the link is valid!"/>
            </div>
          </div>
        </div>
      </section>
      )
    } else if(this.props.type === "Day"){

    } else if(this.props.type === "Talk"){
 
    }

      return (
        <form onSubmit={handleSubmit} >
          {additionalQuestions}
          <footer className="modal-card-foot">
            <button type="submit" className='button is-success'>Register</button>
            <button type="button" className="button" disabled={pristine || submitting} onClick={reset}>Reset Form</button>
          </footer>
        </form>
      )
  }
}

RegisterEventForm = reduxForm({  
  form: 'registerevent',
  initialValues: {
    tier: 'student'
  }
})(RegisterEventForm);

export default RegisterEventForm;  
