import * as React from "react";
import Analytics from "../../screens/Analytics";
import { observer, inject } from "mobx-react/native";

export interface Props {
	navigation: any;
	upgradeStore: any;
}
export interface State {}

@inject("upgradeStore")
@observer
export default class AnalyticsContainer extends React.Component<Props, State> {
	render() {
		return <Analytics navigation={this.props.navigation} showModal={this.props.upgradeStore.showModal} isVisible={this.props.upgradeStore.isVisible} />;
	}
}
