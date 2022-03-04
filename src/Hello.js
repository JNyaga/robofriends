import React,{Component} from 'react';
import './App.css';

class Hello extends Component {
  render() {
    return (
      <div className ='f1 tc'>
      <h1>Hello World!</h1>
      <h2>{this.props.name}</h2>
    </div>);
  }
}

export default Hello;
