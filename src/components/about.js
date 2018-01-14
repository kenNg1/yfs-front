import React, { Component } from "react";

class Mentor extends Component {
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
                <section className="hero is-danger is-bold is-small promo-block">
                  <div className="hero-body">
                    <div className="container">
                      <h1 className="title">
                        <i className="fa fa-bell-o" />
                        About Us
                      </h1>
                    </div>
                  </div>
                </section>
                <br />
                <div className="card article">
                  <div className="card-content">
                    <div className="content article-body has-text-centered">
                      <p style={{ fontSize: "15px", textAlign: "justify" }}>
                        Molestie ac feugiat sed lectus vestibulum. Feugiat sed
                        lectus vestibulum mattis. Volutpat diam ut venenatis
                        tellus in metus vulputate. Feugiat in fermentum posuere
                        urna nec. Pharetra convallis posuere morbi leo urna
                        molestie at. Accumsan lacus vel facilisis volutpat est
                        velit egestas. Fermentum leo vel orci porta. Faucibus
                        interdum posuere lorem ipsum.
                      </p>
                      <h3 style={{ textDecoration: "underline" }}>Team</h3>
                    </div>

                    <div className="columns has-text-centered">
                      <div className="column is-4">
                        <figure
                          className="image is-128x128"
                          style={{ margin: "0 auto", marginBottom: "5px" }}
                        >
                          <img src="https://bulma.io/images/placeholders/128x128.png" />
                        </figure>
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">CEO</p>
                      </div>
                      <div className="column is-4">
                        <figure
                          className="image is-128x128"
                          style={{ margin: "0 auto", marginBottom: "5px" }}
                        >
                          <img src="https://bulma.io/images/placeholders/128x128.png" />
                        </figure>
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">CEO</p>
                      </div>
                      <div className="column is-4">
                        <figure
                          className="image is-128x128"
                          style={{ margin: "0 auto", marginBottom: "5px" }}
                        >
                          <img src="https://bulma.io/images/placeholders/128x128.png" />
                        </figure>
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">CEO</p>
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

export default Mentor;
