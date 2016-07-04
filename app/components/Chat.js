import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Chat extends Component {
  render() {
    return (
			<div className="w-col w-col-3 chat">
				<div className="chat-header"></div>
				<div className="chat-body">
					<div className="messages"></div>
					<div className="message-input"></div>
				</div>
			</div>
    );
  }
}