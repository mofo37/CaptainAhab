import * as React from "react";
import { Container, Header, Title, Content, Text, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class BlankPage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header>
					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name.item : "Blank Page"}</Title>
					</Body>
				</Header>

				<Content padder>
					<Text>{param !== undefined ? param.name.item : "Create Something Awesome . . ."}</Text>
				</Content>
			</Container>
		);
	}
}

export default BlankPage;
