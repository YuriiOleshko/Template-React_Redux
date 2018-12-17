import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import addState from './redux/action/action'
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
   text:state.text
  }
  
}
function mapDispatchToProps(dispatch){
  return{
    addState:function(){
      dispatch(addState())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (App);

