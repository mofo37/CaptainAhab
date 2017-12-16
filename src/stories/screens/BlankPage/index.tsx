import * as React from "react";
import { Container, Content, Text, } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class BlankPage extends React.Component<Props, State> {
	render() {
		return (
			<Container style={styles.container}>
				<Content>
					<Text>BlankPage</Text>
				</Content>
			</Container>
		);
	}
}

export default BlankPage;
