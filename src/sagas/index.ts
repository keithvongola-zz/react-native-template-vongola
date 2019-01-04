import { all } from 'redux-saga/effects';
import {
  watchGetVersionInfo,
  watchUpdateLang,
} from './settings';

export default function* rootSaga() {
  yield all([
    watchGetVersionInfo(),
    watchUpdateLang(),
  ]);
}
