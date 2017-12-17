import * as React from "react";
import { Text, Container, Content, Button } from "native-base";
import styles from "./styles";
import { View } from "react-native";
import firebase from 'firebase';

import LoggedInSettings from './LoggedInSettings';
export interface Props {
	navigation: any;
	loginStore: any;
}
export interface State {}

function RenderNonLoggedIn({navigation}) {
	return (
		<Container style={styles.container}>
		<Content contentContainerStyle={styles.content}>
			<View style={styles.view}>
				<Text style={styles.text}>Ready to get started and join the crew matee?</Text>
				<Button block onPress={() => {
					navigation.navigate('Credentials')
				}} style={styles.button}>
					<Text>Log In</Text>
				</Button>
			</View>
		</Content>
	</Container>
	)
}

export default class Settings extends React.Component<Props, State> {
	render() {
		console.log(firebase.auth().currentUser)
		if (!firebase.auth().currentUser) {
			return <RenderNonLoggedIn navigation={this.props.navigation}/>;
		}
		return <LoggedInSettings navigation={this.props.navigation} loginStore={this.props.loginStore}/>;
	}
}
