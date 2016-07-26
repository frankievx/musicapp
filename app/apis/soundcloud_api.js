import axios from 'axios';

const clientID = '283c48a9064a258084d420144cbb7db4';
const clientSecret = '2d67e0d31f2a22e3efcc363392f0d71b';
const url = 'https://api.soundcloud.com/tracks?client_id='+clientID;

export function searchSoundcloud(value) {
	return axios.get(url+'&q='+value)
		.then(function(results) {
			return results.data.map(function(item){
				return Object.assign({}, item, {
					service: "Soundcloud"
				});
			});
		});
}

