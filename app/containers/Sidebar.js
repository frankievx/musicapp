import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Profile from '../components/Sidebar/SidebarProfile';
import Groups from '../components/Sidebar/SidebarGroups';

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