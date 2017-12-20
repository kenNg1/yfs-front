import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import moment from 'moment';

const mapStateToProps = state => ({
  selectedEvent: state.eventInfo.selectedEvent
});

const mapDispatchToProps = dispatch => {
  return {
    getEvent: (id) => dispatch(actions.getEvent(id))
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

  render(){
    console.log(this.props)

    const centerText = {
      width: '500px',
      height: '100%',
      color: 'grey',
      margin: 'auto'
    }
    
    let modal = null;

    if(this.state.registerModal===true) {
      modal = (
        <div style={{backgroundColor: 'RGBA(0,0,0,0.8)', marginTop: "100px", zIndex:"100", position:"fixed", left:'50%'}}> 
          <div className='container' style={centerText}>
            <h1>modal</h1>
            <p>register now</p>
            <p>do you confirm</p>
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
      
      console.log("next bit")
      const selectedEvent = this.props.selectedEvent
      console.log(selectedEvent)

      return (
        <div className='container-fluid' >
          <br></br>
          <div className='container'>
            Home > Programs > startup bootcamp
          </div>
          <br></br>
          <div className='container'>
            {modal}
            <TopEventInfo event={selectedEvent}/>
          </div>
          <br/>
          <br/>
          <br/>
          <div className='container'>
            <RegistrationInfo event={selectedEvent} openModal={this.openModal} />
          </div>
          <div className='container'>
            <Notice event={selectedEvent}/>
          </div>
          <div className='container'>
            <EventInfo event={selectedEvent}/>
          </div>
        </div>
      )
    }
  }
}

class TopEventInfo extends Component {

  renderFull(max, going){
    going === null ? 0 : going;
    return (going)
  }
  render(){
    const {event} = this.props;

    const date = moment(event.date).format("DD-MM-YYYY")
    
    return (

      

      <div id="eventShow" className="box red"> 
        <div className="columns is-centered">
            <div className="column is-6 cardLeft">
                <h3 className='date'>{date}</h3>
                <p className="title is-5">{event.name}</p>
                <p>{event.shortInfo}</p>
            </div>
            <p className='location' style={{marginTop:'20px'}}><strong>Location:</strong> {event.location}</p>

          <div className="column is-4 is-two-thirds-mobile cardRight">
            <div className="card">
              <img src="https://bulma.io/images/placeholders/480x320.png" />
              <div className='cardLeftTopDetails'>
                <p>{this.renderFull(event.studentsMax, event.studentsIn)}</p>
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

  renderFull(max, going){
    going === null ? 0 : going
    return (going)
  }
  render(){
    const {event} = this.props
    return (
      <div className='card eventCardM' key={event.id}>
        <div className='card-title'>
          <div className='card-block'>
            <h4>Registration Information</h4>
            <hr></hr>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Remaining</th>
                  <th>Close In</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{event.name}</td>
                  <td>{this.renderFull(event.studentsMax, event.studentsIn)}</td>
                  <td>{event.date}</td>
                  <td>HK${event.price}</td>
                </tr>
              </tbody>
            </table>
            <button className='btn btn-primary push-right' onClick={this.props.openModal} >Register</button>
          </div>
        </div>
      </div>
    )
  }
}

class Notice extends Component {

  render(){
    const {event} = this.props
    return (
      <div className='card eventCard'>
        <div className='card-title'>
          <div className='card-block'>
            <h4>Notice</h4>
            <hr></hr>
            <div>{event.notice}</div>
          </div>
        </div>
      </div>
    )
  }
}

class EventInfo extends Component {

  render(){
    const {event} = this.props
    return (
      <div className='card eventCard'>
        <div className='card-title'>
          <div className='card-block'>
            <h4>Event Information</h4>
            <hr></hr>
            <div>{event.longInfo}</div>
          </div>
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
