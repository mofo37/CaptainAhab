import * as React from "react";
import { observer, inject } from "mobx-react/native";

import Prices from "../../screens/Prices";
import data from "./data";

export interface Props {
	navigation: any;
	mainStore: any;
}
export interface State {}

@inject("mainStore")
@observer
export default class PricesContainer extends React.Component<Props, State> {
	componentWillMount() {
		this.props.mainStore.getBitcoinList();
		this.props.mainStore.fetchItems(data);
	}
	render() {
		const list = this.props.mainStore.items;
		return <Prices navigation={this.props.navigation} list={list} />;
	}
}
