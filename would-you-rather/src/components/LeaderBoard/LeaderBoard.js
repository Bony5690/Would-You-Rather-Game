import React, { Component } from 'react';
import Tabs from '../Tab/Tabs'
import '../Tab/styles.css'

class LeaderBoard extends Component {
    render() {
        return (
            <div>
            <h1>LeaderBoard</h1>
           <Tabs>
            <div label="Unanswered Questions">
              See ya later, <em>Alligator</em>!
            </div>
            <div label="Answered Questions">
              After 'while, <em>Crocodile</em>!
            </div>
          </Tabs>
          </div>
        );
    }
}

export default LeaderBoard;