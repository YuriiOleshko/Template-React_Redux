import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
 
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
   
  }
  
}
function mapDispatchToProps(dispatch){
  return{

  }
}
export default connect(mapStateToProps,mapDispatchToProps) (App);

