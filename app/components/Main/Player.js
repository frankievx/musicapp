import React, { Component, PropTypes } from 'react';


export default class Player extends Component {
	render() {
		const player = "Youtube";
		const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters 
        autoplay: 1
      }
    };
		if(player === "Youtube") {
			return (
				<div className="player">
					<div className="videoWrapper">
		      	<iframe width="560" 
		      					height="349" 
		      					src="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1" 
		      					frameborder="0" 
		      					allowfullscreen>
  					</iframe>
	     		</div>
     		</div>
   		)
		}
	}
}