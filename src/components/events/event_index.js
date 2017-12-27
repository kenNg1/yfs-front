import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styles from './event_index.css';
import * as actions from '../../actions';
import moment from 'moment';
import placeholderImg from '../images/placeholder480x320.png';
import {COUNTRIES} from '../UI/formOptions';

const mapStateToProps = state => ({
  eventIndex: state.eventInfo.events
});

const mapDispatchToProps = {
    getEvents: actions.getEvents,
}

class EventIndex extends Component {
  
  state = {
    selectedCountry: null,
    ddClasses:['dropdown']
  }

  componentDidMount() {
    window.scrollTo(0, 0);    
    this.props.getEvents()
  }
  
  renderFull(max,joined){
    const full = (joined&&max-joined===0)
    return full? "Full": null
  }

  closeDDHandler = () => {
    this.setState({ddClasses:["dropdown"]});    
  }

  toggleDDHandler = () => {
    if(this.state.ddClasses.indexOf("is-active")===-1){
      this.setState({ddClasses:["dropdown","is-active"]});    
    } else {
      this.closeDDHandler();   
    }
  }

  renderEvents(eventList){

    if(this.state.selectedCountry !== null){
      console.log(this.state.selectedCountry)
      eventList = eventList.filter(ev => {
        return ev.country.name === this.state.selectedCountry;
      })
      console.log(eventList)
    }

    return eventList.map(event => {

      const date = moment(event.date).format("DD-MM-YYYY")

      return (
        <Link key={`id-${event.id}`} to={`/events/${event.id}`}>
          {/* <div className='card eventCard' key={event.id}>
            <div className='cardLeft'>
              <img style={{backgroundImage: `url(${event.image})`, backgroundSize: 'cover'}} />
              <div className='cardLeftTopDetails'>
                <p>{this.renderFull(event.studentsMax,event.studentsIn)}</p>
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
          </div> */}

          <div id="eventShow" className="box"> 
            <div className="columns is-centered">
                <div className="column is-6 cardLeft">
                    <h3 className='date'>{date}</h3>
                    <p className="title is-5">{event.name}</p>
                    <p>{event.shortInfo}</p>
                </div>
                <p className='location' style={{marginTop:'20px'}}><strong>Location:</strong> {event.location}</p>

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


        </Link>
      )
    })
  }

  countryClickHandler = (country,e) => {
    this.setState({
      selectedCountry:country,
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

            <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
              <ul>
                <li><Link to={'/'}>Home</Link></li>             
                <li><a>Programs</a></li>             
              </ul>
            </nav>
            <div className="dropdown is-hoverable">
                  
                </div>
            <div className="tabs is-right" style={{overflow:"visible"}}>

            <ul>

            <div className={this.state.ddClasses.join(' ')} onClick={this.toggleDDHandler}>
              <div className="dropdown-trigger">
                <a aria-haspopup="true" aria-controls="dropdown-menu">
                  <span>Sort by Country</span>
                  <span className="icon is-small">
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  {COUNTRIES.map((country,index) => {
                    return <a className="dropdown-item" onClick={(e)=>this.countryClickHandler(country,e)} key={index}>
                     {country}
                    </a>
                  })}
                </div>
              </div>
            </div>

              <li>
                <a className="dropdown-filter">
                  <span>Sort by Date</span>
                  <span className="icon"><i className="fa fa-angle-down"></i></span>
                </a>
              </li>
            </ul>
          </div>
              {this.state.selectedCountry? <p className="title is-4">Events in {this.state.selectedCountry}</p> : null}
              {this.renderEvents(this.props.eventIndex)}
          </div>



        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);