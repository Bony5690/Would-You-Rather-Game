import React, { Component } from "react";
import Tabs from "../Tab/Tabs";
import { Redirect } from "react-router-dom";
import "../Tab/styles.css";
import { connect } from "react-redux";
import Questions from "../Questions";

class DashBoard extends Component {
  state = {
    unanswered: true
  };

  render() {
    const {
      answeredIds,
      questionIds,
      authedUser,
      activeUsersAnswers
    } = this.props;
    const unansweredIds = questionIds.filter(f =>
      answeredIds ? !answeredIds.includes(f) : null
    );

    console.log("leaderboard", activeUsersAnswers);
    if (!authedUser[0]) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="container">
        <Tabs
          style={{ color: "#DCDCDC", fontWeight: "700" }}
          onClick={this.toggleQuestions}
        >
          <div
            style={{ backgroundColor: "#000000", textAlign: 'center' }}
            label="Unanswered Questions"
          >
            <ul>
              {unansweredIds.map((id, i) => (
                <li key={i}>
                  <Questions id={id} />
                </li>
              ))}
            </ul>
          </div>
          <div label="Answered Questions">
            <ul>
              {answeredIds.map((id, i) => (
                <li key={i}>
                  <Questions id={id} />
                </li>
              ))}
            </ul>
          </div>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  const activeUsersAnswers = users[authedUser] && users[authedUser].answers;
  const allIds = Object.keys(questions);
  const answeredIds = activeUsersAnswers
    ? Object.keys(activeUsersAnswers)
    : null;

  return {
    authedUser,
    answeredIds: answeredIds,
    unansweredIds: allIds,
    users,
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(DashBoard);
