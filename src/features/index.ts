import i18next from 'i18next';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

export interface IScreenProps {
	t: i18next.TFunction;
}

export interface IPageProps {
	screenProps: IScreenProps;
	navigation: NavigationScreenProp<NavigationState>;
}
