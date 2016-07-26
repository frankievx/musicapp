import React, { Component, PropTypes } from 'react';
import Player from './Player';
import Queue from './Queue';

export default class Body extends Component {
	static propTypes = {
			queue: PropTypes.array.isRequired,
			dequeue: PropTypes.func.isRequired
	};
	
	constructor(props) {
		super(props);
	};

	render () {
		const { queue, dequeue } = this.props
		return (
			<div className="main-body">
				<Player queue={queue}
								dequeue={dequeue}/>
    		<Queue queue={queue}/>
			</div>
		);
	};
}