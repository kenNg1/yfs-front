import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import moment from "moment";
import placeholderImg from "../images/placeholder480x320.png";
import { COUNTRIES } from "../UI/formOptions";

const mapStateToProps = state => ({
  eventIndex: state.eventInfo.events
});

const mapDispatchToProps = {
  getEvents: actions.getEvents
};

class AdminEvent extends Component {
  state = {
    selectedCountry: null,
    dateOrder: "ascending",
    ddClasses: ["dropdown"]
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    this.props.getEvents();
    const selectedCountry = JSON.parse(localStorage.getItem("selectedCountry"));

    let countryNames = COUNTRIES.map(country => {
      return country.name;
    });
    if (selectedCountry && countryNames.indexOf(selectedCountry.name) !== 0) {
      this.setState({ selectedCountry: selectedCountry });
    }
  }

  renderFull(max, joined) {
    const full = joined && max - joined === 0;
    return full ? "Full" : null;
  }

  closeDDHandler = () => {
    this.setState({ ddClasses: ["dropdown"] });
  };

  toggleDDHandler = () => {
    if (this.state.ddClasses.indexOf("is-active") === -1) {
      this.setState({ ddClasses: ["dropdown", "is-active"] });
    } else {
      this.closeDDHandler();
    }
  };

  countryClickHandler = country => {
    if (country !== null) {
      this.setState({ selectedCountry: country });
    }
  };

  resetCountryHandler = () => {
    this.setState({ selectedCountry: null });
  };

  sortDateHandler = () => {
    if (this.state.dateOrder === "ascending") {
      this.setState({ dateOrder: "descending" });
    } else {
      this.setState({ dateOrder: "ascending" });
    }
  };

  render() {
    let renderedEvents = null;
    let eventList = this.props.eventIndex;
    let sortByDate = null;

    if (this.state.dateOrder === "ascending") {
      eventList = eventList.sort((a, b) => a.date > b.date);

      sortByDate = (
        <a className="dropdown-filter" onClick={() => this.sortDateHandler()}>
          <span>Sort by Date</span>
          <span className="icon">
            <i className="fa fa-angle-down" />
          </span>
        </a>
      );
    } else {
      eventList = eventList.sort((a, b) => a.date < b.date);

      sortByDate = (
        <a className="dropdown-filter" onClick={() => this.sortDateHandler()}>
          <span>Sort by Date</span>
          <span className="icon">
            <i className="fa fa-angle-up" />
          </span>
        </a>
      );
    }

    if (this.state.selectedCountry !== null) {
      eventList = eventList.filter(ev => {
        return ev.country.name === this.state.selectedCountry.name;
      });
    } else {
      eventList = this.props.eventIndex;
    }

    if (eventList.length === 0) {
      renderedEvents = (
        <tr>
          <td>asd</td>
          <td>asd</td>
          <td>asd</td>
          <td>asd</td>
          <td>asd</td>
          <td>asd</td>
        </tr>
      );
    } else if (eventList.length > 0) {
      renderedEvents = eventList.map(event => {
        const date = moment(event.date).format("DD-MM-YYYY");

        return (
          <tr>
            <td>{event.name}</td>
            <td>{event.type}</td>
            <td>{event.country.name}</td>
            <td>{event.location}</td>
            <td>{date}</td>
            <td>{event.deadline}</td>
            <td>
              {event.studentsIn}/{event.studentsMax}
            </td>
            <td>{event.status}</td>
          </tr>
        );
      });
    }

    if (this.props.eventIndex.length === 0) {
      return <h1>loading</h1>;
    }

    if (this.props.eventIndex.length > 0) {
      return (
        <div id="eventsIndex" className="container-fluid">
          <br />

          <div className="container">
            <div className="dropdown is-hoverable" />
            <div className="tabs is-right" style={{ overflow: "visible" }}>
              <ul>
                <div
                  className={this.state.ddClasses.join(" ")}
                  onClick={this.toggleDDHandler}
                >
                  <div className="dropdown-trigger">
                    <a aria-haspopup="true" aria-controls="dropdown-menu">
                      <span>Filter by Country</span>
                      <span className="icon is-small">
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </span>
                    </a>
                  </div>
                  <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a
                        className="dropdown-item"
                        onClick={() => this.resetCountryHandler()}
                      >
                        All Countries
                      </a>
                      {COUNTRIES.map((country, index) => {
                        return (
                          <a
                            className="dropdown-item"
                            onClick={() => this.countryClickHandler(country)}
                            key={index}
                          >
                            {country.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <li>{sortByDate}</li>
              </ul>
            </div>
            {this.state.selectedCountry ? (
              <div>
                <p className="title is-4">
                  Events in {this.state.selectedCountry.name}
                </p>
                <span
                  className={`flag-icon flag-icon-${
                    this.state.selectedCountry.code
                  } flag-icon`}
                  style={{
                    fontSize: "23px",
                    backgroundColor: "rgba(0,0,0,0.12)",
                    border: "0.1px solid rgba(0,0,0,0.12)"
                  }}
                />
              </div>
            ) : (
              <div>
                <p className="title is-4">Events in all countries</p>
                <i
                  className="fa fa-globe"
                  style={{ color: " rgb(26, 165, 144)", fontSize: "23px" }}
                  aria-hidden="true"
                />
              </div>
            )}
            <table class="table is-hoverable">
              <thead>
                <tr>
                  <th>
                    <abbr title="Title">Program Title</abbr>
                  </th>
                  <th>
                    <abbr title="Type">Program Type</abbr>
                  </th>
                  <th>
                    <abbr title="Country">Country</abbr>
                  </th>
                  <th>
                    <abbr title="Address">Address</abbr>
                  </th>
                  <th>
                    <abbr title="Date">Program Date</abbr>
                  </th>
                  <th>
                    <abbr title="Apply Before">Apply Before</abbr>
                  </th>
                  <th>
                    <abbr title="Occupancy">Occupancy</abbr>
                  </th>
                  <th>
                    <abbr title="Status">Status</abbr>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123</td>
                  <td>38</td>
                  <td>23</td>
                  <td>12</td>
                  <td>3</td>
                  <td>68</td>
                  <td>36</td>
                  <td>+32</td>
                </tr>
                {renderedEvents}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminEvent);
