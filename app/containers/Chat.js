import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Header from '../components/Chat/ChatHeader';
import Body from '../components/Chat/ChatBody';

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