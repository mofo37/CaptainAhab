import * as React from "react";
import { Container, Content, Text,Button } from "native-base";
// import Carousel, { Pagination } from 'react-native-snap-carousel';
import stylesCool from "./styles";
import { Dimensions, ImageBackground, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper';


var styles = StyleSheet.create({
	wrapper: {
	},
	slide1: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#9DD6EB',
	},
	slide2: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#97CAE5',
	},
	slide3: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#92BBD9',
	},
	text: {
	  color: '#fff',
	  fontSize: 30,
	  fontWeight: 'bold',
	}
  })
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
	
	coolCard = (i, item) => {
		return (
		<ImageBackground key={i} source={require('../../../assets/home.jpeg')} 
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
			<Container style={stylesCool.container}>
				<Content>
					<Swiper style={styles.wrapper} showsButtons={false}>
						{arr.map((item, i) => {
							return this.coolCard(i, item);
						})}	
					</Swiper>
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
