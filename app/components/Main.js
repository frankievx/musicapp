import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Main extends Component {
  render() {
    return (
      <div className="w-col w-col-6 main">
      	<div className="main-header"></div>
      	<div className="main-body">
      		<div className="player"></div>
      		<div className="queue">
      			<div className="queue-header"></div>
      			<div className="queue-break"></div>
      			<div className="queue-body"></div>
    			</div>
  			</div>
			</div>
    );
  }
}
