import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends Component {
	render() {
		return (
			<div className="main-header"></div>
		);
	}
}

class Body extends Component {
	render () {
		return (
			<div className="main-body">
    		<div className="player"></div>
    		<div className="queue">
    			<div className="queue-header"></div>
    			<div className="queue-break"></div>
    			<div className="queue-body"></div>
  			</div>
			</div>
		);
	}
}

export default class Main extends Component {
  render() {
    return (
      <div className="w-col w-col-6 main">
      	<Header />
      	<Body />
			</div>
    );
  }
}
