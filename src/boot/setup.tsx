import * as Expo from "expo";
import * as React from "react";
import { Provider } from "mobx-react/native";
import { StyleProvider } from "native-base";

import App from "../App";
import LoginNav from "../LoginNav";

import getTheme from "../theme/components";
import variables from "../theme/variables/platform";
export interface Props { }
export interface State {
	isReady: boolean,
	isLoggedIn: boolean,
}


import firebase from "firebase";
import {db} from './index'

export default function (stores) {
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
					db.collection("wallets").where('userId', '==', user.uid)
					.get()
					.then(querySnapshot => {
					  querySnapshot.forEach(doc => {
						console.log(doc.data())
						this.setState({ isLoggedIn: true });
					  });
					})
					.catch(error => console.log("Error getting documents: ", error));
					
				} else {
					this.setState({ isLoggedIn: false });
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
			if (!this.state.isReady) {
				return <Expo.AppLoading />;
			} else if (!this.state.isLoggedIn) {
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
