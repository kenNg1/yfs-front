import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'

class RegisterEventForm extends Component {

  componentDidMount(){
    const id = localStorage.getItem('id')
    const previousApp = this.props.previousApplication
    const initData = {
      ...previousApp,
      eventId:this.props.eventId,
      userId:id
    };   
    this.props.initialize(initData);
  }


  render(){
    const { handleSubmit, pristine, reset, submitting } = this.props
  
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
            <label className="label">Can you describe your idea?</label>
            <div className="control">
              <Field name="businessIdeaDesc" className="textarea" rows="3" component="textarea" placeholder="Please tell us more about your idea!" />
            </div>
          </div>
          <div className="field">
              <label className="label">Share a link to a video of you describing your idea</label>
              <div className="control">
                <Field name="videoLink" component="input" className="input" type="url" placeholder="Make sure the link is valid!"/>
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
          </div>
      </section>
      )
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
  form: 'registerevent'
})(RegisterEventForm);

export default RegisterEventForm;  
