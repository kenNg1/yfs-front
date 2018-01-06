import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MapWithAMarker from "./contact-maps";

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <br />

          <section class="articles">
            <div class="column is-8 is-offset-2" style={{ padding: "0px" }}>
              <section class="hero is-danger is-bold is-small promo-block">
                <div class="hero-body">
                  <div class="container">
                    <h1 class="title">
                      <i class="fa fa-bell-o" />
                      Contact Us
                    </h1>
                  </div>
                </div>
              </section>
              <br />
              <div class="card article">
                <div class="card-content">
                  <div class="content article-body">
                    <p style={{ fontSize: "15px", textAlign: "justify" }}>
                      Molestie ac feugiat sed lectus vestibulum. Feugiat sed
                      lectus vestibulum mattis. Volutpat diam ut venenatis
                      tellus in metus vulputate. Feugiat in fermentum posuere
                      urna nec. Pharetra convallis posuere morbi leo urna
                      molestie at. Accumsan lacus vel facilisis volutpat est
                      velit egestas. Fermentum leo vel orci porta. Faucibus
                      interdum posuere lorem ipsum.
                    </p>
                    <table
                      class="table"
                      style={{
                        borderSpacing: "0px 10px",
                        borderCollapse: "separate"
                      }}
                    >
                      <tbody>
                        <tr
                          style={{
                            backgroundColor: "#00d1b2"
                          }}
                        >
                          <td>
                            <i class="fa fa-envelope" aria-hidden="true" />
                          </td>
                          <td>
                            <p
                              style={{ fontSize: "15px", textAlign: "justify" }}
                            >
                              kenChicken@gmail.com
                            </p>
                          </td>
                        </tr>
                        <tr
                          style={{
                            backgroundColor: "#00d1b2"
                          }}
                        >
                          <td>
                            <i class="fa fa-map-marker" aria-hidden="true" />
                          </td>
                          <td>
                            <p
                              style={{ fontSize: "15px", textAlign: "justify" }}
                            >
                              4/F, Old Bank of China Building, Bank Street
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <MapWithAMarker
                      containerElement={<div style={{ height: `300px` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Contact;
