import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends Component {
	render() {
		return (
			<div className="library-header"></div>
		);
	}
}

class Body extends Component {
	render() {
		return (
			<div className="library-body"></div>
		);
	}
}

export default class Library extends Component {
  render() {
    return (
			<div className="w-col w-col-2 library">
				<Header />
				<Body />
			</div>
    );
  }
}