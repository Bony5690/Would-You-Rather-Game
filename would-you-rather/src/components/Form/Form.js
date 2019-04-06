import React, { Component } from 'react';
import  './styles.css'


class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstQuest: 'Enter option one text here',
      secondQuest: 'Enter option two text here'
    }
  }


  render() {
    const { firstQuest, secondQuest} = this.state;
    return (
      <div 
      style={{marginTop: 20}}
      className='wrapper'>
        <h3 >Create New Question</h3>
        <form className='new-question' onSubmit={this.handleSubmit}>
        <div style={{padding: 10}}>
          Would you rather...
        </div>
          <input value={firstQuest} />
          <div style={{padding: 10}}>
            or
          </div>

          <input value={secondQuest} />
          <button
          style={{backgroundColor: '#3CB371', color: '#ffffff', borderColor: '#3CB371'}}
            className='btn'
            type='submit'
          >
            Submit
              </button>
        </form>
      </div>
    );
  }
}

export default Form;