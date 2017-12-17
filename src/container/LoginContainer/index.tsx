// @flow
import * as React from "react";
import { Form, Item, Input, Toast, Icon } from "native-base";
import { observer, inject } from "mobx-react/native";
import firebase from "firebase";
import Login from "../../screens/Login";
import Expo from 'expo';

export interface Props {
	navigation: any;
	loginStore: any;
	screenProps: any;
}
export interface State {
	removeListener
 }

@inject("loginStore")
@observer
export default class LoginContainer extends React.Component<Props, State> {
	emailInput: any;
	pwdinput: any;
	removeListener
	componentDidMount() {
		this.removeListener = firebase.auth().onAuthStateChanged(user => {
			if (user) {
				console.log(user)
				this.props.loginStore.loggedInChange(true);
				this.props.navigation.navigate('Main');
			} else {
				
			}
		});
	}

	componentWillUnmount() {
		this.removeListener()
	}

	login() {
		this.props.loginStore.validateForm();
		if (this.props.loginStore.isValid) {
			//TODO
			let { email, password } = this.props.loginStore;
			firebase.auth()
				.signInWithEmailAndPassword(email, password)
				.catch(error => {
					// Handle Errors here.
					console.log(error.message);
				});
			this.props.loginStore.clearStore();
		} else {
			Toast.show({
				text: "Enter Valid Email & password!",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		}
	}

	async signInWithGoogleAsync() {
		try {
		  const result = await Expo.Google.logInAsync({
			androidClientId: '',
			iosClientId: '',
			scopes: ['profile', 'email'],
		  });
	  
		  if (result.type === 'success') {
			return result.accessToken;
		  } else {
			return {cancelled: true};
		  }
		} catch(e) {
		  return {error: true};
		}
	  }

	render() {
		const form = this.props.loginStore;
		const Fields = (
			<Form>
				<Item error={form.emailError ? true : false}>
					<Icon active name="person" />
					<Input
						placeholder="Email"
						keyboardType="email-address"
						ref={c => (this.emailInput = c)}
						value={form.email}
						onBlur={() => form.validateEmail()}
						onChangeText={e => form.emailOnChange(e)}
					/>
				</Item>

				<Item error={form.passwordError ? true : false} last>
					<Icon active name="unlock" />
					<Input
						placeholder="Password"
						ref={c => (this.pwdinput = c)}
						value={form.password}
						onBlur={() => form.validatePassword()}
						onChangeText={e => form.passwordOnChange(e)}
						secureTextEntry={true}
					/>
				</Item>
			</Form>
		);

		return <Login loginForm={Fields} navigation={this.props.navigation} onLogin={() => this.login()}
			screenProps={this.props.screenProps} onGoogleLogin= {() => this.onGoogleLogin()}
		/>;
	}
}
