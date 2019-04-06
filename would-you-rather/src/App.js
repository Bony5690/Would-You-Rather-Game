import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Form from './components/Form/Form'
import NavBar from './components/NavBar'
import LoginForm from './components/Login/LoginForm'
import './App.css';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
       <NavBar/>
        <Route path='/' exact  component={LoginForm} />
        <Route path='/newquestion'  component={Form} />
        <Route path='/leaderboard'  component={LeaderBoard} />

        </div>
      </Router>
     
    );
  }
}

export default App;
