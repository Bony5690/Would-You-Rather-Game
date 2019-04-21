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
      color: '#000000'
      }
    return (
      <div 
      style={{marginTop: 20}}
      className='wrapper'>
        <h3 >Create New Question</h3>
        <div className='new-question' >
        <div style={{padding: 10}}>
          Would you rather...
        </div>
          <input 
            onChange={(e) => this.setState({optionOneText: e.target.value})}
         style={inputStyle}
          value={optionOneText} />
          <div style={{padding: 10}}>
            or
          </div>

          <input 
                     onChange={(e) => this.setState({optionTwoText: e.target.value})}
              style={inputStyle}
          value={optionTwoText} />
          <button
           onClick={event => this.handleSubmit(event)}
          style={{backgroundColor: '#3CB371', color: '#ffffff', borderColor: '#3CB371'}}
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
