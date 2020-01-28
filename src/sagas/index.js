
import search from './searchSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    search(),
  ])
}