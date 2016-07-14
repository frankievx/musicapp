import React, { Component, PropTypes } from 'react';


export default class YoutubePlayer extends Component {
	render() {
		const { videoID } = this.props
		const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters 
        autoplay: 1
      }
    };
		return (
			<div className="player">
				<div className="videoWrapper">
				<div className="ytplayer"></div>
	      	<iframe width="560" 
	      					height="349" 
	      					src={"http://www.youtube.com/embed/"+videoID+"?controls=2&enablejsapi=1&autoplay=1&rel=0&hd=1"}
	      					frameborder="0" 
	      					allowfullscreen>
					</iframe>
     		</div>
   		</div>
 		)
	}
}