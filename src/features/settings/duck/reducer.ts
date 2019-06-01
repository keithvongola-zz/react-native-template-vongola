import { ActionType } from 'typesafe-actions';
import * as Actions from './actions';

interface IState {
	lang?: string;
	versionInfo: {} | null;
	isLatest: boolean | null;
}

type Actions = ActionType<typeof Actions>;

const initialState: IState = {
	lang: 'zh',
	versionInfo: null,
	isLatest: null,
};

export default (state: IState = initialState, action: Actions) => {
	switch (action.type) {
		case Actions.GET_VERSION_INFO_SUCCESS:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
