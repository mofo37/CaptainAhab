import React from "react";
import { TabNavigator } from "react-navigation";
import { Root } from "native-base";
// import { Dimensions } from "react-native";
import firebase from "firebase";
import "firebase/firestore";

// const deviceWidth = Dimensions.get("window").width;

import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";


// Initialize Firebase
firebase.initializeApp({
	apiKey: "AIzaSyAd9-_GPC8kfDZjkhwnrkRJnKfU00HH8U8",
	authDomain: "captainahab-ce472.firebaseapp.com",
	databaseURL: "https://captainahab-ce472.firebaseio.com",
	projectId: "captainahab-ce472",
	storageBucket: "",
	messagingSenderId: "856646189335"
});

export const auth = firebase.auth()
export const db = firebase.firestore();;

const App = TabNavigator({
	Home: {
		screen: Home,
	},	
	Login: {
		screen: Login,
	},
	Notifications: {
		screen: BlankPage,
	},
	Settings: {
		screen: Sidebar,
	},
}, {
		tabBarPosition: 'top',
		animationEnabled: true,
		initialRouteName: 'Home',
		tabBarOptions: {
			activeTintColor: '#e91e63',
		},
	});


export default () => (
	<Root>
		<App />
	</Root>
);
