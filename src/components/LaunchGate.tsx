import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SplashScreen } from '.';
import * as SettingsActions from '../actions/settings';

export interface ILaunchGateProps {
  getVersionInfo: () => void;
}

export interface ILaunchGateState {
  pass: boolean;
}

/**
 * A gate component to show splash screen on application launch (gate closed).
 * Show @props children when gate is open.
 *
 * @class LaunchGate
 * @extends {PureComponent}
 */
class LaunchGate extends PureComponent<ILaunchGateProps, ILaunchGateState> {
  _timer?: number;

  state = {
    pass: false,
  };

  componentDidMount() {
    const { getVersionInfo } = this.props;
    getVersionInfo();
    this._timer = setTimeout(() => {
      this.setState({ pass: true });
      clearTimeout(this._timer);
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  render() {
    const { children } = this.props;
    const { pass } = this.state;

    if (pass) { return (children); }

    return <SplashScreen />;
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getVersionInfo: () => dispatch(SettingsActions.getVersionInfo()),
});

export default connect(null, mapDispatchToProps)(LaunchGate);
