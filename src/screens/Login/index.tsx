import * as React from "react";
import { Platform } from "react-native";
import colors from '../../theme/colors';

import { Container, Content, Body, Title, Button, Text, View, Icon } from "native-base";
// let { height, width } = Dimensions.get('window')
import styles from "./styles";
export interface Props {
	loginForm: any;
	onLogin: Function;
	navigation: any;
	screenProps: any;
	onGoogleLogin: any;
}
export interface State { }
class Login extends React.Component<Props, State> {
	render() {
		return (
			<Container style={styles.container}>
				<Content >
					{/* <Icon style={{marginLeft: 15}} name='ios-close-circle-outline' onPress={() => this.props.screenProps.dismiss() }/> */}
					<Body style={{ alignItems: "center", marginTop: 50 }}>
						<Icon name="flash" style={{ fontSize: 104 }} />
						<Title >Aahab</Title>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#FFF" : "#FFF" }} />
						</View>
					</Body>
					{this.props.loginForm}
					<View padder style={{ marginTop: 10 }}>
						<Button style={{backgroundColor: colors.white}}block onPress={() => this.props.onLogin()}>
							<Text style={{color:colors.coral}}>Login</Text>
						</Button>
					</View>
					<View padder>
						<Button style={{ backgroundColor: colors.coral }} block onPress={() => this.props.onGoogleLogin()}>
							<Icon name="logo-google" />
							<Text>Login with Google</Text>
						</Button>
					</View>
					<View padder style={{ marginTop: 10 }}>
						<Text style={{ textAlign: 'center', textDecorationLine: 'underline', color: colors.white }} onPress={() => this.props.navigation.navigate('Register')}>Don't Have Account? Sign Up</Text>
					</View>
				</Content>
			</Container>

		);
	}
}

export default Login;
