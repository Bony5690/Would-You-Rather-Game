import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./styles.css";
import { formatQuestion, formatDate } from "../utils/helper";

class Questions extends Component {
  render() {
    const { question, user, authedUser } = this.props;

    const { timestamp, optionOne, optionTwo, id } = question;
    const { name, avatarURL } = user;
    console.log("questions", this.props);

    return (
      <Link to={`/questions/${id}`} style={{ textDecoration: "none" }}>
        <div
          className="border"
          style={{
            borderRadius: 32,
            width: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "#8AA9F8"
          }}
        >
          <div>
            <img
              src={avatarURL}
              style={{ borderRadius: 21 }}
              height="109"
              width="74"
              alt={`Avatar of ${name}`}
            />
            <div style={{ marginTop: 20, color: "white", fontWeight: "600" }}>
              {formatDate(timestamp)}
            </div>
          </div>

          <div
            style={{
              width: "100%",
              borderTopRightRadius: 32,
              borderBottomRightRadius: 32,
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#F7B681",
              alignContent: "center"
            }}
            className="border"
          >
            <div style={{ margin: 20, borderColor: "#000000", borderWidth: 1 }}>
              <p
                style={{
                  backgroundColor: "light-gray",
                  fontSize: 25,
                  marginTop: -15,
                  color: "white",
                  fontWeight: "600"
                }}
              >
                {name} asks
              </p>
              <p style={{ color: "white", fontWeight: "600" }}>
                {optionOne.text}
              </p>
              <p style={{ color: "white", fontWeight: "600" }}>
                {optionTwo.text}
              </p>
              <p style={{ color: "white", fontWeight: "600" }}>{authedUser}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  const user = users && users[question.author];
  return {
    authedUser,
    question: formatQuestion(question, users[question.author], authedUser),
    user
  };
}

export default withRouter(connect(mapStateToProps)(Questions));
