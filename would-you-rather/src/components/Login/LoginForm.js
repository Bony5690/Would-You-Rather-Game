import React, {Component } from 'react';
import './styles.css'



class FlavorForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 'sarahedo'};
  
    }
  
    handleChange = (event) => {
      this.setState({value: event.target.value});
    }
  
    handleSubmit = (event) => {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
          <div className='wrapper'>
<div  

className='wrapper2'>
<p style={{textAlign: 'center', fontSize: 20, borderTop: 5, borderColor: '#000000', width: '100%', color: '#16c600', fontWeight: '700' }}>Welcome to the would you rather App!</p>
</div>
         
          

        <form 
        className='new-question'
        onSubmit={this.handleSubmit}>
          <label>
       <p style={{textAlign: 'center', color:  '#f4d0b9', fontSize: 30}}>Sign In</p>
            <select 
            style={{width: '100%'}}
            value={this.state.value} onChange={this.handleChange}>
            <option value="sarahedo">sarahedo</option>
              <option value="tylermcginnis">tylermcginnis</option>
              <option value="johndoe">johndoe</option>
            </select>
          </label>
          <input 
          style={{backgroundColor: '#2d5f2e', color: '#ffffff', borderColor: '#b3d3ce'}}
          type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }


  export default FlavorForm