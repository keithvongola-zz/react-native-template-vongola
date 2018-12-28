import { fromJS } from 'immutable';
import { createReducer } from '../helpers';
import {
  UPDATE_LANG,
  GET_VERSION_INFO,
  GET_VERSION_INFO_SUCCESS,
  GET_VERSION_INFO_FAIL,
} from '../actions/settings';

const initialState = fromJS({
  lang: 'zh',
  versionInfo: null,
  isLatest: null,
});

const actionsMap = {
  [UPDATE_LANG]: (state, action) => state.set('lang', action.lang),
  [GET_VERSION_INFO_SUCCESS]: (state, { settings }) => state.mergeDeep(settings),
  [GET_VERSION_INFO_FAIL]: state => state.mergeDeep({ isLatest: true }),
};

export default createReducer(initialState, actionsMap);
