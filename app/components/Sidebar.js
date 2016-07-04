import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Profile extends Component {
  render() {
    return (
      <div className="w-section profile"></div>
    );
  }
}

class Groups extends Component {
  render() {
    return (
      <div className="groups"></div>
    );
  }
}

export default class Sidebar extends Component {
  render() {
    return (
      <div className="w-col w-col-1 sidebar">
        <div className="w-section osx-app-buttons"></div>
        <Profile />
        <Groups />
      </div>
    );
  }
}