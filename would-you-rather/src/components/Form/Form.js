import React, { Component,  } from 'react';
import  './styles.css'


class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstQuest: 'Enter option one text here',
      secondQuest: 'Enter option two text here'
    }
  }
  handleChange = (e) => {
  this.setState({firstQuest: e.target.value})
}


handleSubmit = (e) => {
  e.preventDefault()

  
}

  render() {

    const inputStyle = {
    padding: 5,
    color: '#D3D3D3'
    }
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
          <input 
            onChange={this.handleChange}
         style={inputStyle}
          value={firstQuest} />
          <div style={{padding: 10}}>
            or
          </div>

          <input 
              style={inputStyle}
          value={secondQuest} />
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