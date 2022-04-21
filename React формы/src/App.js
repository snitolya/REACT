// import './App.css';
// import React from 'react';


// class InputForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }


//   render() {
//     return (
//       <div>
//       <span>{this.state.value.split('').reverse('').join('')} </span>
//           <input type="text" value={this.state.value} onChange={this.handleChange} name='input' />
//           </div>
//     );
//   }


// }

// export default InputForm;


// Делаем импорт Реакта 
// в Index.js  импортируем import InputForm from './App';
// и рендерим    <React.StrictMode> //     <InputForm/>  //    </React.StrictMode>


// ----------------------------------------------------------------------------------------------------------

import './App.css';
import React from 'react';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', check: false};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "checkbox"){
      this.setState({check: event.target.checked});
    }else{
    this.setState({value: event.target.value});
  }}


  render() {
    return (
      <React.Fragment>
      <span>{this.state.check ? this.state.value : this.state.value.split('').reverse().join('')} </span>
      <input type="checkbox" checked = {this.state.check} onChange={this.handleChange} name='checkbox' />
      <input type="text" value={this.state.value} onChange={this.handleChange} name='input' />
       </React.Fragment>
    );
  }


}

export default InputForm;



