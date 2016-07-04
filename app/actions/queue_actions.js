export const ENQUEUE = 'ENQUEUE';
export const DEQUEUE = 'DEQUEUE';

export function enqueue() {
  return {
    type: ENQUEUE
  };
}

export function dequeue() {
  return {
    type: DEQUEUE
  };
}
