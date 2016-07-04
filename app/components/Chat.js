import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends Component {
	render() {
		return (
			<div className="chat-header"></div>
		);
	}
}

class Body extends Component {
	render() {
		return (
			<div className="chat-body">
				<div className="messages"></div>
				<div className="message-input"></div>
			</div>
		);
	}
}

export default class Chat extends Component {
  render() {
    return (
			<div className="w-col w-col-3 chat">
				<Header />
				<Body />	
			</div>
    );
  }
}