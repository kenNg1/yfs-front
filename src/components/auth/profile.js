import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './profile.css'
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
      // getStudentEvents: (id) => dispatch(actions.getStudentEvents(id))
  };
};

class Profile extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      regEvents:null
    }
  }

  componentDidMount(){
    this.tier = localStorage.getItem('tier');   
    this.id = localStorage.getItem('id')*1;
    if(this.tier === 'student'){
      this.props.studentProfile(this.id)
      // this.props.getStudentEvents(this.id)
    } else if(this.tier === 'mentor'){
      this.props.mentorProfile(this.id);  
            
    }
    
  }

  goToActionHandler = (eventId) => {
    this.props.history.push(`/events/${eventId}`);
    console.log("INSTEAD OF CHANGING ROUTES, LETS BRING UP THE REG INFO AS A MODAL")
  }
  
  render(){
    
    const landingBackground = {
      width: "100vw",
     }
    
    let registeredEvents = null;
    let eventsPageButton = null;

    if( !this.props.userProfile){
      return (
        <div>Loading...</div>
      )
    } else {
      const userProfile = this.props.userProfile
      const dob = moment(userProfile.dob).format("DD-MM-YYYY")

      
      registeredEvents =  this.props.userProfile.events.map(event => {
        
        let status = null;
        const date = moment(event.date).format("DD-MM-YYYY")

        if(event.event_student.status === "Pending"){
          status = <button className="button is-danger is-outlined">Registration Pending</button>
        } else if(event.event_student.status === "Accepted") {
          status = <button className="button is-link is-inverted">Accepted</button>
        } else if(event.event_student.status === "Cancelled"){
          status = <button className="button">Application cancelled</button>         
        }

        
        if( !this.props.userProfile.events){
          return (
            <div key={`id-${event.id}`}>Loading...</div>
          )
        } else {
          let statusButton = null;
          if(event.event_student.status === "Accepted"){
            statusButton = <button onClick={()=>this.goToActionHandler(event.id)} className="button is-link is-small">Confirm</button>
          } else if(event.event_student.status === "Pending" || event.event_student.status === "Confirmed" ) {
            statusButton = <button onClick={()=>this.goToActionHandler(event.id)} className="button is-danger is-small">Cancel</button>           
          } else if(event.event_student.status === "Cancelled"){
            statusButton = <button onClick={()=>this.goToActionHandler(event.id)} className="button is-primary is-small">Re-register</button>                       
          }

          return (
              <tr className="table-row" key={`id-${event.id}`}>
                <td className="table-row-info" onClick={()=>{setTimeout(() => {
                                    this.props.history.push(`/events/${event.id}`)
                              }, 200)}
                            } colSpan="3" style={{paddingLeft:'1.25rem'}}>
                            <em>{date}</em> | <em>{event.country.name}</em><br/>
                <span>{event.name.slice(0,35)}</span>
                </td>
                <td>{event.event_student.status}<br/> {statusButton}</td>
              </tr>
              
        )}
      })

      if(registeredEvents.length===0){
        registeredEvents = <tr className="table-row">
                            <td colSpan="4" style={{textAlign:'center'}}>No Registered Events</td>
                          </tr>
        eventsPageButton = 
          <div className="has-text-centered" style={{marginTop:'10px'}}>
            <Link to='/events' className="button is-danger is-inverted">See Events</Link>
          </div>
      }

      return (
        <div id="profile" className='container-fluid' style={landingBackground} >
            <div className="container">
              <br/>
              <h1 className="title">My Profile</h1>
              <div className="tile is-ancestor">
                <div className="tile is-6 is-vertical is-parent">
                  <div className="tile is-child notification is-danger">
                    <p className="title is-4" style={{paddingLeft:'1.25rem',paddingTop:'1.25rem'}}>My Programs</p>
                    <table className="table">
                      <thead>
                        <tr>
                          <th colSpan="3" style={{paddingLeft:'1.25rem'}}>REGISTERED PROGRAMS</th>
                          <th>STATUS</th>
                        </tr>
                      </thead>
                      <tbody>
                          {registeredEvents}
                      </tbody>
                    </table>
                    {eventsPageButton}
                  </div>
                </div>
                <div className="tile is-6 is-vertical is-parent">
                  <div className="tile is-child notification is-warning">
                    <p className="title is-4">My Plans</p>
                    <p className="title is-6">University of choice:
                      <span style={{fontWeight:'normal'}}> {userProfile.desiredUniversity }</span></p>
                    <p className="title is-6">Plans after university graduation:
                      <span style={{fontWeight:'normal'}}> {userProfile.graduationPlans}</span></p>
                  </div>
                  <div className="tile is-child notification is-primary">
                    <p className="title is-4">My info</p>
                    <p className="title is-6">First Name:
                      <span style={{fontWeight:'normal'}}> {userProfile['firstName']}</span></p>
                    <p className="title is-6">Last Name:
                      <span style={{fontWeight:'normal'}}> {userProfile['lastName']}</span></p>
                    <p className="title is-6" style={{display:'inline'}}>Password: &nbsp;</p>
                      <a className="button is-primary is-small is-inverted"> Update Password</a>
                    <p className="title is-6" style={{marginTop:'10px'}}>School Name:
                      <span style={{fontWeight:'normal'}}> {userProfile.schoolName}</span></p>
                    <p className="title is-6">Mobile Number:
                      <span style={{fontWeight:'normal'}}> {userProfile.mobileNumber}</span></p>
                    <p className="title is-6">Date of Birth:
                      <span style={{fontWeight:'normal'}}> {dob}</span></p>
                    <p className="title is-6">Gender:
                      <span style={{fontWeight:'normal'}}> {userProfile.gender}</span></p>
                    <p className="title is-6">Country of residence:
                      <span style={{fontWeight:'normal'}}> {userProfile.country.name}</span></p>
                    <div className="buttons is-centered">
                      <a className="button is-primary is-inverted">Show More</a>&nbsp;
                      <Link to='/profile/edit' className="button is-primary is-inverted">Update Profile</Link>
                    </div>
                  </div>
                </div>
              </div>           
            </div>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile); 

// replace old way with better more clear way
// export default connect(mapStateToProps, {studentProfile, mentorProfile})(Profile); 