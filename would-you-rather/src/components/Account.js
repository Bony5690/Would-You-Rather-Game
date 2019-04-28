import React, { Component } from 'react';
import { connect } from 'react-redux'
import Logout from './Logout'

class Account extends Component {

    render() {
        const {userName, avatar}= this.props
        return (
            <div className='account-info container'>
                Hello { userName } ! <img src={avatar}  alt={`Avatar of ${userName}`} className="avatar"/>
                <Logout/>
            </div>
        );
    }
}
function mapStateToProps ({ authedUser, users}) {
    const user = users[authedUser]
    const userName =  user.name
    const avatar = user.avatarURL
    return {
      userName,
      avatar
    }
  }
export default connect(mapStateToProps)(Account);