import React, { Component, PropTypes } from 'react';
import Player from './Player';
import Queue from './Queue';

export default class Body extends Component {
	constructor(props) {
		super(props);
		const propTypes = {
			queue: PropTypes.array.isRequired
		}
	}
	render () {
		const { queue } = this.props
		return (
			<div className="main-body">
				<Player queue={queue}/>
    		<Queue queue={queue}/>
			</div>
		);
	}
}