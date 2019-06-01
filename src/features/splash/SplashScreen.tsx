import React, { PureComponent } from 'react';
import {
	StyleSheet, Text, View, Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from 'MyTypes';
import { colors, fonts } from '../../styles';
import { SettingsActions } from '../settings';
import { selectVersionInfo, selectIsLatest } from '../settings/duck/selector';
import { IPageProps } from '..';

interface ISplashScreenProps extends IPageProps {
	isLatest: boolean | null;

	versionInfo: {} | null;

	getVersionInfo: () => void;
}

class SplashScreen extends PureComponent<ISplashScreenProps> {
	componentDidMount() {
		const { getVersionInfo } = this.props;
		getVersionInfo();
	}

	componentDidUpdate(prevProps: ISplashScreenProps) {
		const { isLatest: prevIsLatest } = prevProps;
		const { isLatest, versionInfo, navigation: { navigate } } = this.props;
		if (prevIsLatest === null && isLatest !== prevIsLatest) {
			if (isLatest) {
				setTimeout(() => navigate('Login'), 2000);
			} else {
				Alert.alert('New version found');
			}
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>
					Splash Screen
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.white,
	},
	text: {
		color: colors.primary,
		fontSize: fonts.big,
		fontWeight: fonts.bold,
	},
});

const mapStateToProps = (state: RootState) => ({
	versionInfo: selectVersionInfo(state),

	isLatest: selectIsLatest(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	getVersionInfo: () => dispatch(SettingsActions.getVersionInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
