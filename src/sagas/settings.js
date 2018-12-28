import {
  put, takeLatest,
} from 'redux-saga/effects';
import i18n from '../locales/i18n';
import * as SettingsActions from '../actions/settings';

/**
  * Get latest app version infomation.
  *
  */
export function* handleGetVersionInfo() {
  try {
    const versionInfo = {
      version: '1.0.0',
      url: 'https://www.example.com',
    };

    const isLatest = true;
    yield put(SettingsActions.updateSettings({ versionInfo, isLatest }));
    yield put(SettingsActions.getVersionInfoSuccess());
  } catch (error) {
    yield put(SettingsActions.getVersionInfoFail(error));
  }
}

export function* watchGetVersionInfo() {
  yield takeLatest(SettingsActions.GET_VERSION_INFO, handleGetVersionInfo);
}

/**
  * Update app language
  */
export function* handleUpdateLang(actions) {
  try {
    const { lang } = actions;
    i18n.changeLanguage(lang);
    yield put(SettingsActions.updateSettings({ lang }));
    yield put(SettingsActions.updateLangSuccess());
  } catch (error) {
    yield put(SettingsActions.updateLangFail(error));
  }
}

export function* watchUpdateLang() {
  yield takeLatest(SettingsActions.UPDATE_LANG, handleUpdateLang);
}
