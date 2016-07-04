import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Sidebar.css';

export default class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <div className="w-section osx-app-buttons"></div>
        <div className="w-section profile"></div>
        <div className="groups"></div>
      </div>
    );
  }
}