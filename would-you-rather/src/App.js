import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Form from './components/NewQuestion/Form'
import NavBar from './components/NavBar'
import FlavorForm from './components/Login/LoginForm'
import LoginForm from './components/Login/LoginForm'
import './App.css';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
       <NavBar/>
        {/* <Route path='/' exact  component={LeaderBoard} /> */}
        <Route path='/' exact  component={FlavorForm} />
        <Route path='/newquestion'  component={Form} />
        <Route path='/leaderboard'  component={LeaderBoard} />

        </div>
      </Router>
     
    );
  }
}

export default App;
