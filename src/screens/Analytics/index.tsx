import * as React from "react";
import { Text, Container, Content, Button } from "native-base";
import { View } from "react-native";
import UpgradeModal from '../../shared/UpgradeModal';

import styles from "./styles";
export interface Props {
	navigation: any;
	showModal: any;
	isVisible: boolean
}
export interface State {}

function RenderUpgrade ({showModal}){
	console.log(showModal)
	return (
			<View style={styles.view}>
				<Text style={styles.text}>Arghhh only captains can get the maps to the buried treasure upgrade now matee..</Text>
				<Button block onPress={() => {
					showModal();
				}} style={styles.button}>
					<Text>Upgrade</Text>
				</Button>
				
			</View>
	)
}

class Analytics extends React.Component<Props, State> {
	render() {
		console.log(this.props)
		return (
			<Container style={styles.container}>
				<Content contentContainerStyle={styles.content}>
					<RenderUpgrade showModal={this.props.showModal}/>
					<UpgradeModal onPress={this.props.showModal} isVisible={this.props.isVisible}/>
				</Content>
			</Container>
		);
	}
}

export default Analytics;
