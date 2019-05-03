import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.css";
import { handleSaveQuestionAnswer } from "../../actions/questions";
import { Redirect, withRouter } from "react-router-dom";
import { formatDate } from "../../utils/helper";

class Poll extends Component {
  // constructor(props){
  //     super(props)
  //     this.state = {
  //         selectedQuestion: 'optionOne'
  //     }
  // }

  handleClick = (question, answer) => {
    const { dispatch } = this.props;
    console.log("Question: ", question);
    // console.log("Question: ", answer);
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

    const newQuestion = question.optionOne.votes.includes(authedUser)
      ? true
      : question.optionTwo.votes.includes(authedUser)
      ? true
      : false;

    const votes =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    console.log(selectedQuestion);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center"
        }}
      >
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
              height="42"
              width="42"
              alt={`Avatar of ${name}`}
            />
            <p style={{ color: "white", fontWeight: "600" }}>{name}</p>
            <div style={{ marginTop: 20, color: "white", fontWeight: "600" }}>
              {formatDate(timestamp)}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#F7B681",
              alignContent: "center",
              width: "100%",
              borderTopRightRadius: 32,
              borderBottomRightRadius: 32
            }}
          >
            <div
              //  className='center'
              style={{ margin: 20, borderColor: "#000000", borderWidth: 1 }}
            >
              <button
                onClick={() => this.handleClick(question, "optionOne")}
                style={{
                  backgroundColor:
                    selectedQuestion !== "optionOne" ? "gray" : "#8AA9F8",
                  color: selectedQuestion !== "optionOne " ? "white" : "#F7B681",
                  fontWeight: "700",
                  borderRadius: 16,
                  padding: 10
                }}
              >
                {optionOne.text}
              </button>
              {/* {
                            !newQuestion ? null  */}
              {/* :  */}
              <p>
                {question.optionOne.votes.length} / {votes}
              </p>
              {/* } */}

              <button
                onClick={() => this.handleClick(question, "optionTwo")}
                style={{
                  backgroundColor:
                    selectedQuestion !== "optionTwo" ? "gray" : "#8AA9F8",
                  color: "white",
                  fontWeight: "700",
                  borderRadius: 16,
                  padding: 10
                }}
              >
                {optionTwo.text}
              </button>
              {/* {
                            !newQuestion ? null 
                            :  */}
              <p>
                {question.optionTwo.votes.length} / {votes}
              </p>
              {/* } */}
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
