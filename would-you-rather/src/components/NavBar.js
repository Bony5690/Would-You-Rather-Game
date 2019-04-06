import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles.css'

const NavBar = (props) => {


    return(

      
        <nav 
        className=' nav'>
      <ul >
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/form' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/form' activeClassName='active'>
          Leader Board
          </NavLink>
        </li>
        <li>
          Hello Sarah Edo
        </li>
        <li>
        <img 
        alt='user avatar'
        style={{borderRadius: 30}}
        height="42" width="42"
        src="https://www.w3schools.com/w3images/avatar5.png"/>
        </li>

        <li>
          <NavLink to='/form' activeClassName='active'>
           Logout
          </NavLink>
        </li>
      </ul>
    </nav>

    )
  
}


export default NavBar;
