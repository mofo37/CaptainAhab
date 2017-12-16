import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from "native-base";
//import styles from "./styles";
export interface Props {
	loginForm: any;
	onLogin: Function;
	navigation: any;
	dismiss: Function;
}
export interface State {}
class Login extends React.Component<Props, State> {
	render() {
		return (
			<Container style={{paddingTop: 20}}>
				<Header style={{ height: 200 }}>
					<Text onPress={() => this.props.navigation.goBack(0)}>Close</Text>
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
					<Text onPress={() => this.props.navigation.navigate('Register')}>Don't Have Account? Sign Up</Text>
				</Content>
			</Container>
		);
	}
}

export default Login;
