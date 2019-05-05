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

    const { dispatch } = this.props
    const { user } = this.state;
    dispatch(handleAuthedUser(user));

  }

  handleChange = (event) => {
    this.setState({ user: event.target.value });
  }


  render() {
    const { authedUser } = this.props;
    if (authedUser[0]) {
      return <Redirect to="/" />;
    }

    console.log(authedUser)

    return (
      <div 
      style={{marginTop: 50}}
      className='wrapper'>
        <form
        className='new-question'
        >
          <label>
            <p style={{ textAlign: 'center', fontSize: 30,  }}>Sign In</p>
            <select
              style={{ width: '100%', }}
              value={this.state.user}
              onChange={this.handleChange}
            >
              <option value="Login" className='select'>Choose a user to login with</option>
              <option value="sarahedo">sarahedo</option>
              <option value="tylermcginnis">tylermcginnis</option>
              <option value="johndoe">johndoe</option>
            </select>
          </label>
          <input
            onClick={() => this.handleSubmit()}
            style={{ backgroundColor: '#8AA9F8',
             color: '#ffffff', borderColor: '#8AA9F8', 
             borderRadius: 16, 
             height: 40 ,
             fontWeight: 300,
             fontSize: 25,
            }}
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