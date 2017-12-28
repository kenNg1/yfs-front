import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MapWithAMarker from "./contact-maps";

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const landingBackground = {
      width: "100vw",
      height: "100vh"
    };

    return (
      <div className="container-fluid" style={landingBackground}>
        <div className="container">
          <br />
          <h1>Contact Us</h1>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
          </p>
          <br />
          <p>Address: xxx, xxx, xxx, hong kong</p>
          <p>Email: xxx@gmail.com</p>
          <br />
          <MapWithAMarker
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `80%` }} />}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
