import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { SplashScreen } from '../features/splash';

const AppNavigator = createSwitchNavigator({
  Splash: SplashScreen,
}, {
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
