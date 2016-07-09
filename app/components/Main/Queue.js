import React, { Component, PropTypes } from 'react';

export default class Queue extends Component {
	render() {
		return (
			<div className="queue">
				<section>
				<table>
					<thead>
						<tr>
					    <th>Song</th>
					    <th>Artist/Uploader</th> 
					    <th>Length</th>
						</tr>
					</thead>
				</table>
				</section>
			<div className="queue-body"></div>
			</div>
		)
	}
}