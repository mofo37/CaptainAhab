import * as React from "react";
import { Container, Content, Text,Button } from "native-base";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from "./styles";
import { Dimensions, ImageBackground } from 'react-native'
let {width, height} = Dimensions.get('window');

export interface Props {
	navigation: any;
}
export interface State {
	slider1ActiveSlide
}

class Onboarding extends React.Component<Props, State> {
	_carousel: any;
	constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: 0,
        };
    }
	
	coolCard = ({item}) => {
		return (
		<ImageBackground source={require('../../../assets/home.jpeg')} 
			style={{width: width, height: height, paddingTop: 80, alignItems: 'center' }}>
			<Text style={{color: 'white', fontSize: 40, textAlign: 'center'}}>{item.title}</Text>
            <Text style={{color: 'white', fontSize: 20, marginTop: 30, textAlign: 'center'}}>{item.text}</Text>
		</ImageBackground>
		)
	}
	render() {
		let arr = [
		{text: 'Bringing you closer to whales', title: 'Captain Aahab'},
		{text: 'We give the insights you need in a fast changing market', title: 'Make better decisions'},
		{text: 'Learn to ride the waves that only whales can cause', title: 'Dominate the dolphins'},
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
						autoplay={true}
						onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
					/>
					<Pagination
						dotsLength={arr.length}
						containerStyle={{
							position: 'absolute',
							alignSelf: 'center',
							top: height -100
						}}
						dotColor={'white'}
						dotStyle={{height: 10, width: 10}}
						inactiveDotColor={'white'}
						carouselRef={this._carousel}
						activeDotIndex={this.state.slider1ActiveSlide}
					/>
					<Button 
						style={{ backgroundColor: '#FF5722', position: 'absolute',
						alignSelf: 'center', width: 120,
						top: height - 150 }} 
						block 
						onPress={() => this.props.navigation.navigate('Login')}
					>
						<Text>Join</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

export default Onboarding;
