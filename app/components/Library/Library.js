import React, { Component, PropTypes } from 'react';
import Header from './LibraryHeader';
import Body from './LibraryBody';

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