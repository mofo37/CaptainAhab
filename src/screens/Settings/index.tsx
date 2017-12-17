import * as React from "react";
import { Text, Container, Content, Button } from "native-base";
import styles from "./styles";
import { View } from "react-native";

// import LoggedInSettings from './LoggedInSettings';
export interface Props {
	navigation: any;
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
		return (
			<RenderNonLoggedIn navigation={this.props.navigation}/>
			
		);
	}
}
