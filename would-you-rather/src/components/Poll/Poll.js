import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.css";
import { handleSaveQuestionAnswer } from "../../actions/questions";
import { Redirect, withRouter } from "react-router-dom";
import { formatDate } from "../../utils/helper";

class Poll extends Component {
  handleClick = (question, answer) => {
    const { dispatch } = this.props;
    dispatch(handleSaveQuestionAnswer(question, answer));
  };

  handleOptionChange = e => {
    this.setState({
      selectedQuestion: e.target.value
    });
  };

  render() {
    console.log("Polling", this.props);

    const { questions, users, authedUser, id } = this.props;
    if (!authedUser[0]) {
      return <Redirect to="/login" />;
    }

    if (questions[id] === undefined) {
      return <Redirect to="/404" />;
    }
    const question = questions && questions[id];
    const user = users && users[question.author];

    const { timestamp, optionOne, optionTwo } = question;
    const { name, avatarURL } = user;

    const selectedQuestion = question.optionOne.votes.includes(authedUser)
      ? "optionOne"
      : question.optionTwo.votes.includes(authedUser)
      ? "optionTwo"
      : false;

    const votes =
      question.optionOne.votes.length + question.optionTwo.votes.length;

    const votes1 = question.optionOne.votes.length;
    const votes2 = question.optionTwo.votes.length;
    const sum = votes;
    const percentOfVotes1 = (votes1 / sum) * 100;
    const percentOfVotes2 = (votes2 / sum) * 100;

    const wrapper = {
      display: "flex",
      justifyContent: "center",
      alignContent: "center"
    };

    const borderWrapper = {
      borderRadius: 32,
      maxWidth: 600,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      backgroundColor: "#8AA9F8"
    };
    const imageStyle = {
      borderRadius: 21,
      heigt: 109,
      width: 74
    };

    const questionWrapper = {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#F7B681",
      alignContent: "center",
      width: "100%",
      borderTopRightRadius: 32,
      borderBottomRightRadius: 32
    };

    return (
      <div style={wrapper}>
        <div className="border" style={borderWrapper}>
          <div>
            <img src={avatarURL} style={imageStyle} alt={`Avatar of ${name}`} />
            <p style={{ color: "white", fontWeight: "600", padding: 10 }}>
              {name}
            </p>
            <div style={{ marginTop: 20, color: "white", fontWeight: "600" }}>
              {formatDate(timestamp)}
            </div>
          </div>

          <div style={questionWrapper}>
            <div
              style={{
                margin: 20,
                borderColor: "#000000",
                borderWidth: 1,
                display: "flex"
              }}
            >
              <div>
                <div style={{ margin: 15 }}>
                  <p
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontWeight: "700",
                      marginBottom: 26
                    }}
                  >
                    Would You Rather
                  </p>
                  <button
                    className="noFocus"
                    onClick={() => this.handleClick(question, "optionOne")}
                    style={{
                      backgroundColor:
                        selectedQuestion !== "optionOne"
                          ? "#A9A9A9"
                          : "#8AA9F8",
                      color:
                        selectedQuestion !== "optionOne " ? "white" : "#F7B681",
                      fontWeight: "700",
                      borderRadius: 16,
                      padding: 10
                    }}
                  >
                    {optionOne.text}
                  </button>
                </div>
                <div
                  style={{ color: "white", fontSize: 22, fontWeight: "700" }}
                >
                  or
                </div>
                <div style={{ marginTop: 40 }}>
                  <button
                    className="noFocus"
                    onClick={() => this.handleClick(question, "optionTwo")}
                    style={{
                      backgroundColor:
                        selectedQuestion !== "optionTwo"
                          ? "#A9A9A9"
                          : "#8AA9F8",
                      color: "white",
                      fontWeight: "700",
                      borderRadius: 16,
                      padding: 10
                    }}
                  >
                    {optionTwo.text}
                  </button>
                </div>
              </div>

              <div style={{ marginTop: 15 }}>
                <div style={{ paddingLeft: 18 }}>
                  <p
                    style={{ color: "white", fontSize: 20, fontWeight: "700" }}
                  >
                    {percentOfVotes1 ? percentOfVotes1.toFixed(2) : "0"}%
                  </p>
                  <p style={{ color: "white", fontWeight: "700" }}>
                    {question.optionOne.votes.length} of {votes}
                  </p>
                  <p
                    style={{ color: "white", fontSize: 20, fontWeight: "700" }}
                  >
                    Votes
                  </p>
                </div>
                <p
                  style={{
                    color: "white",
                    fontSize: 20,
                    paddingLeft: 20,
                    fontWeight: "700"
                  }}
                >
                  {percentOfVotes2 ? percentOfVotes2.toFixed(2) : "0"}%
                </p>
                <p style={{ color: "white", fontWeight: "700" }}>
                  {question.optionTwo.votes.length} of {votes}
                </p>
                <p style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
                  Votes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, props) {
  const { id } = props.match.params;

  return {
    id,
    authedUser,
    questions,
    users
  };
}

export default withRouter(connect(mapStateToProps)(Poll));
