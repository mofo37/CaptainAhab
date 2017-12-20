import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import { Card, CardItem, Body} from "native-base";

import Modal from 'react-native-modal'; // 2.4.0
import Carousel from 'react-native-snap-carousel';
let {width} = Dimensions.get('window')


interface Props {
    onPress: any;
    isVisible: boolean;
}

export default class UpgradeModal extends Component<Props, {}> {
    _carousel
    coolCard = ({item}) => {
		return (
		<Card style={{width: width - 150, height: 200 }}>
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
		]
      return (
          <Modal
            isVisible={this.props.isVisible}
            animationInTiming={200}
            animationIn={'slideInDown'}
            animationOutTiming={200}
            backdropTransitionInTiming={200}
            backdropTransitionOutTiming={200}
            onBackdropPress={this.props.onPress}            
          >
            <View style={styles.modalContent}>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={arr}
                    renderItem={this.coolCard}
                    sliderWidth={width-100}
                    itemWidth={width - 150}
                    itemHeight={200}
                />
            </View>
          </Modal>
      );
    }
  }
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#FF5722',
      padding: 12,
      margin: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      width: 80,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    text: {
        color: 'white',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
      height: 400
    },
    bottomModal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
  });