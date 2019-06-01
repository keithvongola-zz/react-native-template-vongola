import { all } from 'redux-saga/effects';
import { 
	watchGetVersionInfo,
	watchUpdateLang
} from '../features/settings/duck/sagas';


export default function* rootSaga() {
	yield all([
		watchGetVersionInfo(),
		watchUpdateLang(),
	]);
}
