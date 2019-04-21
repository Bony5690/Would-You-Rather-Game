import React, { Component } from 'react';
import { connect } from "react-redux";
import './styles.css'
import { handleSaveQuestionAnswer } from '../../actions/questions';
import { Redirect, withRouter } from "react-router-dom";
import { formatDate } from '../../utils/helper';

class Poll extends Component {


    handleClick = (question, answer) => {
        const { dispatch } = this.props;
        console.log("Question: ", question);
        console.log("Question: ", answer);
        dispatch(handleSaveQuestionAnswer(question, answer));
    };


    render() {

       console.log('Polling', this.props)

        const { questions, users, authedUser, id } = this.props

    //     const selectedQuestion = questions.optionOne.votes.includes(authedUser)
    //   ? "optionOne"
    //   : questions.optionTwo.votes.includes(authedUser)
    //   ? "optionTwo"
    //   : false;

    // const newQuestion = questions.optionOne.votes.includes(authedUser)
    //   ? true
    //   : questions.optionTwo.votes.includes(authedUser)
    //   ? true
    //   : false;

    // const votes =
    //   questions.optionOne.votes.length + questions.optionTwo.votes.length;

        if (questions[id] === undefined) {
            return <Redirect to="/404" />;
          }
      

        const { timestamp } = questions;
        const { name, avatarURL } = users
        return (
            <div
                className='border'
                style={{ display: 'flex', padding: 20 }}>
                <div>
                    <img src={avatarURL}
                        style={{ borderRadius: 21 }}
                        height="42" width="42"
                        alt={`Avatar of ${name}`} />
                    <div style={{ marginTop: 20 }}>{formatDate(timestamp)}</div>
                    <p>{authedUser}</p>
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