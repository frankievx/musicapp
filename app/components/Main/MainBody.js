import React, { Component, PropTypes } from 'react';
import Player from './Player';

export default class Body extends Component {
	render () {
		return (
			<div className="main-body">
				<Player />
    		<div className="queue">
    			<div className="queue-header"></div>
    			<div className="queue-break"></div>
    			<div className="queue-body"></div>
  			</div>
			</div>
		);
	}
}