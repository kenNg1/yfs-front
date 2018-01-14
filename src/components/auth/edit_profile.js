import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import moment from 'moment'
import SignupForm from './signup_form'

const mapStateToProps = state => ({
  userProfile: state.profileInfo.userProfile
});

const mapDispatchToProps = {
  studentProfile: actions.studentProfile,
  mentorProfile: actions.mentorProfile,
  editStudentProfile: actions.editStudentProfile,
  editMentorProfile: actions.editMentorProfile
}

const countries = ['Bangladesh','Bhutan','Brunei', 'Burma (Myanmar)', 'Cambodia', 'China', 'East Timor', 'Hong Kong', 'India', 'Indonesia', 'Japan', 'Kazakhstan', 'South Korea', 'Laos', 'Malaysia', 'Maldives', 'Mongolia', 'Nepal', 'Philippines', 'Russia', 'Singapore', 'Sri Lanka', 'Taiwan', 'Thailand','Vietnam']

class EditProfile extends Component {

  submit = (values) => {
    // values['countryId'] = countries.indexOf(values['country.name'])
    values['dob'] = moment(values['dob']).format();
    if(localStorage.getItem('tier')==="student"){
      this.props.editStudentProfile(values,this.props.userProfile.userId, () => {
        this.props.history.push('/profile')
      }) 
    } else {
      this.props.editMentorProfile(values,this.props.userProfile.userId, () => {
        this.props.history.push('/profile')
      })
    }
  }
  
  componentDidMount() {
    const tier = localStorage.getItem('tier')
    const id = localStorage.getItem('id')*1
    tier === 'student' ? this.props.studentProfile(id) : this.props.mentorProfile(id);
    const student = this.props.studentProfile(id);
    console.log("student",student)
  }
  
  render(){
    const landingBackground = {
      position: 'relative',
      paddingTop: '10vh',
      paddingLeft: '10%',
      paddingRight: '10%',
      paddingBottom: '3vh',
      width: "100vw",
      height: "100%",
      minHeight: '100vh',
      backgroundColor: "white"
    }
    const centerText = {
      position: 'relative',
      width: '100%',
      height: '100%',
      color: 'black'
    }
    
    if(localStorage.getItem('tier')){
      return (
        <div className='container-fluid' style={landingBackground}>
          <div style={centerText}>
            {/* <EditStudentProfileForm userProfile={this.props.userProfile} countries={countries} onSubmit={this.submit}/> */}
            <SignupForm edit={true} userProfile={this.props.userProfile} formType={localStorage.getItem('tier')} countries={countries} onSubmit={this.submit}/>
          </div>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
    
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(EditProfile); 
