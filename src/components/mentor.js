import React, { Component } from "react";
import { connect } from "react-redux";
import SignupForm from "./auth/signup_form";
import * as actions from "../actions";

const mapDispatchToProps = {
  signUpUser: actions.signUpUser
};

class Mentor extends Component {
  state = {
    formType: "mentor"
  };

  submit = values => {
    values.tier = this.state.formType;
    this.props.signUpUser(values, () => {
      this.props.history.push("/");
    });
  };

  formActiveHandler = type => {
    this.setState({ formType: type });
  };

  render() {
    const landingBackground = {
      position: "relative",
      paddingTop: "10vh",
      paddingLeft: "10%",
      paddingRight: "10%",
      paddingBottom: "3vh",
      width: "100vw",
      height: "100%",
      minHeight: "100vh"
    };
    const centerText = {
      position: "relative",
      width: "100%",
      color: "black"
    };
    return (
      <div className="container-fluid" style={landingBackground}>
        <div style={centerText}>
          {this.state.formType === "mentor" ? null : (
            <div
              className="box"
              onClick={() => this.formActiveHandler("student")}
              style={{ border: "1px solid hsl(171, 100%, 41%)" }}
            >
              <p className="title is-5 is-spaced">SIGN UP AS A STUDENT</p>
              <span>
                <i
                  className="fas fa-child"
                  aria-hidden="true"
                  style={{ color: "hsl(171, 100%, 41%)" }}
                />
                <p className="title is-6" style={{ display: "inline" }}>
                  {" "}
                  &nbsp;Requirements:
                </p>
              </span>
              <ul>
                <li>You must be 12 or older</li>
              </ul>
            </div>
          )}
          {this.state.formType !== "" ? null : <hr />}
          {this.state.formType === "student" ? null : (
            <div
              className="box"
              onClick={() => this.formActiveHandler("mentor")}
              style={{ border: "1px solid hsl(217, 71%, 53%)" }}
            >
              <p className="title is-5 is-spaced">SIGN UP AS A MENTOR</p>
              <span>
                <i
                  className="fas fa-child"
                  aria-hidden="true"
                  style={{ color: "hsl(217, 71%, 53%)" }}
                />
                <p className="title is-6" style={{ display: "inline" }}>
                  {" "}
                  &nbsp;Requirements:
                </p>
              </span>
              <ul>
                <li>You must be 18 or older</li>
                <li>3+ years working experience</li>
                <li>Have a passion to coach young founders</li>
              </ul>
            </div>
          )}
          {this.state.formType === "" ? null : (
            <SignupForm formType={this.state.formType} onSubmit={this.submit} />
          )}
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Mentor);
