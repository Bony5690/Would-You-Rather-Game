import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import './styles.css'
import { formatQuestion, formatDate } from '../utils/helper';

class Questions extends Component {
    render() {
        const { question, user, authedUser } = this.props

        const { timestamp, optionOne, optionTwo, id } = question;
        const { name, avatarURL } = user
        console.log('questions', this.props)

        return (
            <Link to={`/poll/${id}`} style={{ textDecoration: "none" }}>
            <div 
            className='border'
            >
                <div>
                    <img src={avatarURL}
                    style={{borderRadius: 21}}
                        height="42" width="42"
                        alt={`Avatar of ${name}`}  />
                    <div style={{marginTop: 20}}>{formatDate(timestamp)}</div>
                </div>
                <div style={{ margin: 20}}> 
                    <p style={{ backgroundColor: 'light-gray', fontSize: 25, marginTop: -15 }}>{name} asks</p>
                    <p>{optionOne.text}</p>
                    <p>{optionTwo.text}</p>
                    <p>{authedUser}</p>
                </div>
            </div>
            </Link>
        );
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id]
    const user = users && users[question.author];
    return {
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser),
        user
    }
}

export default withRouter(connect(mapStateToProps)(Questions));