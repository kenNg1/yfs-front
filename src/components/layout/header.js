import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from "../../actions";
import logoGlobe from './logo-globe.png';
import logoGlobeColor from './logo-globe-color.png';
import yfsLogo from './yfs-and-logo.png';
import './header.css';
import '../../styles/animations.css';


const mapStateToProps = state => ({
  loggedIn: state.userInfo.loggedIn,
  currentUser: state.userInfo.currentUser,
  navbarBurgerClasses:state.uI.navbarBurgerClasses,
  navbarMenuClasses:state.uI.navbarMenuClasses
});

const mapDispatchToProps = {
  createOverlay: actions.createOverlay,
  removeOverlay: actions.removeOverlay,
  logOut: actions.logOut
};

class Header extends Component {

  logOut = () => {
    this.props.logOut();
    this.props.history.push('/');
    this.toggleBurgerHandler()    
  }

  closeBurgerHandler = (location,e) => {
    this.props.removeOverlay();   
    this.props.history.push(location) 
  }

  toggleBurgerHandler = () => {
    if(this.props.navbarBurgerClasses.indexOf("is-active")===-1){
      this.props.createOverlay();        
    } else {
      this.closeBurgerHandler();   
    }
  }



  render(){
    const firstName = localStorage.getItem('firstName');

    let loginPanel = 
         <Link to={'/signin'} className="navbar-item" onClick={this.closeBurgerHandler}>
          <i className="fas fa-sign-in-alt" style={{pointerEvents:'none',marginLeft:'-3px',color:'#00d1b2'}}></i> Login/Register
         </Link>;

    let navbarBurger = 
        <div className={this.props.navbarBurgerClasses.join(" ")} style={{zIndex:'97'}} onClick={()=>this.toggleBurgerHandler()}data-target="navMenuColorwhite-example">
          <span></span>
          <span></span>
          <span></span>
        </div>

    if (firstName) {
      loginPanel = 
        <div>               
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to={'/profile'} className="navbar-link" onClick={this.closeBurgerHandler}>Welcome<b> &nbsp;{firstName}</b></Link>
              <div className="navbar-dropdown">
              <Link to={'/profile'} className="navbar-item" onClick={this.closeBurgerHandler}>
                <i className="fas fa-user" style={{color:'#00d1b2'}}></i> Profile</Link>      
              <hr className="navbar-divider" />
              <a onClick={this.logOut} className="navbar-item">
                <i className="fas fa-sign-out-alt" style={{color:'#ff3860'}}></i> Logout</a>
              </div>
          </div>
        </div>
    }

    return (

      <nav id="myHeader" style={{zIndex:'99'}} className="navbar is-white bottom-border-gradient">
      <div className="navbar-brand">
        {/* <Link to={'/'} style={{zIndex:'999'}}>     
          <img style={{marginLeft:'15px',marginTop:'15px',width:'300px',zIndex:'999'}} src={yfsLogo} alt="Young Founders School: A Start up Bootcamp for High School Students" />
        </Link> */}
        <Link to={'/'} style={{zIndex:'999'}}>     
          <p className="title is-4">Young Founders School</p>
          <img style={{zIndex:'999'}} src={logoGlobeColor} alt="Young Founders School: A Start up Bootcamp for High School Students" className="logoGlobe" />
        </Link>

        {navbarBurger}

      </div>
    
      <div id="navMenuColorwhite-example" className={this.props.navbarMenuClasses.join(" ")}>
        <div className="navbar-start">
        </div>
        <div className="navbar-end">
              <a onClick={this.closeBurgerHandler.bind(this,"/")} className="navbar-item">
                <i className="fas fa-home"></i> Home
              </a>
              <Link to={'/about'} onClick={this.closeBurgerHandler} className="navbar-item">
              <i className="fas fa-info" style={{marginLeft:'5px'}}></i> About Us
              </Link>
              <Link to={'/events'} onClick={this.closeBurgerHandler} className="navbar-item">
              <i className="fas fa-calendar-alt"></i> Programs
              </Link>
              <Link to={'/gallery'} onClick={this.closeBurgerHandler} className="navbar-item">
              <i className="fas fa-camera"></i> Gallery
              </Link>
              <Link to={'/mentor'} onClick={this.closeBurgerHandler} className="navbar-item">
              <i className="fas fa-compass"></i> Be a Mentor!
              </Link>
              <Link to={'/team'} onClick={this.closeBurgerHandler} className="navbar-item">
              <i className="fas fa-location-arrow"></i> Our Team
              </Link>
              {loginPanel}
        </div>
      </div>
    </nav>
  
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header) );
