import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from "../../actions";
import './header-overlay.css';


const mapStateToProps = state => ({
    overlay: state.uI.overlay
});

const mapDispatchToProps = {
    removeOverlay: actions.removeOverlay,
  };


class HeaderOverlay extends Component {

    state = {
        isTop: true,
      };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 1;
            if (isTop !== this.state.isTop && this.props.overlay) {
                this.props.removeOverlay()
            }
        });
    }

    render(){
    console.log(this.props)

    let overlayContainer = null;



    if(this.props.overlay === false){
        overlayContainer = null
    } else {
        overlayContainer = <div onClick={this.removeOverlayHandler} className="overlay-div"></div>
    }
    return overlayContainer
    }
    
  }


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HeaderOverlay) );
