import React, {Component} from 'react';
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux';
// import hero from './hero2.png';
import hero from './hero2-b.jpg';
import styles from './landing.css';
// below is example only
import logo from '../components/layout/logo-globe.png';
import about2 from './about2-edited-image.png'
class Landing extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  
  render(){
    const landingBackground = {
      backgroundImage: `url(${hero})`,     
    }

    return (
      <div id="landing">
        <section style={landingBackground} className="landingBackground">
          <div className="legend" style={{position:'absolute'}}>
            <p>BE&nbsp; A&nbsp; LEGEND.</p>
          </div>
        </section>
        <section className='container-fluid secondBackground'>
          <div className='container'>
            <div className="columns is-desktop is-vcentered">
                <div className="column has-text-centered">
                    <img className="logo" src={logo}/>
                    <h4 className="subtitle is-5">Real-life experience for your CV</h4>
                </div>
                <div className="column has-text-centered">
                    <img className="logo" src={logo}/>
                    <h4 className="subtitle is-5">Pitch to real investors who judge your data</h4>
                </div>
                <div className="column has-text-centered">
                    <img className="logo" src={logo}/>
                    <h4 className="subtitle is-5">Gain long-term mentorship & intern opportunities</h4>
                </div>
            </div>
            <div className="columns is-desktop is-vcentered">
                <div className="column has-text-centered">
                    <img className="logo" src={logo}/>
                    <h4 className="subtitle is-5">Get international exposure and industry insights</h4>
                </div>
                <div className="column has-text-centered">
                    <i className="logo far fa-smile fa-5x"></i>
                    <h4 className="subtitle is-5">Learn in a fun, engaging way</h4>
                </div>
            </div>
          </div>
        </section>
        <section className='container-fluid thirdBackground'>
          <div className='container has-text-centered'>
            <p className="title is-3">YFS BOOTCAMP BY THE NUMBERS</p>
            <div className="columns is-desktop is-vcentered">
                <div className="column has-text-centered">
                    <p className="title is-1">36</p>
                    <p className="subtitle is-6 first">Hours</p>
                    <p className="subtitle is-6">fully devoted learning experience</p>
                </div>
                <div className="column has-text-centered">
                    <p className="title is-2">2</p>
                    <p className="subtitle is-6 first">Days</p>
                    <p className="subtitle is-6">program on the 38th floor in ICC</p>
                </div>
                <div className="column has-text-centered">
                    <p className="title is-2">8</p>
                    <p className="subtitle is-6 first">Lectures</p>
                    <p className="subtitle is-6">from entrepreneurs and a lot more!</p>
                </div>
                <div className="column has-text-centered">
                    <p className="title is-2">1</p>
                    <p className="subtitle is-6 first">Mentor</p>
                    <p className="subtitle is-6">working closely with your team throughout the program</p>
                </div>
            </div>
          </div>
        </section>
        <section className='container-fluid fourthBackground'>
        <div className='container has-text-centered'>
        <p className="title is-3">ABOUT YOUNG FOUNDERS SCHOOL</p>
        <div className="columns">
            <div className="column">
                <p className="subtitle is-6">180+ entrepreneurs ready to mentor</p>
                <p className="subtitle is-6">500+ future entreprenuers since YFS started</p>
            </div>
            <div className="column has-text-centered">
              <div className="columns">
                <div className="column">
                  <img className="about1" src={about2}/>
                </div>
                <div className="column">
                  <img className="about2" src={about2}/>
                  <img className="about2" src={about2}/>
                </div>
              </div>
            </div>
            <div className="column">
                <p className="subtitle is-6">Lectures</p>
                <p className="subtitle is-6">from entrepreneurs and a lot more!</p>
            </div>
        </div>
      </div>
        </section>
      </div>
    )
  }
}

export default Landing;
