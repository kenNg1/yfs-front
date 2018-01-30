import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logoGlobe from './logo-globe.png';
import './footer.css'

class Footer extends Component {
  render(){
    return (
      <footer id="myFooter">
        <div className="container">
            <div className="columns">
                <div className="column">
                    {/* <img className="logo" src={logo} alt=''/> */}
                    <Link to={'/'} style={{zIndex:'999'}}>     
                        <p className="title is-4">Young Founders School</p>
                        <img style={{zIndex:'999'}} src={logoGlobe} alt="Young Founders School: A Start up Bootcamp for High School Students" className="logoGlobe" />
                    </Link>
                </div>
                <div className="column">
                    <Link to={'/about'}><h5>About us</h5></Link>
                    <Link to={'/team'}><h5>Our team</h5></Link>
                </div>
                <div className="column">
                    <div className="social-networks">
                        <a href="https://www.facebook.com/YoungFoundersSchool/" target="_blank" rel="noopener noreferrer" className="facebook"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/youngfoundersschool/" target="_blank" rel="noopener noreferrer" className="instagram"><i className="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/hashtag/YoungFoundersSchool?src=hash&lang=en" target="_blank" rel="noopener noreferrer" className="twitter"><i className="fab fa-twitter"></i></a>
                    </div>
                    <br/>
                    <Link className="btn btn-default" to={'/signin'} style={{textAlign:'center',fontSize:'11px'}}>Sign In / Sign Up</Link>
                    <button type="button" className="btn is-large is-danger">Contact us</button>
                </div>
            </div>
        </div>
        <br />
        <br />
        <div className="footer-copyright">
            <p>© 2018 Young Founders School </p>
        </div>
      </footer>
    )
  }
}

export default Footer
