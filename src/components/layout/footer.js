import React, { Component } from 'react';
import logo from './logo.png';
import './footer.css'

class Footer extends Component {
  render(){
    return (
      <footer id="myFooter">
        <div className="container">
            <div className="columns">
                <div className="column">
                    <img className="logo" src={logo} alt=''/>
                </div>
                <div className="column">
                    <h5>About us</h5>
                    <ul>
                        <li><a href="/">Company Information</a></li>
                        <li><a href="/">Contact us</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="/">FAQ</a></li>
                    </ul>
                </div>
                <div className="column">
                    <div className="social-networks">
                        <a href="/" className="facebook"><i className="fab fa-facebook"></i></a>
                        <a href="/" className="youtube"><i className="fab fa-youtube"></i></a>
                        <a href="/" className="instagram"><i className="fab fa-instagram"></i></a>
                        <a href="/" className="google"><i className="fab fa-google-plus"></i></a>
                    </div>
                    <button type="button" className="btn btn-default">Contact us</button>
                </div>
            </div>
        </div>
        <br />
        <br />
        <div className="footer-copyright">
            <p>© 2016 Copyright Text </p>
        </div>
      </footer>
    )
  }
}

export default Footer
