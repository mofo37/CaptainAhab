import * as React from "react";
import {Container, Content, Text, Icon} from "native-base";
import styles from "./styles";

export interface Props {
    navigation: any;

}
export interface State {}

class PriceDetails extends React.Component<Props, State> {
	render() {
		return (
			<Container style={styles.container}>
				<Content>
				<Icon style={{marginLeft: 15}} name='ios-arrow-back-outline' onPress={() => this.props.navigation.goBack() }/>
				<Text style={styles.total}>Price Details</Text>
				  
                
				</Content>
			</Container>
		);
	}
}

export default PriceDetails;