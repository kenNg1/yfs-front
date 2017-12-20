import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

let SigninForm = props => {
  const { handleSubmit } = props
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <form onSubmit={ handleSubmit }>
        <div className="form-group">
          <label htmlFor="email"><h3>Email</h3></label>
          <Field name="username" component="input" type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password"><h3>Password</h3></label>
          <Field name="password" component="input" type="password" className="form-control" />
        </div>
        <button type="submit" className='btn btn-primary'>Submit</button>
      </form>
      <Link to='/signup'><h3>Sign up instead</h3></Link>
    </div>
  )
}

SigninForm = reduxForm({
  // a unique name for the form
  form: 'signin'
})(SigninForm)

export default SigninForm;
