import { FETCH_RESULTS, INVALIDATE_RESULTS, RECEIVE_RESULTS } from '../actions/search_actions';

const initialState = {
	isFetching: false,
	didInvalidate: false,
	options: []
}

export default function results(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESULTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case INVALIDATE_RESULTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: true
      });
    case RECEIVE_RESULTS:
    	return Object.assign({}, state, {
        options: action.payload.data.items,
        isFetching: false,
        didInvalidate: false
        // lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}