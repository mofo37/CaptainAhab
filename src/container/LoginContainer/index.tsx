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

	async onGoogleLogin() {
		try {
			const result = await Expo.Google.logInAsync({
				iosClientId: '856646189335-2ag72i42u0v68tehsqi58jhjv5shd5b4.apps.googleusercontent.com',
				scopes: ['profile', 'email'],
			});
			if (result.type === 'success') {
				var credential = firebase.auth.GoogleAuthProvider.credential(result.idToken)
				  firebase.auth().signInWithCredential(credential);
					return true;
				} else {
				return { cancelled: true };
			}
		} catch (e) {
			return { error: true };
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
			screenProps={this.props.screenProps} onGoogleLogin={() => this.onGoogleLogin()}
		/>;
	}
}
