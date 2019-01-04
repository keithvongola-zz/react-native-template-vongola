import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import HomePage from '../pages/Home';

const routeConfigs = {
  Home: {
    screen: HomePage,
    navigationOptions: ({ screenProps: { t } }: any) => ({
      title: t('home:home__title'),
    }),
  },
};

const navigatorConfigs = {
  initialRouteName: 'Home',
};

const AppNavigator = createStackNavigator(routeConfigs, navigatorConfigs);

export default createAppContainer(AppNavigator);
