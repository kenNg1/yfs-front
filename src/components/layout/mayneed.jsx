      return (
        <form onSubmit={handleSubmit} >
          <div name='account-info' className='card'>
            <h3 className="card-header">General Information</h3>
            <div className="card-block">
              <div className='form-group'>
                <label>Email</label>
                <div>
                  <Field name="email" component="input" type="email" placeholder="Email" className='form-control'/>
                </div>
              </div>
              <div className='form-group'>
                <label>Password</label>
                <div>
                  <Field name="password" component="input" type="password" placeholder="password" className='form-control'/>
                </div>
              </div>
              <div className='form-group'>
                <label>Confirm Password</label>
                <div>
                  <Field name="password1" component="input" type="password" placeholder="password confirmation" className='form-control'/>
                </div>
              </div>
            </div>
          </div>
          <div name='personal-info' className='card'>
            <h3 className='card-header'>Personal Information</h3>
            <div className='card-block'>
              <div className='form-group'>
                <label>First Name</label>
                <div>
                  <Field name="firstName" component="input" type="text" placeholder="First Name" className='form-control'/>
                </div>
              </div>
              <div className='form-group'>
                <label>Last Name</label>
                <div>
                  <Field name="lastName" component="input" type="text" placeholder="Last Name" className='form-control'/>
                </div>
              </div>

              <div className='form-group'>
              <label>Country of Residence</label>
              <div className="field">
                <p className="control has-icons-left">
                  <span className="select">
                      <Field name="country.name" component="select" className="form-control" >
                      <option value="">Select a country...</option>
                      {this.props.countries.map(countryOption =>
                        <option value={countryOption} key={countryOption}>{countryOption}</option>)}
                    </Field>
                  </span>
                  <span className="icon is-small is-left">
                    <i className="fa fa-globe"></i>
                  </span>
                </p>
              </div>
              
            </div>
              <div className='form-group'>
                <label>City</label>
                <div>
                  <Field name="city" component="input" type="text" placeholder="City" className='form-control'/>
                </div>
              </div>
              <div className='form-group'>
                <label>School Name</label>
                <div>
                  <Field name="schoolName" component="input" type="text" placeholder="School Name" className='form-control'/>
                </div>
              </div>
              <div className='form-group'>
                <label>Gender</label>
                <div className="radio">
                  <label><Field name="gender" component="input" type="radio" value="male"/> Male</label>
                </div>
                <div className="radio">
                  <label><Field name="gender" component="input" type="radio" value="female"/> Female</label>
                </div>
              </div>
              {/* <div className='form-group'>
                <label>Date of Birth</label>
                <div>
                  <Field name="dob" component="input" type="date" placeholder="Date of Birth" className='form-control'/>
                </div>
              </div> */}
            </div>
          </div>
          {/* <div name='skills' className='card'>
            <h3 className='card-header'>Skills</h3>
            <div className='card-block'>
              <div className='form-group'>
                <label>How familiar are you with Google Slides?</label>
                <div className="radio">
                  <label style={radioLabelMargins}><Field name="level1" component="input" type="radio" value="unfamiliar" style={radioButtonMargins}/>Not Familiar</label>
                  <label style={radioLabelMargins}><Field name="level2" component="input" type="radio" value="familiar"  style={radioButtonMargins}/> Familiar</label>
                  <label style={radioLabelMargins}><Field name="level3" component="input" type="radio" value="very familiar"  style={radioButtonMargins}/>Very Familiar</label>
                </div>
              </div>
              <div className='form-group'>
                <label>How familiar are you with Google Docs?</label>
                <div className="radio">
                  <label style={radioLabelMargins}><Field name="level4" component="input" type="radio" value="unfamiliar"  style={radioButtonMargins}/>Not Familiar</label>
                  <label style={radioLabelMargins}><Field name="level5" component="input" type="radio" value="familiar"  style={radioButtonMargins}/> Familiar</label>
                  <label style={radioLabelMargins}><Field name="level6" component="input" type="radio" value="very familiar"  style={radioButtonMargins}/>Very Familiar</label>
                </div>
              </div>
              <div className='form-group'>
                <label>How familiar are you with Microsoft Office?</label>
                <div className="radio">
                  <label style={radioLabelMargins}><Field name="level7" component="input" type="radio" value="unfamiliar"  style={radioButtonMargins}/>Not Familiar</label>
                  <label style={radioLabelMargins}><Field name="level8" component="input" type="radio" value="familiar"  style={radioButtonMargins}/> Familiar</label>
                  <label style={radioLabelMargins}><Field name="level9" component="input" type="radio" value="very familiar"  style={radioButtonMargins}/>Very Familiar</label>
                </div>
              </div>
            </div>
          </div> */}
          <div name='additional-info' className='card'>
            <h3 className='card-header'>A Bit More About You</h3>
            <div className='card-block'>
              {/* <div className='form-group'>
                <label>Do you plan to go to university?</label>
                <div className="radio">
                  <label style={radioLabelMargins}><Field name="true" component="input" type="radio" value="true"  style={radioButtonMargins}/>Yes</label>
                  <label style={radioLabelMargins}><Field name="false" component="input" type="radio" value="false"  style={radioButtonMargins}/>No</label>
                </div>
              </div>
              <div className='form-group'>
                <label>Which university do you plan to attend?</label>
                <div>
                  <Field name="desiredUniversity" component="input" type="text" placeholder="University Name" className='form-control'/>
                </div>
              </div>
              <div className='form-group'>
                <label>What do you plan to do after high school graduation?</label>
                <div>
                  <Field name="plans" component="input" type="text" placeholder="Plans" className='form-control'/>
                </div>
              </div>
              <div className='form-group'>
                <label>How did you hear about Young Founders School?</label>
                <div>
                  <Field name="hear" component="select" className="form-control" >
                    <option value="">Select an option...</option>
                      {hears.map(countryOption =>
                        <option value={countryOption} key={countryOption}>{countryOption}</option>)}
                  </Field>
                </div>
              </div>
              <div>
                <label>Terms and Conditions</label>
                <div>
                  <Field name="terms" id="terms" component="input" type="checkbox" style={radioButtonMargins}/><span>I have read the terms and conditions</span>
                </div>
              </div> */}
              <hr />
              <div>
                <button type="submit" className='btn btn-primary' style={radioButtonMargins}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset} className='btn btn-danger'>Reset Form</button>
              </div>
            </div>
          </div>
        </form>
      )