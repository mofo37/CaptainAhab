import * as React from "react";
import Article from "../../screens/Article";

export interface Props {
	navigation: any;
}
export interface State {}

export default class AddCoinContainer extends React.Component<Props, State> {
	render() {
		return <Article navigation={this.props.navigation} />;
	}
}
