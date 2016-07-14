import { ENQUEUE, DEQUEUE } from '../actions/queue_actions';

export default function queue(state = [], action) {
  switch (action.type) {
    case ENQUEUE:
    	console.log(action.payload);
      return [...state.slice(), action.payload];
    case DEQUEUE:
      return [...state.slice(1)];
    default:
      return state;
  }
}