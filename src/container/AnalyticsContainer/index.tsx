import * as React from "react";
import Analytics from "../../screens/Analytics";
export interface Props {
	navigation: any;
}
export interface State {}
export default class AnalyticsContainer extends React.Component<Props, State> {
	render() {
		return <Analytics navigation={this.props.navigation} />;
	}
}
