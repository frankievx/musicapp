import axios from 'axios';

const key = "AIzaSyCF2blse6ZlLyjammrlYlovK4XZRRwCKLI"

export function searchYoutube(value) {
	return axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+value+'&key='+key)
}