import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions';
import moment from 'moment'

const mapStateToProps = state => {
  return {
    userProfile: state.profileInfo.userProfile
  }
}

const mapDispatchToProps = dispatch => {
  return {
      studentProfile: (id) => dispatch(actions.studentProfile(id)),
      mentorProfile: (id) => dispatch(actions.mentorProfile(id)),
  };
};

class Profile extends Component {
  

  componentDidMount() {
    const tier = localStorage.getItem('tier')
    const id = localStorage.getItem('id')*1
    tier === 'student' ? this.props.studentProfile(id) : this.props.mentorProfile(id)
  }
  
  render(){

    const landingBackground = {
      width: "100vw",
      height: "100vh",
      backgroundColor: "#5cb85c"
    }
    
    if( !this.props.userProfile ){
      return (
        <div>Loading...</div>
      )
    } else {
      const userProfile = this.props.userProfile
      const dob = moment(userProfile.dob).format("DD-MM-YYYY")
      
      return (
        <div className='container-fluid' style={landingBackground} >
            <div>
              <h1>Profile Details</h1>
              
                <div className='well' style={{color: 'black'}}>
                  
                  <p><strong>Personal Information</strong></p>
                  <p>First Name: {userProfile['firstName'] || 'n/a'}</p>
                  <p>Last Name: {userProfile.lastName || 'n/a'}</p>
                  <p>Date of birth: {dob || 'n/a'}</p>
                  <p>Gender: {userProfile.gender || 'n/a'}</p>
                  <p>Mobile Number: {userProfile.mobileNumber || null}</p>
                  <p>Country: {userProfile.country.name || null }</p>
                  <p>School Name: {userProfile.schoolName || 'n/a'}</p>
                  
                  <p><strong>Skills</strong></p>
                  <p>Google Docs: {userProfile.googleDocs || 'n/a'}</p>
                  <p>Google Slides: {userProfile.googleSlides || 'n/a'}</p>
                  <p>Microsoft Office{userProfile.microsoftOffice || 'n/a'}</p>
                  
                  <p><strong>A bit more about you</strong></p>
                  <p>Desired University: {userProfile.desiredUniversity || 'n/a'}</p>
                  <p>Graduation Plans: {userProfile.graduationPlans || 'n/a'}</p>
                  <p>Will go to university: {userProfile.willGoUni || 'n/a'}</p>
                </div>
              
              
              <Link to='/profile/edit'><h3>Edit User Details</h3></Link>

            </div>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile); 

// replace old way with better more clear way
// export default connect(mapStateToProps, {studentProfile, mentorProfile})(Profile); 