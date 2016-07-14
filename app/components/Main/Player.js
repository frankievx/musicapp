import React, { Component, PropTypes } from 'react';
import YoutubePlayer from './YoutubePlayer';
import Youtube from 'react-youtube';

export default class Player extends Component {
	render() {
		const { queue, dequeue } = this.props
		const player = "Youtube";
		const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters 
        autoplay: 1
      }
    };

    if(queue.length > 0){
			if(player === "Youtube") {
				return (
					<div className="player">
						<div className="videoWrapper">
							<Youtube  opts={opts}
												videoId={queue[0].id.videoId}
											  onEnd={dequeue}	/>
					  </div>	
				  </div>
			  )
			}
		}
		else {
			return(<div className="player"></div>)
		}
	}
}