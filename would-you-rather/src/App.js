import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Form from './components/Form/Form'
import NavBar from './components/NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
       <NavBar/>
        <Route path='/form'  component={Form} />
        </div>
      </Router>
     
    );
  }
}

export default App;
