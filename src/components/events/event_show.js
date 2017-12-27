import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import styles from './event_show.css';
import RegisterEventForm from './register_event'
import moment from 'moment';
import placeholderImg from '../images/placeholder480x320.png'

const mapStateToProps = state => ({
  selectedEvent: state.eventInfo.selectedEvent
});

const mapDispatchToProps = dispatch => {
  return {
    getEvent: (id) => dispatch(actions.getEvent(id)),
    registerEvent: (values) => dispatch(actions.registerEvent(values))
  }
};

class EventShow extends Component {
  
  state = {
    registerModal: false
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    const id = this.props.match.params.id;
    console.log("id",id)
    this.props.getEvent(id)
  }

  openModal = () => {
    this.setState({registerModal: true})
  }

  closeModal = () => {
    this.setState({registerModal: false})
  }

  submit = (values) => {
    console.log(values);
    this.props.registerEvent(values);
  }

  render(){
    console.log("event-show-props",this.props)

    const centerText = {
      width: '500px',
      height: '100%',
      color: 'grey',
      margin: 'auto'
    }
    
    let modal = null;
    let modalForm = null;
    if(this.state.registerModal===true) {
      if(!localStorage.getItem('tier')){
        modalForm = (
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
      } else {
        if(this.props.selectedEvent.type === "Bootcamp"){
          modalForm = (
            <RegisterEventForm eventId={this.props.selectedEvent.id} type="Bootcamp" onSubmit={(values)=>this.submit(values)}/>
          )
        } else if(this.props.selectedEvent.type === "Day"){
          modalForm = (
            <RegisterEventForm eventId={this.props.selectedEvent.id} type="Day" onSubmit={(values)=>this.submit(values)}/>
          )
        } else if(this.props.selectedEvent.type === "Talk"){
          modalForm = (
            <RegisterEventForm eventId={this.props.selectedEvent.id} type="Talk" onSubmit={(values)=>this.submit(values)}/>
          )   
        }
      }


      modal = (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">Register for this event</p>
                <button className="delete" aria-label="close" onClick={this.closeModal}></button>
              </header>
                {modalForm}
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
          <div className='container'>
            <RegistrationInfo event={selectedEvent} openModal={this.openModal} />
          </div>
          <br/>
          <div className='container'>
            <Notice event={selectedEvent}/>
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
    return full? "Full": null
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
              <img src={placeholderImg} />
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
    return full? "Full": joined
  }

  render(){
    
    const {event} = this.props
    const date = moment(event.date).format("DD-MM-YYYY")
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
              <strong>Remaining</strong>
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
        <div className="buttons is-right">
          <button className='button is-link is-medium' onClick={this.props.openModal} >Register</button>
        </div>
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
