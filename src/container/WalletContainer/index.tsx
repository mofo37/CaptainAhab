import * as React from "react";
import Wallet from "../../screens/Wallet";
import { observer, inject } from "mobx-react/native";

export interface Props {
	navigation: any;
	walletStore: any;
}
export interface State {}

@inject("walletStore")
@observer
export default class WalletContainer extends React.Component<Props, State> {
	render() {
		return <Wallet navigation={this.props.navigation} walletStore={this.props.walletStore}/>;
	}
}
