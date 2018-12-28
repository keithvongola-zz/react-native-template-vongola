export const UPDATE_LANG = 'UPDATE_LANG';

export const GET_VERSION_INFO = 'GET_VERSION_INFO';
export const GET_VERSION_INFO_SUCCESS = 'GET_VERSION_INFO_SUCCESS';
export const GET_VERSION_INFO_FAIL = 'GET_VERSION_INFO_FAIL';

export const updateLang = lang => ({
  type: UPDATE_LANG,
  lang,
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


