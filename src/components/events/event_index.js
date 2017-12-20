import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styles from './event_index.css';
import * as actions from '../../actions';
import moment from 'moment';

const mapStateToProps = state => ({
  eventIndex: state.eventInfo.events
});

const mapDispatchToProps = {
    getEvents: actions.getEvents,
}

class EventIndex extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    window.scrollTo(0, 0);    
    this.props.getEvents()
  }
  
  renderFull(full){
    return full? "Full": null
  }

  renderEvents(eventList){
    return eventList.map(event => {

      const date = moment(event.date).format("DD-MM-YYYY")

      return (
        <Link key={`id-${event.id}`} to={`/events/${event.id}`}>
          <div className='card eventCard' key={event.id}>
            <div className='cardLeft'>
              <img style={{backgroundImage: `url(${event.image})`, backgroundSize: 'cover'}} />
              <div className='cardLeftTopDetails'>
                <p>{this.renderFull(event.full)}</p>
              </div>
              <div className='cardLeftBottomDetails'>
                <h5>HK${parseInt(event.price, 10).toLocaleString()}</h5>
              </div>
            </div>
            <div className='cardRight'>
              <h3 className='date'>{date}</h3>
              <h3>{event.name.slice(0,25)}</h3>
              <p>{event.shortInfo.slice(0,100)} ...</p>
              <p className='location'>{event.location}</p>
            </div>
          </div>
        </Link>
      )
    })
  }

  render(){
          
    if (this.props.eventIndex.length === 0) {
      return(
        <h1>loading</h1>
      )
    }
    
    if (this.props.eventIndex.length > 0) {
      return (
        <div id="eventsIndex" className='container-fluid'>
          <br />
            <div className='container'>
                {this.renderEvents(this.props.eventIndex)}
            </div>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);