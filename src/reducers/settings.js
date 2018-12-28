import { fromJS } from 'immutable';
import {
  UPDATE_SETTINGS,
} from '../actions/settings';

const initialState = fromJS({
  lang: 'zh',
  versionInfo: null,
  isLatest: null,
});

const actionsMap = {
  [UPDATE_SETTINGS]: (state, { settings }) => state.mergeDeep(settings),
};

export default (state = initialState, action = {}) => {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
};
