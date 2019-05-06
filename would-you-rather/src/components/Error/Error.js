import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect} from "react-router-dom";
class Error extends Component {
  state = {
    redirect: false
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div style={{ textAlign: "center", marginTop: 25 }}>
        <p style={{ fontSize: 90, color: '#8AA9F8' }}>Error 404</p>
        <p  style={{ fontSize: 50, color: '#8AA9F8' }}>There is no question with this id</p>
        <button 
        style={{borderRadius: 16, padding: 10, color: 'white', borderColor: '#8AA9F8', backgroundColor: '#8AA9F8', fontWeight: '700'}}
        onClick={() => this.setState({ redirect: true })}>
       CLICK HERE TO BE REDIRECTED
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

export default connect(mapStateToProps)(Error);
