import { ENQUEUE, DEQUEUE } from '../actions/queue_actions';

export default function queue(state = [], action) {
  switch (action.type) {
    case ENQUEUE:
      return [];
    case DEQUEUE:
      return [];
    default:
      return state;
  }
}