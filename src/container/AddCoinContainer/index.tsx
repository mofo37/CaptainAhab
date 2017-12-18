import * as React from "react";
import AddCoin from "../../screens/AddCoin";
import { observer, inject } from "mobx-react/native";

export interface Props {
	navigation: any;
	walletStore: any;
}
export interface State {}

@inject("walletStore")
@observer
export default class AddCoinContainer extends React.Component<Props, State> {
	render() {
		return <AddCoin navigation={this.props.navigation} walletStore={this.props.walletStore}/>;
	}
}
