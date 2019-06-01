import { combineReducers } from 'redux';
import SettingsReducer from '../features/settings/duck/reducer';


export default combineReducers({
	settings: SettingsReducer,
});
