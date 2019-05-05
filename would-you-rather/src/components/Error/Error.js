import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
class Error extends Component {
  state = {
    redirect: false
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/Login" />;
    }
    return (
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: 30 }}>Error 404</p>
        <p>There is no question with this id</p>
        <button onClick={() => this.setState({ redirect: true })}>
          Click here to be redirected
        </button>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    authedUser,
    users: Object.values(users)
  };
}

export default withRouter(connect(mapStateToProps)(Error));
