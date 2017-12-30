import * as React from "react";
import { observer, inject } from "mobx-react/native";

import Prices from "../../screens/Prices";

export interface Props {
	navigation: any;
	homeStore: any;
}
export interface State {}

@inject("homeStore")
@observer
export default class PricesContainer extends React.Component<Props, State> {
	componentWillMount() {
		
	}
	render() {		
		let currencies = this.props.homeStore.currencies;
		return <Prices navigation={this.props.navigation} currencies={currencies} />;
	}
}
