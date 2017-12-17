import * as React from "react";
import { Platform } from "react-native";

import { Container, Content, Body, Title, Button, Text, View, Icon } from "native-base";
import styles from "./styles";
export interface Props {
	loginForm: any;
	onLogin: Function;
	navigation: any;
	screenProps: any;
}
export interface State {}
class Login extends React.Component<Props, State> {
	render() {		
		return (
			<Container style={styles.container}>
				<Content >
					<Icon style={{marginLeft: 15}} name='ios-close-circle-outline' onPress={() => this.props.screenProps.dismiss() }/>
					<Body style={{ alignItems: "center", marginTop: 50 }}>
						<Icon name="flash" style={{ fontSize: 104 }} />
						<Title>ReactNativeSeed.com</Title>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
						</View>
					</Body>
					{this.props.loginForm}
					<View padder style={{marginTop: 10}}>
						<Button block onPress={() => this.props.onLogin()}>
							<Text>Login</Text>
						</Button>
					</View>
					<View padder>
						<Button style={{backgroundColor: '#FF5722'}}block onPress={() => this.props.onLogin()}>
							<Icon name="logo-google" />
							<Text>Login with Google</Text>
						</Button>
					</View>
					<View padder style={{marginTop: 10}}>
						<Text style={{textAlign: 'center', textDecorationLine: 'underline'}} onPress={() => this.props.navigation.navigate('Register')}>Don't Have Account? Sign Up</Text>
					</View>
				</Content>
			</Container>
		);
	}
}

export default Login;
