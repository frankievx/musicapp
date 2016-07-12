import { ENQUEUE, DEQUEUE } from '../actions/queue_actions';

export default function queue(state = [], action) {
  switch (action.type) {
    case ENQUEUE:
    	console.log(action.payload);
      return [...state.slice(), action.payload];
    case DEQUEUE:
      return [...state.slice(0, action.index),
      	...state.slice(action.index + 1)
    	];
    default:
      return state;
  }
}