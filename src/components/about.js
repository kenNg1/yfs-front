import React, { Component } from "react";
import MapWithAMarker from "./contact-maps";
import team from './team.png';

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <br />

          <section className="articles">
            <div className="column is-8 is-offset-2" style={{ padding: "0px" }}>
              <br />
              <div className="card article">

                <div className="card-content">
                <p className="title is-2" style={{color:'#01178B'}}>About Us</p>

                  <div className="content article-body">
                    <p style={{ fontSize: "15px", textAlign: "justify" }}>
                    We want the next generation of business leaders to have access to programs like YFS that encourages the discovery and development of entrepreneurship.  Our students will inspire, educate and surprise individuals with what they can each achieve. Mentors are startup industry leaders who will provide our students with the best possible platform to launch their startup ideas - every step from ideation to pitching. Join us!
                    </p>
                    <table
                      className="table"
                      style={{
                        borderSpacing: "0px 10px",
                        borderCollapse: "separate"
                      }}
                    >
                      <tbody>
                        <tr
                          style={{
                            backgroundColor: "#209cee"
                          }}
                        >
                          <td>
                            <i
                              className="fa fa-envelope"
                              aria-hidden="true"
                              style={{ color: "white" }}
                            />
                          </td>
                          <td>
                            <p
                              style={{
                                fontSize: "15px",
                                textAlign: "justify",
                                color: "white"
                              }}
                            >
                              <a href="mailto:admin@youngfoundersschool.com?subject=Question from about us" target="_self" data-content="admin@youngfoundersschool.com" data-type="mail" style={{color:'white'}}>admin@youngfoundersschool.com</a>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <img src={team} alt=""/>
                    <br/>
                    <br/>
                    <p className="title is-4">Who are we?</p>
                    <p style={{ fontSize: "15px", textAlign: "justify" }}>
                    We are a technology focussed education charity that aims to change the way we teach entrepreneurship. We focus on high schools students (12-17yr olds)  globally.  Our motto is:
                    </p>
                    <ul>
                      <li><b>Educate</b> - by utilizing the latest in cutting edge educational techniques and measuring actual learning outcomes</li>
                      <li><b>Connect</b> - the students to entrepreneurs and innovators in their local community. We believe that you are the average of your five best friends. We want those best friends to be other globally minded student entrepreneurs</li>
                      <li><b>Inspire</b> - them to release the creativity and idea generation that lies within them</li>
                    </ul>
                    <br/>
                    <p className="title is-4">What do we do?</p>
                    <p style={{ fontSize: "15px", textAlign: "justify" }}>
                    We put high school students through a weekend long bootcamp where they learn all the latest startup techniques (lean startup, product market fit, competition analysis etc) and sit with mentors all weekend to create a pitch deck. At the end of the weekend they pitch real VCs and compete for prizes. The winning team then gets US$1000 to start their business, the top three teams also receive prizes.<br/><br/>
                    In order to join the programme the students have to complete an application form and submit a short video. We have been overwhelmed by applications with on average 2-4x the number of applicants to spaces available for each cohort.<br/><br/>
                    We also have an on-ramp programme called Ideation Day which is open to anyone to join to get a taste of the weekend and be taught about idea discovery to help them with the weekend programme.
                    </p>
                    <br/>
                    <p className="title is-4">Why are we different?</p>
                    <p style={{ fontSize: "15px", textAlign: "justify" }}>
                    There is no startup bootcamp in the world for high school students that is operating at the scale and cadence we are. Also, because we can iterate quickly, YFS is collaborating with Google educators to bring the very latest teaching techniques to help drive learning to students at scale. 
                    </p>
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

export default About;
