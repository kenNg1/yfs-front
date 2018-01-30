import React from 'react';
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

let SigninForm = props => {
  const { handleSubmit } = props
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <form onSubmit={ handleSubmit }>
        <div className="field is-horizontal has-addons-centered">
          <div className="field-label is-normal">
            <label className="label">Email</label>
          </div>
          <div className="field-body">
            <div className="field is-narrow">
              <p className="control is-expanded has-icons-left has-icons-right">
                  <Field name="username" component="input" type="email" placeholder="Email" className="input" />
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </p>
            </div>
          </div>
        </div>
        <div className="field is-horizontal has-addons-centered">
          <div className="field-label is-normal ">
            <label className="label">Password</label>
          </div>
          <div className="field-body">
            <div className="field is-narrow ">
              <p className="control is-expanded has-icons-left has-icons-right">
                  <Field name="password" component="input" type="password" placeholder="Password" className="input" />
                  <span className="icon is-small is-left">
                    <i className="fa fa-unlock"></i>
                  </span>
                </p>
            </div>
          </div>
        </div>
        <br/>
        <div style={{marginLeft:'21%'}}>
        <button type="submit" className='button is-primary'>Sign In</button> &nbsp;<Link to='/signup' className='button is-info'>Sign up</Link>
        <Link to='/forgotpassword' className='button is-danger is-inverted forgottenPassButton'>Forgotten password?</Link>
        </div>
      </form>
      
    </div>
  )
}

SigninForm = reduxForm({
  // a unique name for the form
  form: 'signin'
})(SigninForm)

export default SigninForm;
