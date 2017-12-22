import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Mentor extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  
  render(){
    
    const landingBackground = {
      width: "100vw",
      height: "100vh",
      backgroundColor: "#0275d8"
    }
    const centerText = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      WebkitTransform: 'translate(-50%, -50%)',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      fontSize: '40px'
    }
    return (
      <div className='container-fluid' style={landingBackground}>
          <div style={centerText}>
            <h1>Coming Soon</h1>
          </div>
      </div>
    )
  }
}

export default Mentor;
