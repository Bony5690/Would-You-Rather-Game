import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

import { handleSaveQuestion } from "../../actions/questions";

class Form extends Component {
  state = {
    optionOneText: "",
    optionTwoText: ""
  };

  generateUID() {
    return (
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    );
  }

  

  handleSubmit = () => {
    // const id = this.generateUID();
    const { dispatch } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    dispatch(handleSaveQuestion({optionOneText, optionTwoText}));
  };

  render() {
    const { authedUser } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    if (!authedUser[0]) {
      return <Redirect to="/Login" />;
    }
    const inputStyle = {
      padding: 5,
      color: '#000000',
      borderRadius: 16,
      }
    return (
      <div 
      style={{marginTop: 20, backgroundColor: '#8AA9F8',}}
      className='wrapper'>
        <h3 style={{color: 'white'}} >Create New Question</h3>
        <div className='new-question' >
        <div style={{padding: 10, color: 'white'}}>
          Would you rather...
        </div>
          <input 
            onChange={(e) => this.setState({optionOneText: e.target.value})}
         style={inputStyle}
          value={optionOneText} />
          <div style={{padding: 10, color: 'white'}}>
            or
          </div>

          <input 
                     onChange={(e) => this.setState({optionTwoText: e.target.value})}
              style={inputStyle}
          value={optionTwoText} />
          <button
           onClick={event => this.handleSubmit(event)}
          style={{backgroundColor: '#F7B681', color: '#ffffff', borderColor: '#F7B681', borderRadius: 32, marginTop: 20, fontWeight: '700'}}
            className='btn'
            type='submit'
          >
            Submit
              </button>
        </div>
      </div>
     
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default withRouter(connect(mapStateToProps)(Form));
