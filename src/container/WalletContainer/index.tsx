import * as React from "react";
import Wallet from "../../screens/Wallet";
export interface Props {
	navigation: any;
}
export interface State {}
export default class WalletContainer extends React.Component<Props, State> {
	render() {
		return <Wallet navigation={this.props.navigation} />;
	}
}
