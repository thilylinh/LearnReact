import React, { Component } from 'react';
import './App.css';
//using jsx, component,state,props

class Car extends Component {
  state = {
    name: '',
  };
  onChangeText = (event) => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div>
        <p>This is Cara in Gara {this.props.name}</p>
        <input
          type='text'
          onChange={this.onChangeText}
          value={this.state.name}
        />
        <span>{this.state.name}</span>
      </div>
    );
  }
}
class Gara extends Component {
  render() {
    return (
      <div>
        <p> This is Gara name {this.props.name} </p>
        <Car {...this.props} />
      </div>
    );
  }
}

class App extends Component {
  componentWillMount() {
    console.log('will mount');
  }
  componentDidMount() {
    console.log('did mount');
  }
  render() {
    return (
      <div>
        <Gara name='A' />
        <Gara name='B' />
      </div>
    );
  }
}

export default App;
