import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SplashScreen } from './components';

/**
 * A gate component to show splash screen on application launch (gate closed).
 * Show @props children when gate is open.
 *
 * @class LaunchGate
 * @extends {PureComponent}
 */
class LaunchGate extends PureComponent {
    state = {
      pass: false,
    }

    componentDidMount() {
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

LaunchGate.propTypes = {
  /**
    * Component to be rendered when gate is open.
    */
  children: PropTypes.element.isRequired,
};

export default LaunchGate;
