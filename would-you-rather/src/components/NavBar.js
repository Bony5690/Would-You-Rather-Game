import React, { Component } from "react";
import "./styles.css";
import { connect } from "react-redux";
import {  NavLink } from "react-router-dom";
import { handleRemoveAuthedUser } from "../actions/authedUser";

class NavBar extends Component {
  handleClick = () => {
    console.log("step");
    const { dispatch } = this.props;
    dispatch(handleRemoveAuthedUser());
  };
  render() {
    const { authedUser } = this.props;

    const buttonStyle = {
      borderRadius: 16,
      padding: 15,
      width: 100,
      backgroundColor: "#8AA9F8",
      fontWeight: "700",
      color: "white",
      borderColor: "#8AA9F8"
    };

    const usernameStyle = {
      fontSize: 20,
      fontWeight: "700"
    };

    return authedUser[0] ? (
      <nav className=" nav">
        <ul>
          <li>
            <NavLink
              className="navlink navlinkStyle"
              to="/"
              exact
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink navlinkStyle" to="/add">
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink navlinkStyle" to="/leaderboard">
              Leaderboard
            </NavLink>
          </li>
          <li>
            <img
              alt="user avatar"
              style={{ borderRadius: 30 }}
              height="42"
              width="42"
              src="https://www.w3schools.com/w3images/avatar5.png"
            />
          </li>
          <li style={usernameStyle}>
            {authedUser[0] ? authedUser.toUpperCase() : null}
          </li>

          <li>
            <button
              className="buttonStyle"
              style={buttonStyle}
              onClick={() => this.handleClick()}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    ) : null;
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NavBar);
