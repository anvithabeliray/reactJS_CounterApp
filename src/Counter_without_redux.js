
import React, { Component } from 'react';

class CounterWithoutRedux extends Component {

  constructor(props){
    super(props);
    this.state={
     number :0,
    }
  }
   divstyle = {  display: 'inline',  }

   buttonStyle = {  fontSize: 13, width: '90px',  height: '40px',  fontWeight: 'bold'  }

  increment=()=>{
    this.setState({
      number :this.state.number+1
   })
  }

  decrement=()=>{
    this.setState({
      number :this.state.number-1 
   })
  }
  reset=()=>{
    this.setState({
      number :0
   })
  }

  render() {
    return (
      <div className="App" >
        <h2>Counter App with No Redux </h2>
        <header className="App-header">         
          <h1>Counter value: {this.state.number}</h1>
          <div style={this.divstyle}>
            <button onClick={this.increment} type="button" style={this.buttonStyle}>Increment Counter</button>
            <button onClick={this.decrement} type="button" style={this.buttonStyle}>Decrement Counter</button>
            <button onClick={this.reset} type="button" style={this.buttonStyle}>Reset Counter</button>
          </div>
        </header>
      </div>
    );
  }
}

export default CounterWithoutRedux;


 
