import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Root } from "native-base";
import DismissableStackNavigator from './DismissableStackNav';

import Login from "./container/LoginContainer";
import Register from "./container/RegisterContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";

const LoginNav = DismissableStackNavigator({
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
	Home: {
		screen: Home,
	},
	Notifications: {
		screen: BlankPage,
	},
	Settings: {
		screen: Sidebar,
	},
}, {
		tabBarPosition: 'bottom',
		animationEnabled: true,
		initialRouteName: 'Home',
		tabBarOptions: {
		activeTintColor: '#e91e63',
		},
	});

const App = StackNavigator({
	Main: {
		screen: MainNav,
	},
	Credentials: {
		screen: LoginNav,
	},
}, {
		mode: 'modal',
	});


export default () => (
	<Root>
		<App />
	</Root>
);
