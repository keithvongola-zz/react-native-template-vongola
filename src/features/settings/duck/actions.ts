import { action } from 'typesafe-actions';

export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

export const UPDATE_LANG = 'UPDATE_LANG';
export const UPDATE_LANG_SUCCESS = 'UPDATE_LANG_SUCCESS';
export const UPDATE_LANG_FAIL = 'UPDATE_LANG_FAIL';

export const GET_VERSION_INFO = 'GET_VERSION_INFO';
export const GET_VERSION_INFO_SUCCESS = 'GET_VERSION_INFO_SUCCESS';
export const GET_VERSION_INFO_FAIL = 'GET_VERSION_INFO_FAIL';

export const updateSettings = (settings: {}) => action(UPDATE_SETTINGS, settings);

export const updateLang = (lang: string) => action(UPDATE_LANG, lang);

export const updateLangSuccess = () => action(UPDATE_LANG_SUCCESS);

export const updateLangFail = (error: string) => action(UPDATE_LANG_FAIL, error);

export const getVersionInfo = () => action(GET_VERSION_INFO);

export const getVersionInfoSuccess = () => action(GET_VERSION_INFO_SUCCESS);

export const getVersionInfoFail = (error: string) => action(GET_VERSION_INFO_FAIL, error);
