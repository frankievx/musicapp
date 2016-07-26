import axios from 'axios';

const key = "AIzaSyCF2blse6ZlLyjammrlYlovK4XZRRwCKLI"
const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key='+key

export function searchYoutube(value) {
	return axios.get(url+'&q='+ value)
		.then(function(results) {
			return results.data.items.map(function(item) {
				return Object.assign({}, item, {
					service: "Youtube"
				});
			});
		});
};