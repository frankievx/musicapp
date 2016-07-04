import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Library extends Component {
  render() {
    return (
			<div className="w-col w-col-2 library">
				<div className="library-header"></div>
				<div className="library-body"></div>
			</div>
    );
  }
}