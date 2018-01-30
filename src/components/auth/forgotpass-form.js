import React from 'react';
import { Field, reduxForm } from 'redux-form'


let ForgotPassForm = props => {
  const { handleSubmit } = props
  return (
        <form onSubmit={ handleSubmit }>
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
                    
                  </p>
                  
              </div>
              <button type="submit" className='button is-primary resetPassButton'>Reset password via email</button>
            </div>
          </div>
          <br/>
          
        </form>
  )
}

ForgotPassForm = reduxForm({
  // a unique name for the form
  form: 'forgotPass'
})(ForgotPassForm)

export default ForgotPassForm;
