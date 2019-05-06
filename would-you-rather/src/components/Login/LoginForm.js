import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAuthedUser } from "../../actions/authedUser";
import "./styles.css";



function mapStateToProps({ users, authedUser }) {
  return {
    authedUser,
    users: Object.values(users)
  };
}

class FlavorForm extends Component {
  state = {
    user: "",
    toHome: false
  };

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { user } = this.state;
    dispatch(handleAuthedUser(user));
    this.setState({ toHome: true })
  };

  handleChange = event => {
    this.setState({ user: event.target.value });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
 
    if (this.state.toHome) {
      return <Redirect to={from} />;
    }

    const inputStyle = {
      backgroundColor: "#8AA9F8",
      color: "#ffffff",
      borderColor: "#8AA9F8",
      borderRadius: 16,
      height: 40,
      fontWeight: 300,
      fontSize: 25
    };

    return (
      <div style={{ marginTop: 50 }} className="wrapper">
        <form className="new-question">
          <label>
            <p style={{ textAlign: "center", fontSize: 30 }}>Sign In</p>
            <select
              style={{ width: "100%" }}
              value={this.state.user}
              onChange={this.handleChange}
            >
              <option value="Login" className="select">
                Choose a user to login with
              </option>
              <option value="sarahedo">sarahedo</option>
              <option value="tylermcginnis">tylermcginnis</option>
              <option value="johndoe">johndoe</option>
            </select>
          </label>
          <input
            onClick={() => this.handleSubmit()}
            style={inputStyle}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}



export default connect(mapStateToProps)(FlavorForm);
