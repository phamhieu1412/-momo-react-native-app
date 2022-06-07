import {all} from 'redux-saga/effects';

import counterSaga from 'features/counter/counterSaga';

function* helloSaga() {
  console.warn('hello sg');
}

export default function* rootSaga() {
  console.warn(`rootSagaq1`);
  yield all([helloSaga(), counterSaga()]);
}
