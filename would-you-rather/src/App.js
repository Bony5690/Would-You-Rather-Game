import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter as Router } from 'react-router-dom'
import Form from './components/NewQuestion/Form'
import NavBar from './components/NavBar'
import FlavorForm from './components/Login/LoginForm'
import LoginForm from './components/Login/LoginForm'
import Question from './components/Question/Question';
import './App.css';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import {connect} from 'react-redux';
import {handleInitialData} from './actions/shared';
import { history } from "./store";

class App extends Component {

componentDidMount(){
  this.props.dispatch(handleInitialData())
}

  render() {
    return (
      <Router>
        <div className='container'>
       <NavBar/>
       <ConnectedRouter history={history}>
<Switch>
        <Route path='/LeaderBoard' exact  component={LeaderBoard} />
        <Route path='/' exact  component={LoginForm} />
        {/* <Route path='/newquestion'  component={Form} /> */}
        <Route path='/newquestion'  component={Question} />
        {/* <Route path='/leaderboard'  component={LeaderBoard} /> */}
        </Switch>
        </ConnectedRouter>
        </div>
      </Router>
     
    );
  }
}

export default connect()(App);
