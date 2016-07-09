import React, { Component, PropTypes } from 'react';
import Header from '../components/Library/LibraryHeader';
import Body from '../components/Library/LibraryBody';

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