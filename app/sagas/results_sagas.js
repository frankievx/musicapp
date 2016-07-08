import { takeLatest, delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { searchYoutube } from '../apis/youtube_api';

import { EXTERNAL_SEARCH, FETCH_RESULTS, INVALIDATE_RESULTS, RECEIVE_RESULTS } from '../actions/search_actions.js';



export function* externalSearch(action) {
	try {
	  yield put({type: FETCH_RESULTS})
	  const results = yield call(searchYoutube, action.payload)
	  yield put({type: RECEIVE_RESULTS, payload: results})
	}
	catch(err) {
		console.log(err);
  	yield put({type: INVALIDATE_RESULTS})
  }
}

export function* watchExternalSearch() {
	yield* takeLatest( EXTERNAL_SEARCH, externalSearch)
}