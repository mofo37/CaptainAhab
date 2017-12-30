import * as Expo from "expo";
import * as React from "react";
import { Provider } from "mobx-react/native";
import { StyleProvider } from "native-base";

import App from "../App";
import LoginNav from "../LoginNav";

import getTheme from "../theme/components";
import variables from "../theme/variables/platform";
export interface Props {}
export interface State {
	isReady: boolean,
	isLoggedIn: boolean,
}

import firebase from "firebase";
import "firebase/firestore";

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
export const db = firebase.firestore();

export default function(stores) {
	return class Setup extends React.Component<Props, State> {
		state: {
			isReady: boolean,
			isLoggedIn: boolean,
		};
		constructor(props) {
			super(props);
			this.state = {
				isReady: false,
				isLoggedIn: false,
			};
		}
		removeListener
		componentDidMount() {
			this.removeListener = firebase.auth().onAuthStateChanged(user => {
				if (user) {
					this.setState({isLoggedIn: true});
				} else {
					this.setState({isLoggedIn: false});
				}
			});
		}
	
		componentWillUnmount() {
			this.removeListener()
		}

		componentWillMount() {
			this.loadFonts();
			stores.homeStore.getCurrenciesList();
			
		}
		async loadFonts() {
			await Expo.Font.loadAsync({
				Roboto: require("native-base/Fonts/Roboto.ttf"),
				Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
				Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
				SimpleLineIcons: require("@expo/vector-icons/fonts/SimpleLineIcons.ttf"),
			});

			this.setState({ isReady: true });
		}

		render() {
			if (!this.state.isReady ) {
				return <Expo.AppLoading />;
			} else if (!this.state.isLoggedIn){
				return (
					<StyleProvider style={getTheme(variables)}>
						<Provider {...stores}>
							<LoginNav />
						</Provider>
					</StyleProvider>
				)
			}
			return (
				<StyleProvider style={getTheme(variables)}>
					<Provider {...stores}>
						<App />
					</Provider>
				</StyleProvider>
			);
		}
	};
}
