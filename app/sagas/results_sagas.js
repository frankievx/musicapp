import { takeLatest, delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { searchYoutube } from '../apis/youtube_api';
import { searchSoundcloud } from '../apis/soundcloud_api';
import { searchSpotify } from '../apis/spotify_api';

import { EXTERNAL_SEARCH, FETCH_RESULTS, INVALIDATE_RESULTS, RECEIVE_RESULTS } from '../actions/search_actions.js';



export function* externalSearch(action) {
	try {
	  yield put({type: FETCH_RESULTS})
	  yield delay(300);

	  const YTresults = yield call(searchYoutube, action.payload)
	  const SCresults = yield call(searchSoundcloud, action.payload)
	  const SPresults = yield call(searchSpotify, action.payload)
	  console.log('YTresults', YTresults);
	  console.log('SCresults', SCresults);
	  console.log('SPresults', SPresults)

	  const results = [...YTresults.slice(), ...SCresults, ...SPresults];
	  yield put({type: RECEIVE_RESULTS, payload: results});
	}
	catch(err) {
		console.log(err);
  	yield put({type: INVALIDATE_RESULTS})
  }
}

export function* watchExternalSearch() {
	yield* takeLatest( EXTERNAL_SEARCH, externalSearch)
}