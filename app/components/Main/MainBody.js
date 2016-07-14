import React, { Component, PropTypes } from 'react';
import Player from './Player';
import Queue from './Queue';

export default class Body extends Component {
	constructor(props) {
		super(props);
		const propTypes = {
			queue: PropTypes.array.isRequired,
			dequeue: PropTypes.func.isRequired
		}
	}
	render () {
		const { queue, dequeue } = this.props
		return (
			<div className="main-body">
				<Player queue={queue}
								dequeue={dequeue}/>
    		<Queue queue={queue}/>
			</div>
		);
	}
}