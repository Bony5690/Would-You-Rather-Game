import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Form from './components/NewQuestion/Form'
import NavBar from './components/NavBar'
import FlavorForm from './components/Login/LoginForm'
import LoginForm from './components/Login/LoginForm'
import Question from './components/Question/Question';
import './App.css';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import {connect} from 'react-redux';
import {handleInitialData} from './actions/shared';

class App extends Component {

componentDidMount(){
  this.props.dispatch(handleInitialData())
}

  render() {
    return (
      <Router>
        <div className='container'>
       <NavBar/>
        {/* <Route path='/' exact  component={LeaderBoard} /> */}
        <Route path='/' exact  component={LeaderBoard} />
        {/* <Route path='/newquestion'  component={Form} /> */}
        <Route path='/newquestion'  component={Question} />
        <Route path='/leaderboard'  component={LeaderBoard} />

        </div>
      </Router>
     
    );
  }
}

export default connect()(App);
