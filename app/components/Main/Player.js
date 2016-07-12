import React, { Component, PropTypes } from 'react';
import YoutubePlayer from './YoutubePlayer';

export default class Player extends Component {
	render() {
		const { queue } = this.props
		const player = "Youtube";

    if(queue.length > 0){
			if(player === "Youtube") {
				return <YoutubePlayer  videoID={queue[0].id.videoId}/>
			}
		}
		else {
			return(<div className="player"></div>)
		}
	}
}