import React from "react";

import Onboarding from "./screens/Onboarding";
import Login from "./container/LoginContainer";
import Register from "./container/RegisterContainer";
import { StackNavigator } from "react-navigation";
import { Root } from "native-base";

const LoginNav = StackNavigator({
	Onboarding: {
		screen: Onboarding,
		navigationOptions: {
			header: null,
		},
	},
	Login: {
		screen: Login,
		navigationOptions: {
			header: null,
		},
	},
	Register: {
		screen: Register,
		navigationOptions: {
			header: null,
		},
	},
}, {
		mode: 'card',
    });
    
    export default  () => (
        <Root>
            <LoginNav />
        </Root>
    );