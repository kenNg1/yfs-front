import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

import AdminStudent from './admin-student';
import AdminMentor from './admin-mentor';
import AdminApplication from './admin-application';
import AdminEvent from './admin-event';

const mapStateToProps = state => ({
  eventIndex: state.eventInfo.events
});

// const mapDispatchToProps = {
//   getEvents: actions.getEvents
// };

class AdminMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'event'
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
        <nav className="panel">
          <p className="panel-heading has-text-centered">Admin</p>
          <p className="panel-tabs">
            {this.state.activeTab === 'event' ? (
              <a className="is-active">Event List</a>
            ) : (
              <a onClick={() => this.changeTab('event')}>Event List</a>
            )}
            {this.state.activeTab === 'mentor' ? (
              <a className="is-active">Mentor List</a>
            ) : (
              <a onClick={() => this.changeTab('mentor')}>Mentor List</a>
            )}
            {this.state.activeTab === 'student' ? (
              <a className="is-active">Student List</a>
            ) : (
              <a onClick={() => this.changeTab('student')}>Student List</a>
            )}
            {this.state.activeTab === 'application' ? (
              <a className="is-active">Application List</a>
            ) : (
              <a onClick={() => this.changeTab('application')}>Application List</a>
            )}
          </p>
        </nav>
        {this.state.activeTab === 'event' && <AdminEvent />}
        {this.state.activeTab === 'student' && <AdminStudent />}
        {this.state.activeTab === 'mentor' && <AdminMentor />}
        {this.state.activeTab === 'application' && <AdminApplication />}
      </div>
    );
  }
}

export default connect(mapStateToProps, { getEvents: actions.getEvents })(AdminMain);
