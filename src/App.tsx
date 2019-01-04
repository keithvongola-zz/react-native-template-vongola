import React from 'react';
import { Component } from 'react';
import { TransProps, withNamespaces } from 'react-i18next';
import { Provider } from 'react-redux';
import { LaunchGate } from './components';
import './locales/i18n';
import RootNav from './navigators';
import store from './store';

const WrappedRootNavigator = ({ t }: { t : TransProps['t'] }) => <RootNav screenProps={{ t }} />;

const ReloadAppOnLanguageChange = withNamespaces()(WrappedRootNavigator);

export default class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <LaunchGate>
          <ReloadAppOnLanguageChange />
        </LaunchGate>
      </Provider>
    );
  }
}
