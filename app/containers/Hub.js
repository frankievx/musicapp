import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import Library from './Library';
import Main from './Main';
import Chat from './Chat';

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
