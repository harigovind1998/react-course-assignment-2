import React, { Component } from "react";
import UserInput from "./Components/UserInput";
import ValidationComponent from "./Components/ValidationComponent";
import CharComponent from './Components/CharComponent'
class App extends Component {
  state = {
    text: "Hello World!".split(""), 
    length: 12
  };

  textChangedHandler = (event)=>{
    this.setState({
      text: event.target.value.split(""), 
      length: event.target.value.length
    })

  }

  removeCharHandler = (key) =>{
    let wordArr = [...this.state.text];
    wordArr.splice(key,1);
    let newLen = this.state.length - 1;
    this.setState({
      text: wordArr,
      length: newLen
    })

  }

  getChars = () =>{
    return(
      <div>
        {this.state.text.map((letter,index)=>{
          return(<CharComponent value={letter} key={index} click={()=>this.removeCharHandler(index)}/>);
        })}
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1 style={{margin: 'auto', textAlign: 'center'}}>Assignment 2</h1>
        <UserInput changed={(event)=>this.textChangedHandler(event)} value={this.state.text.join("")}/>
        <ValidationComponent length={this.state.length} />
        {this.getChars()}
      </div>
    );
  }
}

export default App;
