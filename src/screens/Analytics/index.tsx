import * as React from "react";
import { Text, Container, Content, Button } from "native-base";
import { View } from "react-native";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}

function RenderUpgrade ({navigation}){
	return (
		<Container style={styles.container}>
		<Content contentContainerStyle={styles.content}>
			<View style={styles.view}>
				<Text style={styles.text}>Arghhh only captains can get the maps to the buried treasure upgrade now matee..</Text>
				<Button block onPress={() => {
					navigation.navigate('Credentials')
				}} style={styles.button}>
					<Text>Upgrade</Text>
				</Button>
			</View>
		</Content>
	</Container>
	)
}

class Analytics extends React.Component<Props, State> {
	render() {
		return (
			<RenderUpgrade navigation={this.props.navigation}/>
		);
	}
}

export default Analytics;
