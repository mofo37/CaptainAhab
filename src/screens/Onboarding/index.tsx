import * as React from "react";
import { Container, Content, Text } from "native-base";
import Carousel from 'react-native-snap-carousel';
import styles from "./styles";
import { Dimensions, Image, View } from 'react-native'
let {width, height} = Dimensions.get('window');

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
		<View style={{width: width, height: height }}>
            <Text>{item.title}</Text>
			<Image
                source={require('/react-native/img/favicon.png')}
            />
            <Text>{item.text}</Text>
		</View>
		)
	}
	render() {
		let arr = [
		{text: 'COol Tex', title: 'SWeet Title'},
		{text: 'COol Tex', title: 'SWeet Title'},
		{text: 'COol Tex', title: 'SWeet Title'},
		]
		return (
			<Container style={styles.container}>
				<Content>
					<Carousel
						ref={(c) => { this._carousel = c; }}
						data={arr}
						renderItem={this.coolCard}
						sliderWidth={width}
						itemWidth={width}
						itemHeight={height}
					/>
				</Content>
			</Container>
		);
	}
}

export default Wallet;
