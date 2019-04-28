import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAuthedUser } from "../actions/authedUser";

class Logout extends Component {
    
    render() {
        const { dispatch } =this.props
        return <button type="button" className="btn btn--active btn--flex yellow" onClick={()=>dispatch(handleAuthedUser(null))}>Logout</button>
    }
}

export default connect()(Logout);
