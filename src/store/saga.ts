import { all } from 'redux-saga/effects';
import { SettingsSagas } from '../features/settings';

export default function* rootSaga() {
	yield all([
		SettingsSagas.watchGetVersionInfo(),
		SettingsSagas.watchUpdateLang(),
	]);
}
