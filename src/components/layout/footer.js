import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styles from './footer.css'
import logo from './logo.png';

class Footer extends Component {
  render(){
    return (
      <footer id="myFooter">
        <div className="container">
            <div className="columns">
                <div className="column">
                    <img className="logo" src={logo}/>
                </div>
                <div className="column">
                    <h5>About us</h5>
                    <ul>
                        <li><a href="#">Company Information</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help desk</a></li>
                        <li><a href="#">Forums</a></li>
                    </ul>
                </div>
                <div className="column">
                    <div className="social-networks">
                        <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="google"><i className="fa fa-google-plus"></i></a>
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
