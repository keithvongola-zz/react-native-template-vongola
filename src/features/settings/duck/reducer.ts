import { fromJS } from 'immutable';
import { ActionType } from 'typesafe-actions';
import * as SettingsAction from '../actions/settings';

interface IState {
  lang?: string;
  versionInfo?: {};
  isLatest?: boolean;
  mergeDeep: any;
}

type SettingsAction = ActionType<typeof SettingsAction>;

const initialState: IState = fromJS({
  lang: 'zh',
  versionInfo: null,
  isLatest: null,
});

export default (state: IState = initialState, action: SettingsAction) => {
  switch (action.type) {
    case SettingsAction.UPDATE_SETTINGS:
      return state.mergeDeep(action.payload);
    default:
      return state;
  }
};
