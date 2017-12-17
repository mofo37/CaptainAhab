import * as React from "react";
import { Container, Content, Text, } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class Notification extends React.Component<Props, State> {
	render() {
		return (
			<Container style={styles.container}>
				<Content>
					<Text>Notification Page</Text>
				</Content>
			</Container>
		);
	}
}

export default Notification;
