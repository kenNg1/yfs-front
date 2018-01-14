import React, { Component } from "react";

class AdminStudent extends Component {
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
              <div
                className="column is-8 is-offset-2"
                style={{ padding: "0px" }}
              >
                <section className="hero is-danger is-bold is-small promo-block">
                  <div className="hero-body">
                    <div className="container">
                      <h1 className="title">
                        <i className="fa fa-bell-o" />
                        Admin Student
                      </h1>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminStudent;
