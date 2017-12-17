// @flow
import * as React from "react";
import { Form, Item, Input, Toast, Icon } from "native-base";
import { observer, inject } from "mobx-react/native";

import Register from "../../screens/Register";

export interface Props {
	navigation: any;
    registerStore: any;
    screenProps: any;
}
export interface State {}

@inject("registerStore")
@observer
export default class RegisterContainer extends React.Component<Props, State> {
	emailInput: any;
	pwdinput: any;
	confirmpwdinput: any;
	register() {
		this.props.registerStore.validateForm();
		if (this.props.registerStore.isValid) {
			this.props.registerStore.clearStore();
			//TODO: register to Firebase then Nav to wallet
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
		const form = this.props.registerStore;
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

                <Item error={form.confirmPasswordError ? true : false} last>
					<Icon active name="unlock" />
					<Input
						placeholder="Password"
						ref={c => (this.confirmpwdinput = c)}
						value={form.confirmPassword}
						onBlur={() => form.validateConfirmPassword()}
						onChangeText={e => form.confirmPasswordOnChange(e)}
						secureTextEntry={true}
					/>
				</Item>
			</Form>
		);

		return <Register registerForm={Fields} navigation={this.props.navigation} 
			onRegister={() => this.register()}
            screenProps={this.props.screenProps}
        />;
	}
}
