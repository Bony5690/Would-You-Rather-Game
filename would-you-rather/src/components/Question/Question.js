import React, { Component,  } from 'react';
import  './styles.css'


class Question extends Component {
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
    marginTop: 5,
    color: '#D3D3D3'
    }
    const { firstQuest, secondQuest} = this.state;
    return (
      <div 
      style={{marginTop: 20}}
      className='wrapper'>
        <h3 >Tyler Mcginnis ask...</h3>
        <form className='new-question' onSubmit={this.handleSubmit}>
        <div style={{}}>
          Would you rather...
        </div>
        <div style={{display:'flex'}}>
        <input 
          type='checkbox'
            onChange={this.handleChange}
         style={inputStyle}
          value={firstQuest} />
          <p style={{}}>Have Your best friend find $500</p>
        </div>
         
          <div style={{padding: 10}}>
            or
          </div>

        <div style={{display:'flex'}}>
          <input 
                 type='checkbox'
              style={inputStyle}
          value={secondQuest} />
          <p style={{}}>Find $50 yourself</p>
          </div>
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

export default Question;