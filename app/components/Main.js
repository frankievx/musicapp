import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import YouTube from 'react-youtube';

class Header extends Component {
	render() {
		return (
			<div className="main-header"></div>
		);
	}
}

class Body extends Component {
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

class Player extends Component {
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

export default class Main extends Component {
  render() {
    return (
      <div className="w-col w-col-6 main">
      	<Header />
      	<Body />
			</div>
    );
  }
}
