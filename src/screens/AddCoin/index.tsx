import * as React from "react";
import { View, TextInput, TouchableHighlight } from 'react-native'
import { Container, Content, Text, Icon } from "native-base";
import styles from "./styles";
import dismissKeyboard from 'react-native-dismiss-keyboard';
import ModalDropdown from 'react-native-modal-dropdown';

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
    _dropdown_3: any;
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
            if (numbers.indexOf(text[i]) > -1) {
                newText = newText + text[i];
            }
        }
        this.setState({ myNumber: newText })
    }

    _dropdown_3_adjustFrame(style) {
        console.log(`frameStyle={width:${style.width}, height:${style.height}, top:${style.top}, left:${style.left}, right:${style.right}}`);
        style.top -= 15;
        style.left += 150;
        return style;
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Icon style={{ marginLeft: 15 }} name='ios-close-circle-outline' onPress={() => this.props.navigation.goBack()} />
                    <Text style={styles.total}>$1638.93</Text>
                    <View style={{ flex: 1 }}>
                        <TouchableHighlight onPress={() => dismissKeyboard()}>
                            <Text style={styles.welcome}>
                                Press me to close the keyboard
                        </Text>
                        </TouchableHighlight>
                        <TextInput
                            onChangeText={myNumber => this.setState({ myNumber })}
                            style={styles.input}
                            value={this.state.myNumber}
                        />
                        <ModalDropdown ref={el => this._dropdown_3 = el}
                            style={styles.dropdown_3}
                            options={[
                                'BTC', 'ETH', 'LTC', 'XRP', 'BCH', 'ADA', 'MIOTA', 'DASH', 'XEM', 'XMR',
                                'EOS', 'BTG', 'NEO', 'QTUM', 'XLM', 'ETC', 'ETC', 'TRX', 'LSK', 'BCC',
                                'XVG', 'ICX', 'ARDR', 'XRB', 'OMG', 'ZEC']}
                            adjustFrame={style => this._dropdown_3_adjustFrame(style)}
                            dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                            dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}
                        />
                    </View>
                </Content>
            </Container>
        );
    }
}

export default AddCoin;
