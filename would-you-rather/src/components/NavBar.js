import React, { Component } from 'react';
import './styles.css'
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import { handleRemoveAuthedUser } from "../actions/authedUser";


class NavBar extends Component {
  handleClick = () => {
    console.log("step");
    const { dispatch } = this.props;
    dispatch(handleRemoveAuthedUser());
  }
  render() {
    const { authedUser } = this.props;
    

    return authedUser[0] ? (
      <nav
        className=' nav'>
        <ul >
          <li>
            <NavLink 
            className='navlink'
            to='/' exact activeClassName='active'>
              Home
          </NavLink>
          </li>
          <li>
            <NavLink 
                className='navlink'
            to='/add'>
              New Question
          </NavLink>
          </li>
          <li>
            <NavLink 
                className='navlink'
            to='/leaderboard'>
              Leaderboard
          </NavLink>
          </li>
          <li>
            <img
              alt='user avatar'
              style={{ borderRadius: 30 }}
              height="42" width="42"
              src="https://www.w3schools.com/w3images/avatar5.png" />
          </li>
          <li>
          {authedUser[0] ? authedUser : null}
          </li>

          <li>


            <button
            style={{borderRadius: 16, padding: 15, width: 100, backgroundColor: '#4B7BF5', fontWeight: '700', color: 'white'}}
              onClick={() => this.handleClick()}
            >Logout</button>
          </li>
        </ul>
      </nav>
    )
      :
      null
  }
}


function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default withRouter(connect(mapStateToProps)(NavBar));
