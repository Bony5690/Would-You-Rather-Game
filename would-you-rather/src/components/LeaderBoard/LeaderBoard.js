import React, { Component } from 'react';
import Tabs from '../Tab/Tabs'
import '../Tab/styles.css'
import {connect} from 'react-redux';
import Questions from '../Questions';


class LeaderBoard extends Component {
  state = {
    unanswered: true
  }

 

    render() {
      const { answeredIds, questionIds, authedUser, activeUsersAnswers } = this.props;
      const unansweredIds = questionIds.filter(f =>
        answeredIds ? !answeredIds.includes(f) : null
      );

      const questionsAnswered = questionIds.filter(f =>
        answeredIds ? answeredIds.includes(f) : null
      );


      console.log('leaderboard',  activeUsersAnswers)
        return (
            <div>
            <h1>LeaderBoard</h1>
           <Tabs
           onClick={this.toggleQuestions}
           >
            <div label="Unanswered Questions">
              See ya later, <em>Alligator</em>!
              <ul>
                {
                  unansweredIds.map((id, i) =>(
                    <li key={i}>
                    <Questions id={id}/>
                    </li>
                  ))}
              </ul>
            </div>
            <div label="Answered Questions">
              After 'while, <em>Crocodile</em>!
           <ul>
              {
               questionsAnswered.map((id, i) => (
                 <li key={i}>
                   <Questions id={id}/>
                 </li>
               ))}
              </ul> 
            
            </div>
          </Tabs>
          </div>
        );
    }
}

function mapStateToProps ({users, questions, authedUser}) {
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
    questionIds: Object.keys(questions)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  
  }
}

export default connect(mapStateToProps)(LeaderBoard);