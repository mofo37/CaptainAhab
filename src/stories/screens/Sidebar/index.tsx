import * as React from "react";
import { Text, Container, Content, Button } from "native-base";

export interface Props {
	navigation: any;
}
export interface State {}
export default class Sidebar extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Content>
					<Text>Sidebar Screen</Text>
					<Button block onPress={() => this.props.navigation.navigate('Credentials')}>
						<Text>Login</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}
