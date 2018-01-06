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

            <section class="articles">
              <div class="column is-8 is-offset-2" style={{ padding: "0px" }}>
                <section class="hero is-danger is-bold is-small promo-block">
                  <div class="hero-body">
                    <div class="container">
                      <h1 class="title">
                        <i class="fa fa-bell-o" />
                        About Us
                      </h1>
                    </div>
                  </div>
                </section>
                <br />
                <div class="card article">
                  <div class="card-content">
                    <div class="content article-body has-text-centered">
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

                    <div class="columns has-text-centered">
                      <div class="column is-4">
                        <figure
                          class="image is-128x128"
                          style={{ margin: "0 auto", marginBottom: "5px" }}
                        >
                          <img src="https://bulma.io/images/placeholders/128x128.png" />
                        </figure>
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">CEO</p>
                      </div>
                      <div class="column is-4">
                        <figure
                          class="image is-128x128"
                          style={{ margin: "0 auto", marginBottom: "5px" }}
                        >
                          <img src="https://bulma.io/images/placeholders/128x128.png" />
                        </figure>
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">CEO</p>
                      </div>
                      <div class="column is-4">
                        <figure
                          class="image is-128x128"
                          style={{ margin: "0 auto", marginBottom: "5px" }}
                        >
                          <img src="https://bulma.io/images/placeholders/128x128.png" />
                        </figure>
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">CEO</p>
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
