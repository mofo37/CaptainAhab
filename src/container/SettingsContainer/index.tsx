// @flow
import * as React from "react";
import Settings from "../../screens/Settings";
import { observer, inject } from "mobx-react/native";

export interface Props {
	navigation: any,
	loginStore: any,
}
export interface State {}

@inject("loginStore")
@observer
export default class SettingsContainer extends React.Component<Props, State> {
	render() {
		return <Settings navigation={this.props.navigation} loginStore={this.props.loginStore} />;
	}
}
