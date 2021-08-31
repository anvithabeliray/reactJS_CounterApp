
import React, { Component } from 'react';
import { connect } from 'react-redux';

const divstyle = {
    display: 'inline',
}
const buttonStyle = {
  fontSize: 13, width: '90px',  height: '40px',  fontWeight: 'bold'
}

class Counter extends Component {

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  reset = () => {
    this.props.dispatch({ type: 'RESET' })
  }

  render() {
    return (
      <div className="App" >
        <h2>Counter App with Redux </h2>
        <header className="App-header">         
          <h1>Counter value: {this.props.number}</h1>
          <div style={divstyle}>
            <button onClick={this.increment} type="button" style={buttonStyle}>Increment Counter</button>
            <button onClick={this.decrement} type="button" style={buttonStyle}>Decrement Counter</button>
            <button onClick={this.reset} type="button" style={buttonStyle}>Reset Counter</button>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.number
  };
}

export default connect(mapStateToProps)(Counter);
