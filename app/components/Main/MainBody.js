import React, { Component, PropTypes } from 'react';
import Player from './Player';
import Queue from './Queue';

export default class Body extends Component {
	render () {
		return (
			<div className="main-body">
				<Player />
    		<Queue />
			</div>
		);
	}
}