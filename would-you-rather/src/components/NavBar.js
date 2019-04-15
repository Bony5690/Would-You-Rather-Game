import React, { Component } from 'react';
import './styles.css'
import { connect } from "react-redux";
import { withRouter, NavLink, Redirect, } from "react-router-dom";
import { handleRemoveAuthedUser } from "../actions/authedUser";;


class NavBar extends Component {
  handleClick = () => {
    console.log("step");
    const { dispatch } = this.props;
    dispatch(handleRemoveAuthedUser());
  }
  render() {
    const {  authedUser } = this.props;
    
    return authedUser[0] ?(
      <nav 
        className=' nav'>
      <ul >
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/newquestion' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
          Leader Board
          </NavLink>
        </li>
        <li>
         {}
        </li>
        <li>
        <img 
        alt='user avatar'
        style={{borderRadius: 30}}
        height="42" width="42"
        src="https://www.w3schools.com/w3images/avatar5.png"/>
        </li>
        {authedUser[0] ? authedUser : null}
        <li>
          <button
           onClick={() => this.handleClick()}
          >Logout</button>
          {/* <NavLink to='/Login' activeClassName='active'>
           Logout
          </NavLink> */}
        </li>
      </ul>
    </nav>
    )
    :
    null
  }
}

// const NavBar = (props) => {
//   handleClick = () => {
//     const { dispatch } = this.props;
//     dispatch(handleRemoveAuthedUser());
//   }

//     return(

//         <nav 
//         className=' nav'>
//       <ul >
//         <li>
//           <NavLink to='/' exact activeClassName='active'>
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to='/newquestion' activeClassName='active'>
//             New Question
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to='/leaderboard' activeClassName='active'>
//           Leader Board
//           </NavLink>
//         </li>
//         <li>
//           Hello Sarah Edo
//         </li>
//         <li>
//         <img 
//         alt='user avatar'
//         style={{borderRadius: 30}}
//         height="42" width="42"
//         src="https://www.w3schools.com/w3images/avatar5.png"/>
//         </li>

//         <li>
//           <button
//            onClick={() => handleClick()}
//           >Logout</button>
//           {/* <NavLink to='/home' activeClassName='active'>
//            Logout
//           </NavLink> */}
//         </li>
//       </ul>
//     </nav>

//     )
  
// }


function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default withRouter(connect(mapStateToProps)(NavBar));
