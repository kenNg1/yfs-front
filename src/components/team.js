import React, { Component } from "react";
import billy from './billy.png';
import crispian from './crispian.png';

class Team extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container-fluid">
          <div className="container">
            <br />
            <section className="articles">
              <div className="column is-8 is-offset-2" style={{ padding: "0px" }}>
                <section className="hero is-info is-bold is-small promo-block">
                  <div className="hero-body">
                    <div className="container">
                      <h1 className="title">
                        <i className="fa fa-bell-o" />
                        Our team
                      </h1>
                    </div>
                  </div>
                </section>
                <br />
                <div className="card article">
                  <div className="card-content">
                    <div className="content article-body has-text-centered">
                      <p className="title is-4" style={{ fontFamily: "'Open Sans'" }}>
                        Our passion drives us...
                      </p>
                      <h3 style={{ textDecoration: "underline" }}>Team</h3>
                    </div>

                    <div className="columns has-text-centered">
                      <div className="column is-6">
                        <figure
                          className="image is-128x128"
                          style={{ margin: "0 auto", marginBottom: "5px" }}
                        >
                          <img src={billy} alt="" />
                        </figure>
                        <p className="title is-4">Billy Naveed</p>
                        <p className="subtitle is-6">CEO / Founder</p>
                        <p className="subtitle is-6" style={{textAlign:'left'}}>Having founded two startups himself before the age of 16, Billy aims to bring his passion for education and innovation to students around the world.<br/><br/> In his day job at an international investment bank, Billy works with the world's leading startups and entrepreneurs. </p>
                      </div>
                      <br/>
                      <div className="column is-6">
                        <figure
                          className="image is-128x128"
                          style={{ margin: "0 auto", marginBottom: "5px" }}
                        >
                          <img src={crispian} alt=""/>
                        </figure>
                        <p className="title is-4">Crispian Farrow</p>
                        <p className="subtitle is-6">Director</p>
                        <p className="subtitle is-6" style={{textAlign:'left'}}>Crispian got his first taste of startup culture straight out of school as employee number seven of a startup in London.<br/><br/>
                        For the last ten years, he has worked in education, being passionate about creating opportunities for students to learn in new and exciting ways, particularly leveraging technology, design thinking and entrepreneurial spirit. He is currently the Learning Technology Advisor to the largest international schools group in Hong Kong. </p>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
