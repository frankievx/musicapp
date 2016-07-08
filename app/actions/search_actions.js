export const EXTERNAL_SEARCH = "EXTERNAL_SEARCH";
export const FETCH_RESULTS = "FETCH_RESULTS";
export const INVALIDATE_RESULTS = "INVALIDATE_RESULTS";
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

export function externalSearch(value) {
  return {
    type: EXTERNAL_SEARCH, 
    payload: value
  };
}
