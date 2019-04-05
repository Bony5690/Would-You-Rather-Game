import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Form from './components/Form'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={Form} />
      </Router>
     
    );
  }
}

export default App;
