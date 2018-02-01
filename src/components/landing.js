import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './landing.css';
import OnVisible, { setDefaultProps } from 'react-on-visible';

// import hero from './hero2.png';
// below is example only
import heroImg from './images/hero2-b.jpg';
import student2Img from './student2.png';
import awardImg from './images/icon_Award.png';
import podiumImg from './images/podium.png';
import mentorImg from './images/mentorship.png';
import mapImg from './images/map.png';
import gallery1 from './images/gallery1.jpg';
import animatedStatements from './animated-statements';

const Fragment = React.Fragment;

setDefaultProps({
  visibleClassName: 'hatch'
});

const mapStateToProps = state => {
  return {
    message: state.userInfo.message
  };
};

const mapDispatchToProps = {
  storeCountry: actions.storeCountry
};

class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.storeCountry();
  }

  renderAlert() {
    if (this.props.message) {
      return (
        <Fragment>
          <div
            className="notification is-primary fade-in-animation"
            style={{ position: 'absolute', width: '400px', margin: '0 auto', left: 0, right: 0, textAlign: 'center' }}
          >
            {this.props.message}
            <br />
            <Link
              to={'/profile'}
              style={{ zIndex: '999', marginTop: '10px' }}
              className="button is-success is-inverted"
            >
              Go to Profile
            </Link>
          </div>
        </Fragment>
      );
    }
  }

  render() {
    const landingBackground = {
      backgroundImage: `url(${heroImg})`
    };

    return (
      <div id="landing">
        <section style={landingBackground} className="landingBackground">
          {this.renderAlert()}
          <div className="legend" style={{ position: 'absolute' }}>
            <p>BE&nbsp; A&nbsp; LEGEND.</p>
          </div>
        </section>
        {/* <section className="landingBackground">
        <iframe title="yfs-video" src="https://drive.google.com/file/d/1J92rTHLetqEwNOUb7_coXkBPHWktwQ39/preview?autoplay=1" width="640" height="480"></iframe>      
        </section> */}
        <section className="container-fluid secondBackground">
          <div className="container">
            <div className="columns is-desktop is-vcentered">
              <div className="column has-text-centered">
                <OnVisible>
                  <img className="logo" src={awardImg} alt="" />
                </OnVisible>
                <h4 style={{ fontWeight: '500' }} className="subtitle is-5">
                  Real-life experience for your CV
                </h4>
              </div>
              <div className="column has-text-centered">
                <img className="logo" src={podiumImg} alt="" />
                <h4 style={{ fontWeight: '500' }} className="subtitle is-5">
                  Pitch to real investors with your business ideas
                </h4>
              </div>
              <div className="column has-text-centered">
                <OnVisible>
                  <img className="logo" src={mentorImg} alt="" />
                </OnVisible>
                <h4 style={{ fontWeight: '500' }} className="subtitle is-5">
                  Gain long-term mentorship & intern opportunities
                </h4>
              </div>
            </div>
            <div className="columns is-desktop is-vcentered">
              <div className="column has-text-centered">
                <img className="logo" src={mapImg} alt="" />
                <h4 style={{ fontWeight: '500' }} className="subtitle is-5">
                  Get international exposure and industry insights
                </h4>
              </div>
              <div className="column has-text-centered">
                <OnVisible>
                  <i style={{ fontSize: '310%', color: 'rgb(255,157,0)' }} className="logo far fa-smile fa-5x" />
                </OnVisible>
                <h4 style={{ fontWeight: '500' }} className="subtitle is-5">
                  Learn in a fun, engaging way
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid thirdBackground">
          <div className="container has-text-centered">
            <p style={{ fontFamily: "'Open Sans',sans-serif" }} className="title is-3">
              YFS BOOTCAMP BY THE NUMBERS
            </p>
            <div className="columns is-desktop is-vcentered">{animatedStatements}</div>
          </div>
        </section>
        <section className="container-fluid fourthBackground">
          <div className="container has-text-centered">
            <p style={{ fontFamily: "'Open Sans',sans-serif" }} className="title is-3">
              ABOUT YOUNG FOUNDERS SCHOOL
            </p>
            <div className="columns">
              <div className="column">
                <p className="subtitle is-6">300+ entrepreneurs ready to mentor</p>
                <p className="subtitle is-6">700+ future entreprenuers since YFS started</p>
              </div>
              <div className="column is-three-quarters has-text-centered">
                <div className="columns">
                  <div className="column">
                    <img className="about1" src={gallery1} alt="" />
                  </div>
                  <div className="column">
                    <img className="about2" src={student2Img} alt="" />
                  </div>
                </div>
              </div>
              <div className="column">
                <p className="subtitle is-6">We're in Hong Kong, China, Singapore and soon in Malaysia & Thailand</p>
                <p className="subtitle is-6">And sponsored by Credit Suisse</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
