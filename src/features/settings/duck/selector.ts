import { createSelector } from 'reselect';
import { RootState } from 'MyTypes';

export const selectSettings = (state: RootState) => state.settings;

export const selectVersionInfo = createSelector(
	selectSettings,
	settings => settings.versionInfo,
);

export const selectIsLatest = createSelector(
	selectSettings,
	settings => settings.isLatest,
);
