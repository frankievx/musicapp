import { helloSaga } from './sagas';
import { watchIncrementAsync } from './counter_sagas';
import { watchExternalSearch } from './results_sagas';

export default function* rootSaga() {
  yield [
   helloSaga(),
   watchIncrementAsync(),
   watchExternalSearch()
  ]
}