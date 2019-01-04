import {
  put, takeLatest,
} from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as SettingsAction from '../actions/settings';
import i18n from '../locales/i18n';

/**
 * Get latest app version infomation.
 */
export function* handleGetVersionInfo() {
  try {
    const settings = {
      versionInfo: {
        version: '1.0.0',
        url: 'https://www.example.com',
      },
      isLatest: true,
    };

    yield put(SettingsAction.updateSettings(settings));
    yield put(SettingsAction.getVersionInfoSuccess());
  } catch (error) {
    yield put(SettingsAction.getVersionInfoFail(error));
  }
}

export function* watchGetVersionInfo() {
  yield takeLatest(SettingsAction.GET_VERSION_INFO, handleGetVersionInfo);
}

/**
 * Update app language
 */
export function* handleUpdateLang(action: ActionType<typeof SettingsAction.updateLang>) {
  try {
    const { payload } = action;
    i18n.changeLanguage(payload);
    yield put(SettingsAction.updateSettings({ lang: payload }));
    yield put(SettingsAction.updateLangSuccess());
  } catch (error) {
    yield put(SettingsAction.updateLangFail(error));
  }
}

export function* watchUpdateLang() {
  yield takeLatest(SettingsAction.UPDATE_LANG, handleUpdateLang);
}
