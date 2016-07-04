import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}


export default class Hub extends Component {
  render() {
    return (
      <Sidebar />
    );
  }
}
