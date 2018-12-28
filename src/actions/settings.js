export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

export const UPDATE_LANG = 'UPDATE_LANG';
export const UPDATE_LANG_SUCCESS = 'UPDATE_LANG_SUCCESS';
export const UPDATE_LANG_FAIL = 'UPDATE_LANG_FAIL';

export const GET_VERSION_INFO = 'GET_VERSION_INFO';
export const GET_VERSION_INFO_SUCCESS = 'GET_VERSION_INFO_SUCCESS';
export const GET_VERSION_INFO_FAIL = 'GET_VERSION_INFO_FAIL';

export const updateSettings = settings => ({
  type: UPDATE_SETTINGS,
  settings,
});

export const updateLang = lang => ({
  type: UPDATE_LANG,
  lang,
});

export const updateLangSuccess = lang => ({
  type: UPDATE_LANG_SUCCESS,
  lang,
});

export const updateLangFail = error => ({
  type: UPDATE_LANG_SUCCESS,
  error,
});

export const getVersionInfo = () => ({
  type: GET_VERSION_INFO,
});

export const getVersionInfoSuccess = settings => ({
  type: GET_VERSION_INFO_SUCCESS,
  settings,
});

export const getVersionInfoFail = error => ({
  type: GET_VERSION_INFO_FAIL,
  error,
});
