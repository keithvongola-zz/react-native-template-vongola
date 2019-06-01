import React from 'react';
import { useTranslation } from 'react-i18next';
import { Provider } from 'react-redux';
import './locales/i18n';
import RootNav from './navigators';
import store from './store';

export default function App() {
	const { t } = useTranslation();

	return (
		<Provider store={store}>
			<RootNav screenProps={{ t }} />
		</Provider>
	);
}
