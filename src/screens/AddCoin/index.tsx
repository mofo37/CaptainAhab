import * as React from "react";
import { View ,TextInput, TouchableHighlight} from 'react-native'
import {Container, Content, Text, Icon} from "native-base";
import styles from "./styles";
import dismissKeyboard from 'react-native-dismiss-keyboard';

// import { Dimensions } from 'react-native'
// let {width} = Dimensions.get('window')
export interface Props {
    navigation: any;
    walletStore: any;

}
export interface State {
    myNumber: any;
}

class AddCoin extends React.Component<Props, State> {
	constructor(props) {
        super(props);
        this.state = {
            myNumber: ''
        };
    }

    onChange(text) {
        let newText = '';
        let numbers = '0123456789';
    
        for (var i = 0; i < text.length; i++) {
            if ( numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
        }   
        this.setState({myNumber: newText})
    }
	
	render() {
		return (
			<Container style={styles.container}>
				<Content>
				<Icon style={{marginLeft: 15}} name='ios-close-circle-outline' onPress={() => this.props.navigation.goBack() }/>
				<Text style={styles.total}>$1638.93</Text>
				<View style={{flex: 1}}>
                    <TouchableHighlight onPress={() => dismissKeyboard()}>
                        <Text style={styles.welcome}>
                        Press me to close the keyboard
                        </Text>
                    </TouchableHighlight>
                    <TextInput 
                        onChangeText={myNumber => this.setState({myNumber})}
                        style={styles.input}
                        value={this.state.myNumber}
                    />
                </View>    
                
				</Content>
			</Container>
		);
	}
}

export default AddCoin;
