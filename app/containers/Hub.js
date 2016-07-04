import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import Library from '../components/Library';
import Main from '../components/Main';
import Chat from '../components/Chat';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}


export default class Hub extends Component {
  render() {
    return (
    	<div className="w-row app">
      	<Sidebar />
      	<Library />
      	<Main />
      	<Chat />
      </div>
    );
  }
}
