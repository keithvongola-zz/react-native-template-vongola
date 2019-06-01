import {
	createAppContainer,
	createSwitchNavigator,
} from 'react-navigation';
import { Login } from '../features/auth';
import { SplashScreen } from '../features/splash';

const AppNavigator = createSwitchNavigator({
	Splash: SplashScreen,
	Login,
}, {
	initialRouteName: 'Splash',
});

export default createAppContainer(AppNavigator);
