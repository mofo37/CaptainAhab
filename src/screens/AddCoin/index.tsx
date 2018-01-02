import * as React from "react";
import { View, TextInput } from 'react-native'
import { Container, Content, Text, Icon, Button, H1 } from "native-base";
import styles from "./styles";
// import dismissKeyboard from 'react-native-dismiss-keyboard';
import ModalDropdown from 'react-native-modal-dropdown';
import colors from '../../theme/colors';

import { Dimensions } from 'react-native'
let {width, height} = Dimensions.get('window')
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

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Icon style={{ marginLeft: 15 }} name='ios-close-circle-outline' onPress={() => this.props.navigation.goBack()} />
                    <Text style={styles.total}>$1638.93</Text>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{ flex: 1, flexDirection: 'row'}}>
                            <TextInput
                                onChangeText={myNumber => this.setState({ myNumber })}
                                style={styles.input}
                                keyboardType='numeric'
                                value={this.state.myNumber}
                            />
                            <ModalDropdown ref={el => this._dropdown_3 = el}
                                style={styles.dropdown_3}
                                options={[
                                    'BTC', 'ETH', 'LTC', 'XRP', 'BCH', 'ADA', 'MIOTA', 'DASH', 'XEM', 'XMR',
                                    'EOS', 'BTG', 'NEO', 'QTUM', 'XLM', 'ETC', 'ETC', 'TRX', 'LSK', 'BCC',
                                    'XVG', 'ICX', 'ARDR', 'XRB', 'OMG', 'ZEC']}
                                defaultValue='BTC'
                                textStyle={styles.dropdowText}
                                dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                                dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}
                            />
                        </View>
                        <Button
                            style={{
                                backgroundColor: colors.coral, width: width,
                                height: 100, borderRadius: 0,
                                position: 'absolute', top: height - 350,
                                alignItems: 'center'
                            }}
                            block
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <H1 style={{color: 'white'}}>Add Coin</H1>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default AddCoin;
