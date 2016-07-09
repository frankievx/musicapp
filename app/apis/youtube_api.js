import axios from 'axios';

const key = "AIzaSyCF2blse6ZlLyjammrlYlovK4XZRRwCKLI"

export function searchYoutube(value) {
	console.log('api', value);
	return axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+value+'&key='+key)
}