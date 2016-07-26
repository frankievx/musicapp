import axios from 'axios';

const url = "https://api.spotify.com/v1/search?q="
export function searchSpotify(value) {
	return axios.get(url+value+'&type=track&limit=5')
		.then(function(results) {
			return results.data.tracks.items.map(function(item) {
				return Object.assign({}, item, {
					service: "Spotify"
				});
			});
		});
};