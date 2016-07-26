import React, { Component, PropTypes } from 'react';
import YoutubePlayer from './YoutubePlayer';
import Youtube from 'react-youtube';
import Soundcloud from 'react-soundcloud-widget'
import Spotify from 'react-spotify-player'

export default class Player extends Component {
	render() {
		const { queue, dequeue } = this.props
		const YTopts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters 
        autoplay: 1
      }
    };
    const SCopts = {
    	auto_play: true,
    	visual: true
    };
    const size = {
  		width: '100%',
  		height: 300,
		};
		const view = 'coverart'; // or 'coverart'
		const theme = 'white'; // or 'white'


    if(queue.length > 0){
			if(queue[0].service === "Youtube") {
				return (
					<div className="player">
						<div className="videoWrapper">
							<Youtube  opts={YTopts}
												videoId={queue[0].id.videoId}
											  onEnd={dequeue}	
											  />
					  </div>	
				  </div>
			  )
			}
			if(queue[0].service === "Soundcloud") {
				return (
					<div className="player">
						<div className="videoWrapper">
							<Soundcloud opts={SCopts}
													url={queue[0].uri}
													/>
					  </div>	
				  </div>					
					)
			}
			if(queue[0].service === "Spotify") {
				return (
					<div className="player">
						<div className="videoWrapper">
							<Spotify  uri={queue[0].uri}
												size={{width: '100%', height: 300}}
												view="coverart"
												theme="white"
												/>
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