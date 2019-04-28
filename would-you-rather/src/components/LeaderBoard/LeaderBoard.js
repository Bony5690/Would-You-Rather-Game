import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from '../Board';
import { Redirect, withRouter } from "react-router-dom";

function mapStateToProps({users, authedUser}) {
    const usersSorted = Object.values(users).sort(
        (a, b) =>
          Object.keys(b.answers).length +
          b.questions.length -
          (Object.keys(a.answers).length + a.questions.length)
      );
    return {
        usersSorted,
        authedUser
    };
}

class LeaderBoard extends Component {
    render() {
        const { usersSorted, authedUser } = this.props;
        if (!authedUser[0]) {
            return <Redirect to="/Login" />;
          }

        return (
            <div>
                <Board
                usersSorted={usersSorted}
                />
            </div>
        );
    }
}

export default withRouter(connect(
    mapStateToProps,
)(LeaderBoard));