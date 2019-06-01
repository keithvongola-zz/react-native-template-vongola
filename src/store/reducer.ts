import { combineReducers } from 'redux';
import { SettingsReducer } from '../features/settings';

export default combineReducers({
	settings: SettingsReducer,
});
