import React, { Component } from 'react';
import logo from './logo.svg';
import d3Chart from './chart'
import ReactDOM from 'react-dom';

class ChartContainer extends Component {

  componentDidMount(){
    const el = ReactDOM.findDOMNode(this)
    d3Chart.create(el);
  }

   shouldComponentUpdate(){
       return false
   }


  render() {
    return (
      <div/>
    );
  }
}

export default ChartContainer;
