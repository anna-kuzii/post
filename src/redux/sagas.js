import { all } from 'redux-saga/effects';
import { watchCommentsSaga } from '../components/Comment/container/sagas';

export default function* rootSaga() {
  yield all([
    watchCommentsSaga(),
  ])
}
