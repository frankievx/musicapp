export const ENQUEUE = 'ENQUEUE';
export const DEQUEUE = 'DEQUEUE';

export function enqueue(option) {
	console.log('queue option', option);
  return {	type: ENQUEUE, payload: option};
}

export function dequeue(value, index) {
  return {
    type: DEQUEUE
  };
}
