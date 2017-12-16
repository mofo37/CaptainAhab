import * as React from "react";
import { Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon } from "native-base";
// import styles from "./styles";
export interface Props {
	loginForm: any;
    onLogin: Function;
    navigation: any;
}
export interface State {}
class Register extends React.Component<Props, State> {
	render() {
		return (
			<Container style={{paddingTop: 20}}>
				<Header style={{ height: 200 }}>
                <Text onPress={ () => this.props.navigation.goBack(0)}>Close</Text>
					<Body style={{ alignItems: "center" }}>
						<Icon name="flash" style={{ fontSize: 104 }} />
						<Title>ReactNativeSeed.com</Title>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
						</View>
					</Body>
				</Header>
				<Content>
					{this.props.loginForm}
					<View padder>
						<Button block onPress={() => this.props.onLogin()}>
							<Text>Login</Text>
						</Button>
					</View>
                    <Text onPress={ () => this.props.navigation.navigate('Login')}>Have An Account? Sign In</Text>
				</Content>
			</Container>
		);
	}
}

export default Register;
