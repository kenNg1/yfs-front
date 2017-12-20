import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../actions'
import logoGlobe from './logo-globe.png';
import styles from './header.css'

const mapStateToProps = state => ({
  loggedIn: state.userInfo.loggedIn,
  currentUser: state.userInfo.currentUser,
  burgerClasses:["navbar-burger","burger"]
});

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      navbarBurgerClasses:["navbar-burger","burger"],
      navbarMenuClasses:["navbar-menu"]
    }
  }

  logOut = () => {
    this.props.logOut();
    this.props.history.push('/');
    this.toggleBurgerHandler()    
  }

  closeBurgerHandler = () => {
    this.setState({navbarBurgerClasses:["navbar-burger","burger"]});    
    this.setState({navbarMenuClasses:["navbar-menu"]});    
  }

  toggleBurgerHandler = () => {
    if(this.state.navbarBurgerClasses.indexOf("is-active")===-1){
      this.setState({navbarBurgerClasses:["navbar-burger","burger","is-active"]});    
      this.setState({navbarMenuClasses:["navbar-menu","is-active"]});    
    } else {
      this.closeBurgerHandler();   
    }
  }



  render(){
    const firstName = localStorage.getItem('firstName');

    let loginPanel = 
         <Link to={'/signin'} className="navbar-item" onClick={this.closeBurgerHandler}>Login/Register</Link>;

    let navbarBurger = 
        <div className={this.state.navbarBurgerClasses.join(" ")} onClick={()=>this.toggleBurgerHandler()}data-target="navMenuColorwhite-example">
          <span></span>
          <span></span>
          <span></span>
        </div>

    if (firstName) {
      loginPanel = 
        <div>               
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to={'/profile'} className="navbar-link" onClick={this.closeBurgerHandler}>Welcome {firstName}</Link>
              <div className="navbar-dropdown">
              <Link to={'/profile'} className="navbar-item" onClick={this.closeBurgerHandler}>Profile</Link>      
              <hr className="navbar-divider" />
              <a onClick={this.logOut} className="navbar-item">Logout</a>
            </div>
          </div>
        </div>
    }

    return (

      <nav id="myHeader" className="navbar is-white">
      <div className="navbar-brand">
        <Link to={'/'} onClick={this.closeBurgerHandler} >     
          <img src={logoGlobe} alt="Young Founders School: A Start up Bootcamp for High School Students" className="logoGlobe" />
          <div className="brand">
            <p className="title is-4">Young Founders School</p>
            <p className="subtitle is-5">Sponsored by Credit Suisse</p>
          </div>
        </Link>

        {navbarBurger}

      </div>
    
      <div id="navMenuColorwhite-example" className={this.state.navbarMenuClasses.join(" ")}>
        <div className="navbar-start">
        </div>
    
        <div className="navbar-end">
              <Link to={'/events'} onClick={this.closeBurgerHandler} className="navbar-item">
                Programs
              </Link>
              <Link to={'/contact'} onClick={this.closeBurgerHandler} className="navbar-item">
                Gallery
              </Link>
              <Link to={'/contact'} onClick={this.closeBurgerHandler} className="navbar-item">
                Contact
              </Link>
              <Link to={'/contact'} onClick={this.closeBurgerHandler} className="navbar-item">
                Be a Mentor!
              </Link>
              {loginPanel}
        </div>
      </div>
    </nav>
  
    )
  }
}

export default withRouter(connect(mapStateToProps, {logOut})(Header) );
