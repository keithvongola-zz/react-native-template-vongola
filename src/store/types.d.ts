declare module 'MyTypes' {
	import { ActionType, StateType } from 'typesafe-actions';

	export type Store = StateType<typeof import('./index').default>;
	export type RootState = StateType<typeof import('./reducer').default>;
}
