// @flow
import * as React from "react";
import { Form, Item, Input, Toast, Icon } from "native-base";
import { observer, inject } from "mobx-react/native";

import Login from "../../stories/screens/Login";

export interface Props {
	navigation: any;
	loginStore: any;
}
export interface State {}

@inject("loginStore")
@observer
export default class LoginContainer extends React.Component<Props, State> {
	emailInput: any;
	pwdinput: any;
	login() {
		this.props.loginStore.validateForm();
		if (this.props.loginStore.isValid) {
			this.props.loginStore.clearStore();
			this.props.navigation.navigate("Main");
		} else {
			Toast.show({
				text: "Enter Valid Email & password!",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		}
	}
	render() {
		const form = this.props.loginStore;
		console.log(this.props.navigation);
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

		return <Login loginForm={Fields} navigation={this.props.navigation} onLogin={() => this.login()} />;
	}
}
