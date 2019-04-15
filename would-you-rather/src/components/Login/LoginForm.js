import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { handleAuthedUser } from "../../actions/authedUser";
import './styles.css'



class FlavorForm extends Component {
  state = {
    user: ""
  };

  // handleChange = (event) => {
    
  // }

  handleSubmit = () => {

    const {dispatch} = this.props
    const {user} = this.state;
    dispatch(handleAuthedUser(user));
  
  }

  handleChange= (event) => {
    this.setState({user: event.target.value});
  }
  

  render() {
    const { users, authedUser } = this.props;
    if (authedUser[0]) {
      return <Redirect to="/LeaderBoard" />;
    }

    console.log(authedUser)
  
    return (
      <div className='wrapper'>
        <div

          className='wrapper2'>
          <p style={{ textAlign: 'center', fontSize: 20, borderColor: '#000000', width: '100%', fontWeight: '700' }}>Welcome to the would you rather App!</p>
        </div>

        <form
          onClick={() => this.handleSubmit()}
          className='new-question'
          >
          <label>
            <p style={{ textAlign: 'center', fontSize: 30 }}>Sign In</p>
            <select
              style={{ width: '100%' }}
              value={this.state.user} 
              onChange={this.handleChange}
                   >
                     <option value="sarahedo">Login</option>
              <option value="sarahedo">sarahedo</option>
              <option value="tylermcginnis">tylermcginnis</option>
              <option value="johndoe">johndoe</option>
            </select>
          </label>
          <input
        
            style={{ backgroundColor: '#3CB371', color: '#ffffff', borderColor: '#b3d3ce' }}
            type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    authedUser,
    users: Object.values(users)
  };
}

export default withRouter(connect(mapStateToProps)(FlavorForm));