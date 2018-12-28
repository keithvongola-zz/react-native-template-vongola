import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import { LaunchGate } from './components';
import RootNav from './navigators';
import store from './store';
import './locales/i18n';

const WrappedRootNavigator = ({ t }) => <RootNav screenProps={{ t }} />;

const ReloadAppOnLanguageChange = withNamespaces()(WrappedRootNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LaunchGate>
          <ReloadAppOnLanguageChange />
        </LaunchGate>
      </Provider>
    );
  }
}
