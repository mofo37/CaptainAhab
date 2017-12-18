import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Root } from "native-base";
// import DismissableStackNavigator from './DismissableStackNav';
import { Icon } from "native-base";

import Login from "./container/LoginContainer";
import Register from "./container/RegisterContainer";
import Prices from "./container/PricesContainer";
import Notification from "./container/NotificationContainer";
import Analytics from "./container/AnalyticsContainer";
import Wallet from "./container/WalletContainer";
import AddCoin from "./container/AddCoinContainer";

import Settings from "./container/SettingsContainer";
// import Onboarding from "./screens/Onboarding";

const LoginNav = StackNavigator({
	// Onboarding: {
	// 	screen: Onboarding,
	// 	navigationOptions: {
	// 		header: null,
	// 	},
	// },
	Login: {
		screen: Login,
		navigationOptions: {
			header: null,
		},
	},
	Register: {
		screen: Register,
		navigationOptions: {
			header: null,
		},
	},
}, {
		mode: 'card',
	});

const MainNav = TabNavigator({
	Prices: {
		screen: Prices,
		navigationOptions: {
			header: null,
			tabBarIcon: ({}) => (
				<Icon
				  name="ios-pricetag"
				/>
			),
		},
	},
	Analytics: {
		screen: Analytics,
		navigationOptions: {
			header: null,
			tabBarIcon: ({}) => (
				<Icon name="md-analytics"
				/>
			)
		},
	},
	Wallet: {
		screen: Wallet,
		navigationOptions: {
			header: null,
			tabBarIcon: ({}) => (
				<Icon name="ios-cash"
				/>
			)
		},
	},
	Notifications: {
		screen: Notification,
		navigationOptions: {
			header: null,
			tabBarIcon: ({}) => (
				<Icon name="ios-notifications"
				/>
			)
		},
	},
	Settings: {
		screen: Settings,
		navigationOptions: {
			header: null,
			tabBarIcon: ({}) => (
				<Icon name="md-settings" />
			)
		},
	},
}, {
		tabBarPosition: 'bottom',
		animationEnabled: true,
		initialRouteName: 'Wallet',
		tabBarOptions: {
		activeTintColor: '#e91e63',
		},
	});

const App = StackNavigator({
	Credentials: {
		screen: LoginNav,
		navigationOptions: {
			header: null,
		},
	},
	Main: {
		screen: MainNav,
		navigationOptions: {
			header: null,
		},
	},
	AddCoin: {
		screen: AddCoin, 
		navigationOptions: {
			header: null,
		},
	},
}, {
		mode: 'modal',
	});


export default () => (
	<Root>
		<App />
	</Root>
);
