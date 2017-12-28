import React from 'react';
import { Field, reduxForm } from 'redux-form'


let ForgotPass = props => {
  console.log(props);
  const { handleSubmit } = props
  return (
    <div>
      <br/>
      <br/>
      <h3 className="title is-3">Forgotten Password</h3>
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
          </div>
        </div>
        <br/>
        <button type="submit" className='button is-primary'>Reset password via email</button>
      </form>
      <br/>
    </div>
  )
}

ForgotPass = reduxForm({
  // a unique name for the form
  form: 'forgotPass'
})(ForgotPass)

export default ForgotPass;
