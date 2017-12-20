import * as React from "react";
import { Container, Content, Text, Card, CardItem, Body, Icon} from "native-base";
import Carousel from 'react-native-snap-carousel';
import styles from "./styles";
import { Dimensions, TouchableOpacity } from 'react-native'
// import { VictoryPie , VictoryChart, VictoryBar} from 'victory-native';
import { random, range } from "lodash";

let {width} = Dimensions.get('window')
export interface Props {
	navigation: any;
	walletStore: any;
}
export interface State {
}

class Wallet extends React.Component<Props, State> {
	_carousel: any;
	constructor(props) {
		super(props);
		this.state = {
		
		  transitionData: this.getTransitionData(),

		};
	  }
	
	coolCard = (item, navigation) => {
		return (
		<TouchableOpacity onPress={() => navigation.navigate('Article')}>
			<Card style={{width: width - 75, height: 200 }} >
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
			</TouchableOpacity>
		)
	}
	getTransitionData() {
		const n = random(4, 10);
		return range(n).map((i) => {
		  return {
			x: i,
			y: random(2, 10)
		  };
		});
	  }
	render() {
		
		let arr = [{text: 'What Is the Blockchain', title: 'SWeet Title'},
		{text: 'COol Tex', title: 'SWeet Title'},
		{text: 'COol Tex', title: 'SWeet Title'},
		{text: 'COol Tex', title: 'SWeet Title'},
		]
		return (
			<Container style={styles.container}>
				<Content>
					<Text onPress={() => this.props.navigation.navigate('AddCoin')} style={styles.total}>$1638.93</Text>
         	 		<Text onPress={() => this.props.navigation.navigate('AddCoin')} style={styles.account}>Your Wallet<Icon name="arrow-forward" /> </Text>
					  {/* <VictoryPie
						data={[
							{ x: "Cats", y: 35 },
							{ x: "Dogs", y: 40 },
							{ x: "Birds", y: 55 }
						]}
						/> */}
					<Text style={{marginLeft: 40, marginTop: 30,marginBottom: 10, fontSize: 25}}>Learn</Text>
					<Carousel
						ref={(c) => { this._carousel = c; }}
						data={arr}
						renderItem={(item) => this.coolCard(item, this.props.navigation)}
						sliderWidth={width}
						itemWidth={width - 75}
						itemHeight={200}
					/>
					<Text style={{marginLeft: 40, marginTop: 30,marginBottom: 10, fontSize: 25}}>Tips</Text>
					<Carousel
						ref={(c) => { this._carousel = c; }}
						data={arr}
						renderItem={(item) => this.coolCard(item, this.props.navigation)}
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
