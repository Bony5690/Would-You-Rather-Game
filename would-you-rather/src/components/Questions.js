import React, { Component } from 'react';
import {connect} from 'react-redux';
import {formatQuestion} from '../utils/helper';

class Questions extends Component {
    render() {
            const {question, user, authedUser} = this.props

        const { timestamp, optionOne, optionTwo, id,  } = question;
        const {name, avatarURL} = user
        console.log('questions', this.props)

        return (
            <div className='tweet'>
               <img src={avatarURL} 
                       height="42" width="42"
               alt={`Avatar of ${name}`} className="avatar" />
              <p style={{backgroundColor: 'light-gray'}}>{name} asks</p>
              <p>{optionOne.text}</p>
              <p>{optionTwo.text}</p>
              <p>{authedUser}</p>
            </div>
        );
    }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
    const question = questions[id]
    const user = users && users[question.author];
    return {
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser),
        user
    }
}

export default connect(mapStateToProps)(Questions);