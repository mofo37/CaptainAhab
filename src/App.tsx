import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Root } from "native-base";
// import DismissableStackNavigator from './DismissableStackNav';
import { Icon } from "native-base";

import Prices from "./container/PricesContainer";
import Notification from "./container/NotificationContainer";
import Analytics from "./container/AnalyticsContainer";
import Wallet from "./container/WalletContainer";
import AddCoin from "./container/AddCoinContainer";
import Article from "./container/ArticleContainer";
import Settings from "./container/SettingsContainer";
import PriceDetails from "./screens/PriceDetails";



	const PricesNav = StackNavigator({
		Prices: {
			screen: Prices,
			navigationOptions: {
				header: null,
			},
		},
		PriceDetails: {
			screen: PriceDetails,
			navigationOptions: {
				header: null,
			},
		},
	}, {
			mode: 'card',
		});

const MainNav = TabNavigator({
	Prices: {
		screen: PricesNav,
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
	Article: {
		screen: Article, 
		navigationOptions: {
			header: null,
		},
	},
}, {
		mode: 'modal',
	});


export default  () => (
	<Root>
		<App />
	</Root>
);
