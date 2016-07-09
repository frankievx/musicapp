import React, { Component, PropTypes } from 'react';

export default class Body extends Component {
	render() {
		return (
			<div className="chat-body">
				<div className="messages"></div>
				<div className="message-input"></div>
			</div>
		);
	}
}