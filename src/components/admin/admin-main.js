import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";

import AdminStudent from "./admin-student";
import AdminMentor from "./admin-mentor";
import AdminApplication from "./admin-application";
import AdminEvent from "./admin-event";

const mapStateToProps = state => ({
  eventIndex: state.eventInfo.events
});

const mapDispatchToProps = {
  getEvents: actions.getEvents
};

class AdminMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "event"
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getEvents();
  }

  changeTab = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    return (
      <div className="container-fluid">
        <nav class="panel">
          <p class="panel-heading has-text-centered">Admin</p>
          <p class="panel-tabs">
            {this.state.activeTab === "event" ? (
              <a class="is-active">Event List</a>
            ) : (
              <a onClick={() => this.changeTab("event")}>Event List</a>
            )}
            {this.state.activeTab === "mentor" ? (
              <a class="is-active">Mentor List</a>
            ) : (
              <a onClick={() => this.changeTab("mentor")}>Mentor List</a>
            )}
            {this.state.activeTab === "student" ? (
              <a class="is-active">Student List</a>
            ) : (
              <a onClick={() => this.changeTab("student")}>Student List</a>
            )}
            {this.state.activeTab === "application" ? (
              <a class="is-active">Application List</a>
            ) : (
              <a onClick={() => this.changeTab("application")}>
                Application List
              </a>
            )}
          </p>
        </nav>

        <AdminStudent />
        <AdminEvent />
        <AdminMentor />
        <AdminApplication />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminMain);
