import * as React from "react";
import { Platform, ImageBackground } from "react-native";

import {  Body, Title, Button, Text, View, Icon } from "native-base";
// import styles from "./styles";
export interface Props {
	loginForm: any;
	onLogin: Function;
	navigation: any;
	screenProps: any;
	onGoogleLogin: any;
}
export interface State {}
class Login extends React.Component<Props, State> {
	render() {		
		return (
			// <Container style={styles.container}>
			// 	<Content >
				<ImageBackground
					source={{ uri: 'https://images.unsplash.com/photo-1504133240992-d676c40f1d93?auto=format&fit=crop&w=750&q=80' }}
				>
					{/* <Icon style={{marginLeft: 15}} name='ios-close-circle-outline' onPress={() => this.props.screenProps.dismiss() }/> */}
					{/* <Body style={{ alignItems: "center", marginTop: 50 }}> */}
					
			</ImageBackground>
				
		);
	}
}

export default Login;
