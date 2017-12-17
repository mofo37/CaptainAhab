import * as React from "react";
import { Container, Content, Text, Card, CardItem, Body, Icon} from "native-base";
import Carousel from 'react-native-snap-carousel';
import styles from "./styles";
import { Dimensions } from 'react-native'
let {width} = Dimensions.get('window')
export interface Props {
	navigation: any;
}
export interface State {
}

class Wallet extends React.Component<Props, State> {
	_carousel: any;
	
	coolCard = ({item}) => {
		console.log(item)
		return (
		<Card style={{width: width - 75, height: 200 }}>
			<CardItem header>
			<Text>{item.title}</Text>
			</CardItem>
			<CardItem>
			<Body>
				<Text>
				{item.text}
				</Text>
			</Body>
			</CardItem>
			<CardItem footer>
			<Text>Read</Text>
			</CardItem>
		</Card>
		)
	}
	render() {
		
		let arr = [{text: 'COol Tex', title: 'SWeet Title'},
		{text: 'COol Tex', title: 'SWeet Title'},
		{text: 'COol Tex', title: 'SWeet Title'},
		{text: 'COol Tex', title: 'SWeet Title'},
		]
		return (
			<Container style={styles.container}>
				<Content>
				<Text style={styles.total}>$1638.93</Text>
         	 	<Text style={styles.account}>Your Wallet<Icon name="arrow-forward" /> </Text>
				
					<Text style={{marginLeft: 40, marginTop: 30,marginBottom: 10, fontSize: 25}}>Learn</Text>
					<Carousel
						ref={(c) => { this._carousel = c; }}
						data={arr}
						renderItem={this.coolCard}
						sliderWidth={width}
						itemWidth={width - 75}
						itemHeight={200}
					/>
					<Text style={{marginLeft: 40, marginTop: 30,marginBottom: 10, fontSize: 25}}>Tips</Text>
					<Carousel
						ref={(c) => { this._carousel = c; }}
						data={arr}
						renderItem={this.coolCard}
						sliderWidth={width}
						itemWidth={width - 75}
						itemHeight={200}
					/>
				</Content>
			</Container>
		);
	}
}

export default Wallet;
