import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './event_show.css'
// http://www.justinaguilar.com/animations/index.html#
import '../../styles/animations.css'
import * as actions from '../../actions'
import RegisterEventForm from './register_event'
import moment from 'moment';
import placeholderImg from '../images/placeholder480x320.png'
// https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json

const mapStateToProps = state => {
  return {
  selectedEvent: state.eventInfo.selectedEvent,
  userProfile: state.profileInfo.userProfile
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getEvent: (id) => dispatch(actions.getEvent(id)),
    studentProfile: (id) => dispatch(actions.studentProfile(id)),
    registerEvent: (values,callback) => dispatch(actions.registerEvent(values,callback)),
    changeEventStatus: (values,callback) => dispatch(actions.changeEventStatus(values,callback))
  }
};

let modalForm = null;

class EventShow extends Component {
  
  state = {
    registerModal: false,
    modalTitle: "",
    registered: false,
    registrationStatus:'',
    inputValue: ''
  }
  
  // guaranteed to be called only once in each re-render cycle it is recommended to use this function for any side-effect causing operation
  componentDidUpdate(prevProps){

    const userProfile = this.props.userProfile

    if(userProfile){
      const ids = userProfile.events.map(event=>event.id)
      const eventId = parseInt(this.props.match.params.id)
      // console.log("evs",userProfile.events)
      // console.log("current status",userProfile.events[ids.indexOf(eventId)].event_student.status)
      if(!this.state.registered && ids.indexOf(eventId)!== -1){
        console.log("disable the button!")
        this.setState({registered:true})
        this.setState({registrationStatus:userProfile.events[ids.indexOf(eventId)].event_student.status})
      }
    }

    if(prevProps.myProps !== this.props.myProp) {
      // this.props.myProp has a different value
      // we can perform any operations that would 
      // need the new value and/or cause side-effects 
      // like AJAX calls with the new value - this.props.myProp
    }
  }

  componentDidMount(){
    this.tier = localStorage.getItem('tier'); 
    this.id = localStorage.getItem('id')*1;
    window.scrollTo(0, 0);
    const eventId = this.props.match.params.id;
    this.props.getEvent(eventId)

    if(this.tier === 'student'){
      this.props.studentProfile(this.id)
    }
  }

  openModalRegister = () => {
      const type = this.props.selectedEvent.type;
      if(this.state.registrationStatus==="Cancelled"){
        this.setState({
          registerModal: true,
          modalTitle:`Reapply for this ${type}`
        })
      } else {
        this.setState({
          registerModal: true,
          modalTitle:`Register for this ${type}`
        })
      }
  }

  openModalCancel = () => {
      this.setState({
        registerModal: true,
        modalTitle:"Unable to make it?"
      })
  }

  closeModal = () => {
    this.setState({registerModal: false})
  }

  submit = (values) => {
    if(this.state.registrationStatus==="Cancelled"){
      values.status="Registered"
      this.props.changeEventStatus(values, (data) => {
        this.setState({registered:true})
        this.setState({registrationStatus:data.status})
      })
    } else {
      this.props.registerEvent(values, (data) => {
        console.log(data)
        this.setState({registered:true})
        this.setState({registrationStatus:data.status})
      });
    }
    this.closeModal();
    document.getElementById('regInfo').scrollIntoView();
  }

  changeToConfirmedHandler = () => {
    let values = {
      eventId:this.props.match.params.id,
      studentId:this.props.userProfile.id,
      status:"Confirmed"
    }
    this.props.changeEventStatus(values, (data) => {
      this.setState({registrationStatus:data.status})
    })
  }

  cancellationReasonHandler = () => {
    this.closeModal();
    let values = {
      eventId:this.props.match.params.id,
      studentId:this.props.userProfile.id,
      cancellationReason:this.state.inputValue,
      status:"Cancelled"
    }
    this.props.changeEventStatus(values, (data) => {
      this.setState({registrationStatus:data.status})
    })
  }

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render(){
    console.log("event-show-props",this.props)

    let modal = null;
    if(this.state.registerModal===true) {
      if(!localStorage.getItem('tier')){
        this.modalForm = (
          <div>
            <section className="modal-card-body">
              <p className="title is-5">Please login or sign up first!</p>
            </section>
            <footer className="modal-card-foot">
              <Link to='/signin' className='button is-primary'>Login</Link>
              <Link to='/signup' className='button is-info'>Sign up</Link>
            </footer>
          </div>
        )
      } else if(this.state.modalTitle==="Unable to make it?"){
        this.modalForm = (
          <div>
            <section className="modal-card-body">
              <p className="title is-5">Please let us know why you can't make it below...</p>
              <textarea
                name="cancellationReason"
                value={this.state.inputValue}
                onChange={evt => this.updateInputValue(evt)}
                className="textarea" rows="2" />
            </section>
            <footer className="modal-card-foot">
              <button type="submit" onClick={this.cancellationReasonHandler} className='button is-danger'>I can't attend</button>
            </footer>
          </div>
        )
      } else {
        console.log(this.props.selectedEvent)
        // const previousApplication = 

        const studentIds = this.props.selectedEvent.students.map(student => student.id)
        const eventId = parseInt(this.props.userProfile.id)

        const previousApplication = this.props.selectedEvent.students[studentIds.indexOf(eventId)].event_student

        console.log(previousApplication)
        //   console.log("evs",userProfile.events)
        //   const previousApplication = userProfile.events[ids.indexOf(eventId)].event_student.status
        //   if(!this.state.registered && ids.indexOf(eventId)!== -1){
        //     this.setState({registered:true})
        //     this.setState({registrationStatus:userProfile.events[ids.indexOf(eventId)].event_student.status})
        //   }
        // }


        if(this.props.selectedEvent.type === "Bootcamp"){
          this.modalForm = (
            <RegisterEventForm eventId={this.props.selectedEvent.id} previousApplication={previousApplication} type="Bootcamp" onSubmit={(values)=>this.submit(values)}/>
          )
        } else if(this.props.selectedEvent.type === "Day"){
          this.modalForm = (
            <RegisterEventForm eventId={this.props.selectedEvent.id} type="Day" onSubmit={(values)=>this.submit(values)}/>
          )
        } else if(this.props.selectedEvent.type === "Talk"){
          this.modalForm = (
            <RegisterEventForm eventId={this.props.selectedEvent.id} type="Talk" onSubmit={(values)=>this.submit(values)}/>
          )   
        }
      }


      modal = (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">{this.state.modalTitle}</p>
                <button className="delete" aria-label="close" onClick={this.closeModal}></button>
              </header>
                {this.modalForm}
            </div>
          </div>
      )
    }
    
    if(!this.props.selectedEvent) {
      return (
        <div>
          <h1>loading</h1>
        </div>
      )
    } else {
      
      const selectedEvent = this.props.selectedEvent
      console.log(selectedEvent)
      return (
        <div className='container-fluid' >
          <br></br>
          <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
            <ul>
              <li><Link to={'/'}>Home</Link></li>             
              <li><Link to={'/events'}>Programs</Link></li>             
              <li><a>{selectedEvent.type}</a></li>             
            </ul>
          </nav>
          <div className='container'>
            {modal}
            <TopEventInfo event={selectedEvent}/>
          </div>
          <br/>
          <div id="regInfo" className='container'>
            <RegistrationInfo registered={this.state.registered} registrationStatus={this.state.registrationStatus} changeToConfirmed={this.changeToConfirmedHandler} event={selectedEvent} openModalRegister={this.openModalRegister} openModalCancel={this.openModalCancel}/>
          </div>
          <br/>
          <div className='container'>
            {selectedEvent.notice===null? null : <Notice event={selectedEvent}/>}
          </div>
          <br/>
          <div className='container'>
            <EventInfo event={selectedEvent}/>
          </div>
        </div>
      )
    }
  }
}

class TopEventInfo extends Component {

  renderFull(max,joined){
    const full = (joined&&max-joined===0)
    return full? "Full": String(max-joined)
  }

  render(){
    const {event} = this.props;

    const date = moment(event.date).format("DD-MM-YYYY")
    
    return (

      <div id="eventShow" className="box"> 
        <div className="columns is-centered">
            <div className="column is-6 cardLeft">
                <h3 className='date'>{date}</h3>
                <p className="title is-4">{event.name} - <em>{event.location}</em></p>
                <p>{event.shortInfo}</p>
            </div>

          <div className="column is-4 is-two-thirds-mobile cardRight">
            <div className="card">
              <img src={placeholderImg} alt=''/>
              <div className='cardLeftTopDetails'>
                <p>{this.renderFull(event.studentsMax,event.studentsIn)}</p>
              </div>
              <div className='cardLeftBottomDetails'>
                <h5>HK${parseInt(event.price, 10).toLocaleString()}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class RegistrationInfo extends Component {

  renderFull(max,joined){
    const full = (joined&&max-joined===0)
    return full? "Full": String(max-joined)
  }

  render(){
    console.log(this.props)

    const {event} = this.props
    const date = moment(event.date).format("DD-MM-YYYY")
    let eventRegisterButton = null;

    if(this.props.registered){
      if(this.props.registrationStatus==="Registered"){
        eventRegisterButton = 
        <div>
          <div className="box appear pullDown" style={{border:'1px solid hsl(217, 71%, 53%)'}}>
            <span><i className="fas fa-child" aria-hidden="true" style={{color:"hsl(217, 71%, 53%)"}}></i><p className="title is-6" style={{display:"inline"}}> &nbsp;Application Info</p></span>
            <div>Your application is being reviewed, we'll be back in touch to let you know if you're through! </div>
          </div>
          <div className="buttons is-centered">
            <button className='button is-link is-medium' disabled>Registered</button>
          </div>
        </div>
      } 
      if(this.props.registrationStatus==="Accepted"){
        eventRegisterButton = 
        <div>
          <div className="box" style={{border:'1px solid hsl(171, 100%, 41%)'}}>
            <span><i className="fas fa-child" aria-hidden="true" style={{color:"hsl(171, 100%, 41%)"}}></i><p className="title is-6" style={{display:"inline"}}> &nbsp;Application Info</p></span>
            <div>Your application has been accepted! Please <u>confirm</u> if you will be attending! </div>
          </div>
          <div className="buttons is-centered">
            <button className='button is-primary is-medium' onClick={this.props.changeToConfirmed}>Confirm</button>
          </div>
        </div>
      } 
      if(this.props.registrationStatus==="Confirmed"){
        eventRegisterButton = 
        <div>
          <div className="box" style={{border:'1px solid hsl(171, 100%, 41%)'}}>
            <span><i className="fas fa-child" aria-hidden="true" style={{color:"hsl(171, 100%, 41%)"}}></i><p className="title is-6" style={{display:"inline"}}> &nbsp;Application Info</p></span>
            <div> Thanks for confirming that you'll be attending! </div>
          </div>
          <div className="buttons is-centered">
            <button className='button is-danger is-small' onClick={this.props.openModalCancel}>Let us know if you can't attend</button>
          </div>
        </div>
      }
      if(this.props.registrationStatus==="Cancelled"){
        eventRegisterButton = 
        <div>
          <div className="box" style={{border:'1px solid rgb(255, 56, 96)'}}>
            <span><i className="fas fa-child" aria-hidden="true" style={{color:"rgb(255, 56, 96)"}}></i><p className="title is-6" style={{display:"inline"}}> &nbsp;Application Info</p></span>
            <div> You've cancelled your previous application, if you've changed your mind you could still get a spot if there is a space left! </div>
          </div>
          <div className="buttons is-centered">
            <button className='button is-primary is-small' onClick={this.props.openModalRegister}>Reapply</button>
          </div>
        </div>
      }

    } else {
      eventRegisterButton = 
      <div className="buttons is-centered">
        <button className='button is-link is-medium' onClick={this.props.openModalRegister}>Register</button>
      </div>
    }

    return (
      <div className="box">
        <span><i className="fa fa-tag" style={{color:"hsl(217, 71%, 53%)"}} aria-hidden="true"></i><p className="title is-5" style={{display:"inline"}}> &nbsp;Registration Info</p></span>
        <hr style={{marginTop:'0.5rem'}}/>
        <div className="columns">  
          <div className="columns is-mobile">
            <div className="column is-half-mobile">
              <strong>Title</strong>
              <p>{event.name}</p>
            </div>
            <div className="column is-half-mobile">
              <strong>Remaining Spots</strong>
              <p>{this.renderFull(event.studentsMax, event.studentsIn)}</p>
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column is-half-mobile">
              <strong>Closes on</strong>
              <p>{date}</p>
            </div>
            <div className="column is-half-mobile">
            <strong>Price</strong>
              <p>HK${event.price}</p>
            </div>
          </div>
        </div>
          {eventRegisterButton}
      </div>
    )
  }
}

class Notice extends Component {

  render(){
    const {event} = this.props
    return (
      <div className="box">
        <span><i className="fa fa-exclamation-circle" style={{color:"hsl(348, 100%, 61%)"}} aria-hidden="true"></i><p className="title is-5" style={{display:"inline"}}> &nbsp;Event Notice</p></span>
        <hr style={{marginTop:'0.5rem'}}/>
        <div>{event.notice}</div>
      </div>
    )
  }
}

class EventInfo extends Component {

  render(){
    const {event} = this.props
    return (
      <div className="box">
        <span><i className="fa fa-info-circle" aria-hidden="true" style={{color:"hsl(171, 100%, 41%)"}}></i><p className="title is-5" style={{display:"inline"}}> &nbsp;Event Information</p></span>
        <hr style={{marginTop:'0.5rem'}}/>
        <div>{event.longInfo}</div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
