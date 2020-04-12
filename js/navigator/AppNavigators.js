import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import WelcomePage from '../page/WelcomePage';
import HomePage from '../page/HomePage';

const InitNavigator = createStackNavigator({
	WelcomePage: {
		screen: WelcomePage,
		navigationOptions: {
			headerShown: false
		}
	}
})

const MainNavigator = createStackNavigator({
	HomePage: {
		screen: HomePage,
		navigationOptions: {
			headerShown: false
		}
	}
})

export default createAppContainer(createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
}, {
    navigationOptions: {
		headerShown: false,
    },
}));






